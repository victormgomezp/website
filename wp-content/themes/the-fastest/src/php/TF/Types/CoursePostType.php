<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WPAS\Settings\WPASThemeSettingsBuilder;
use WP_Query;
use DateTime;

class CoursePostType extends BasePostType{
    
    function populate_fields(){
        
        add_filter('acf/load_field/name=active_campaign_course_slug', [$this,'populate_active_campaign_slug']);
        add_filter('acf/load_field/name=breathecode_course_slug', [$this,'populate_breathecode_slug']);
        
    }
    
    function populate_active_campaign_slug( $field ) {
        
        $coursesField = \TF\ActiveCampaign\ACAPI::getCustomField('course');
        // reset choices
        $field['choices'] = array();
        $field['choices']['0'] = 'Select a slug from active campaign';
        foreach($coursesField->options as $opt) $field['choices'][$opt->value] = $opt->name;
    
        // return the field
        return $field;
        
    }
    
    function populate_breathecode_slug( $field ) {
        
        $field['choices'] = array();
        $field['choices']['0'] = 'Select a slug from breathecode';

        $cohortsJSON = @file_get_contents(BREATHECODE_API_HOST.'/profiles/');
        if($cohortsJSON)
        {
            $cohorts = json_decode($cohortsJSON);
            if($cohorts && $cohorts->code==200) foreach($cohorts->data as $opt) $field['choices'][$opt->slug] = $opt->name.' ('.$opt->slug.')';
        
            
        }else WPASAdminNotifier::addTransientMessage(WPASAdminNotifier::ERROR,'Error getting the BreatheCode Profiles Slugs');
        
        return $field;
        
    }
    
    public static function getUpcomingDates(){
        
        $query = self::getCalendarQuery();
        $cohorts = WPASThemeSettingsBuilder::getThemeOption('sync-bc-cohorts-api');
        $upcoming = [];
        if(!empty($cohorts)) foreach($cohorts as $c) if(self::filterQuery($c,$query)) $upcoming[] = $c;
        
        return $upcoming;
    }
    
    public static function getDateInformation($cohort){
        
        $cohort = (array) $cohort;
        
        $time = strtotime($cohort['kickoff-date']);
        
        $course = [];
        $course['day'] = date('d',$time);
        $course['month'] = date('M',$time);
        $course['year'] = date('Y',$time);
        $course['date'] = date('F j, Y',$time);
        $course['bc_location_slug'] = $cohort['location_slug'];
        $course['bc_profile_slug'] = $cohort['profile_slug'];
        $course['status'] = $cohort['status'];
        $course['time'] = $time;
        $course['language'] = ($cohort['language']=='en') ? 'English' : 'Español';
        $course['icon'] = ($cohort['language']=='en') ? 'united-states' : 'spain';

        $courseTemplate = self::get(['meta_key' => 'breathecode_course_slug', 'meta_value' => $course['bc_profile_slug']]);
        if($courseTemplate){
            $course['name'] = $courseTemplate->post_title;
            $course['slug'] = $courseTemplate->post_name;
            $course['tagline'] = get_field('course_tagline',$courseTemplate->ID);
            $course['duration'] = get_field('course_duration',$courseTemplate->ID);
        } 
        else $course['name'] = "Uknowwn: ".$course['bc_profile_slug'];
        //print_r($course); die();
        $location = LocationPostType::get(['meta_key' => 'breathecode_location_slug', 'meta_value' => $cohort['location_slug']]);
        if($location){
            $course['location'] = $location->post_title;
        } 
        else $course['location'] = 'Uknowwn';
        
        return $course;
    }
    
    public static function getCalendarQuery(){
        $query = [];
        if(!empty($_REQUEST['lang'])) $query['language'] = $_REQUEST['lang'];
        if(!empty($_REQUEST['l'])) $query['location'] = $_REQUEST['l'];
        
        return $query;
    }
    
    private static function filterQuery($cohort, $query){

        if(!empty($query['language']) && strtolower(substr($cohort['language'],0,2)) != $query['language']) return false;
        if(!empty($query['location']) && $cohort['bc_location_slug'] != $query['location']) return false;
        if(new DateTime() > new DateTime(date('Y-m-d',$cohort['time']))) return false;
        
        return true;
    }
    
    public static function get($args){
        //['post_type' => 'course', 'slug' => $args['slug']]
        $args = array_merge($args, ['post_type' => 'course']);
        $query = new WP_Query($args);
        if($query->posts && count($query->posts)==1){
            return end($query->posts);
        }else return null;
    }
    
    private static function fillMember($object){
        
        $arrayObject = (array) $object;
        $arrayObject['financed_minimum_monthly_price'] = get_field('financed_minimum_monthly_price',$object->ID);
        $arrayObject['financed_deposit'] = get_field('financed_deposit',$object->ID);
        $arrayObject['full_price'] = get_field('full_price',$object->ID);
        return $arrayObject;
    }
    
}