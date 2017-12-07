<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WPAS\Settings\WPASThemeSettingsBuilder;
use WP_Query;
use DateTime;

class WorkshopPostType extends BasePostType{
    
    function populate_fields(){
        
        add_filter('acf/load_field/name=breathecode_workshop_slug', [$this,'populate_breathecode_slug']);
        
    }
    
    function populate_breathecode_slug( $field ) {
        
        $field['choices'] = array();
        $field['choices']['0'] = 'Select a slug from breathecode';

        $cohortsJSON = @file_get_contents(BREATHECODE_API_HOST.'/wtemplates/');
        if($cohortsJSON)
        {
            $cohorts = json_decode($cohortsJSON);
            if($cohorts && $cohorts->code==200) foreach($cohorts->data as $opt) $field['choices'][$opt->slug] = $opt->name.' ('.$opt->slug.')';
        
            
        }else WPASAdminNotifier::addTransientMessage(WPASAdminNotifier::ERROR,'Error getting the BreatheCode WorkshopTemplate Slugs');
        
        return $field;
        
    }
    
    public static function get($args){
        
        $args = array_merge($args,[
            'post_type' => 'workshop'
        ]);
        
        $query = new WP_Query($args);
        if($query->posts && count($query->posts)>=1){
            return $query->posts[0];
        }else return null;
    }
    
    public static function all($args=null, $hook=null){
        
        $args = array_merge($args,[
            'post_type' => 'workshop'
            ]);
        
        $query = new WP_Query($args);
        wp_reset_postdata();
        $objectsArray = [];
        foreach($query->posts as $object){
            if($hook) $objectsArray[] = $hook($object);
            else $objectsArray[] = self::fillMember($object);
        } 
        return $objectsArray;
    }
    /*
    private static function fillMember($object){
        
        $arrayObject = (array) $object;
        $arrayObject['permalink'] = get_permalink($object->ID);
        $arrayObject['thumb_url'] = get_the_post_thumbnail_url($object->ID);
        $arrayObject['event_end_time'] = get_field( 'event_end_time',$object->ID );
        $arrayObject['event_start_time'] = get_field( 'event_start_time',$object->ID );
        $arrayObject['event_date'] = get_field( 'event_date',$object->ID );

        $arrayObject['day'] = substr($arrayObject['event_date'],6,2);
        $arrayObject['month'] = self::getMonthName(substr($arrayObject['event_date'],4,2));
        $arrayObject['year'] = substr($arrayObject['event_date'],0,4);
        //print_r($arrayObject); die();
        
        $arrayObject['address'] = get_field( 'event_address',$object->ID );
        $arrayObject['ticket_url'] = get_field( 'event_ticket_url',$object->ID );
        $arrayObject['post_content'] = get_field( 'event_small_description',$object->ID );
        return $arrayObject;
    }
    */
    public static function getDateInformation($workshop){
        
        $workshop = (array) $workshop;
        
        $time = strtotime($workshop['start-date']);
        
        $wkshp = [];
        $wkshp['day'] = date('d',$time);
        $wkshp['month'] = date('M',$time);
        $wkshp['year'] = date('Y',$time);
        $wkshp['date'] = date('F j, Y',$time);
        $wkshp['bc_location_slug'] = $workshop['location_slug'];
        $wkshp['bc_wtemplate_slug'] = $workshop['wtemplate_slug'];
        $wkshp['time'] = $time;
        $wkshp['language'] = ($workshop['language']=='es') ? 'Español' : 'English';
        $wkshp['icon'] = ($workshop['language']=='es') ? 'spain' : 'united-states';

        $workshopTemplate = self::get(['meta_key' => 'breathecode_workshop_slug', 'meta_value' => $wkshp['bc_wtemplate_slug']]);
        if($workshopTemplate){
            $wkshp['name'] = $workshopTemplate->post_title;
            $wkshp['slug'] = $workshopTemplate->post_name;
            $wkshp['tagline'] = get_field('workshop_tagline',$workshopTemplate->ID);
            $wkshp['duration'] = get_field('workshop_duration',$workshopTemplate->ID);
        } 
        else $wkshp['name'] = "Uknowwn: ".$course['bc_wtemplate_slug'];
        //print_r($wkshp); die();
        $location = LocationPostType::get(['meta_key' => 'breathecode_location_slug', 'meta_value' => $workshop['location_slug']]);
        if($location){
            $wkshp['location'] = $location->post_title;
            $course['location_id'] = $location->ID;
        } 
        else $wkshp['location'] = 'Uknowwn';
        
        return $wkshp;
    }
    
    public static function getUpcomingWorkshops(){

        $query = self::getCalendarQuery();
        $workshops = WPASThemeSettingsBuilder::getThemeOption('sync-bc-workshops-api');
        $upcoming = [];
        if(!empty($workshops)) foreach($workshops as $c) if(self::filterQuery($c,$query)) $upcoming[] = $c;
        
        return $upcoming;
    }
    
    public static function getCalendarQuery(){
        $query = [];
        if(!empty($_REQUEST['lang'])) $query['language'] = $_REQUEST['lang'];
        if(!empty($_REQUEST['l'])) $query['location'] = $_REQUEST['l'];
        
        return $query;
    }
    
    private static function fillMember($object){
        
        $arrayObject = (array) $object;
        //$arrayObject['financed_minimum_monthly_price'] = get_field('financed_minimum_monthly_price',$object->ID);
        //$arrayObject['financed_deposit'] = get_field('financed_deposit',$object->ID);
        //$arrayObject['full_price'] = get_field('full_price',$object->ID);
        return $arrayObject;
    }
    
    private static function filterQuery($workshop, $query){

        if(!empty($query['language']) && strtolower(substr($workshop['language'],0,2)) != $workshop['language']) return false;
        if(!empty($query['location']) && $workshop['bc_location_slug'] != $query['location']) return false;
        if(new DateTime() > new DateTime(date('Y-m-d',$workshop['time']))) return false;
        
        return true;
    }
    
    private static function getMonthName($month){
        switch($month){
            case "01": return 'JAN'; break;
            case "02": return 'FEB'; break;
            case "03": return 'MAR'; break;
            case "04": return 'APR'; break;
            case "05": return 'MAY'; break;
            case "06": return 'JUN'; break;
            case "07": return 'JUL'; break;
            case "08": return 'AGO'; break;
            case "09": return 'SEP'; break;
            case "10": return 'OCT'; break;
            case "11": return 'NOV'; break;
            case "12": return 'DEC'; break;
        }
        
        return "";
    }
}