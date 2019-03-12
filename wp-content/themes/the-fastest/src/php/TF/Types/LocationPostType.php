<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use TF\Types\LocationPostType;
use WP_Query;

class LocationPostType extends BasePostType{
    
    function populate_fields(){

        add_filter('acf/load_field/name=active_campaign_location_slug', [$this,'populate_active_campaign_slug']);
        add_filter('acf/load_field/name=breathecode_location_slug', [$this,'populate_breathecode_slug']);
        
        add_filter( 'gform_pre_render', [$this,'populate_gf_location_dropdown'] );
    }
    
    function populate_active_campaign_slug( $field ) {
        
        $coursesField = \TF\ActiveCampaign\ACAPI::getCustomField('utm_location');
        
        // reset choices
        $field['choices'] = array();
        $field['choices']['0'] = 'Select a slug from active campaign';
        foreach($coursesField->options as $opt) $field['choices'][$opt->name] = $opt->value;
    
        // return the field
        return $field;
        
    }
    
    function populate_breathecode_slug( $field ) {
        
        $field['choices'] = array();
        $field['choices']['0'] = 'Select a slug from breathecode';

        $cohortsJSON = @file_get_contents(BREATHECODE_API_HOST.'/locations/');
        if($cohortsJSON)
        {
            $cohorts = json_decode($cohortsJSON);
            if($cohorts && $cohorts->code==200) foreach($cohorts->data as $opt) $field['choices'][$opt->slug] = $opt->name.' ('.$opt->slug.')';
        
            
        }else WPASAdminNotifier::addTransientMessage(WPASAdminNotifier::ERROR,'Error getting the BreatheCode Location Slugs: '.BREATHECODE_API_HOST.'/locations/');
        
        return $field;
        
    }
    
    function populate_gf_location_dropdown( $form ) {

        if(!empty($form['fields'])) foreach ( $form['fields'] as &$field ) {
    
            if ( ($field->type != 'select' && $field->type != 'button-group') || strpos( $field->cssClass, 'populate-locations' ) === false ) {
                continue;
            }
    
            // you can add additional parameters here to alter the posts that are retrieved
            // more info: [http://codex.wordpress.org/Template_Tags/get_posts](http://codex.wordpress.org/Template_Tags/get_posts)
            $locations = LocationPostType::all();

            $countryNamesAdded = [];
            $choices = array();
            foreach ( $locations as $l ) {
                $country = get_field('country',$l['ID']);
                if(!in_array($country, $countryNamesAdded))
                {
                    $countryNamesAdded[] = $country;
                    $choices[] = array( 'text' => $country, 'value' => $l['ac_location_slug'] );
                }
            }
    
            // update 'Select a Post' to whatever you'd like the instructive option to be
            $field->placeholder = 'Select a Location';
            $field->choices = $choices;
    
        }
    
        return $form;
    }
    
    public static function get($args=[]){
        
        $args['post_type'] = 'location';
        $query = new WP_Query($args);

        if($query->posts && count($query->posts)==1){
            return self::fillMember($query->posts[0]);
        }else return null;
    }
    
    public static function all($args=[], $hook=null){
        $args = array_merge($args, [
            'post_type' => 'location',
            'post_status' => 'publish'
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
    
    public static function fromJob($jobId){
        $locations = get_field('job_locations', $jobId);
        foreach($locations as $object){
            $objectsArray[] = self::fillMember($object);
        } 
        return $objectsArray;
    }
    
    private static function fillMember($object){
        $arrayObject = (array) $object;
        $arrayObject['flag'] = get_field('flag_icon',$arrayObject['ID']);
        $arrayObject['bc_location_slug'] = get_field('breathecode_location_slug',$arrayObject['ID']);
        $arrayObject['ac_location_slug'] = get_field('active_campaign_location_slug',$arrayObject['ID']);
        $arrayObject['latitude'] = floatval(get_field('location_latitude',$arrayObject['ID']));
        $arrayObject['longitude'] = floatval(get_field('location_longitude',$arrayObject['ID']));
        $arrayObject['city'] = floatval(get_field('location_city',$arrayObject['ID']));
        $arrayObject['short-title'] = substr($arrayObject['post_title'],0,13).'...';
        
        return $arrayObject;
    }
    
    public static function nearest($latitude, $longitude){
        $query = new WP_Query([
            'post_type' => 'location',
            "lang" => "en",
            'post_status' => 'publish'
        ]);
        wp_reset_postdata();
        $nearest = null;
        if(defined('WP_DEBUG_CONTEXT') && WP_DEBUG_CONTEXT){
            echo "<ul style='background: #232323; position: absolute;right: 0;top: 20px;color: white;padding: 5px;line-height: 10px;font-size: 11px;'>";
            echo "<li style='list-style: none; color: orange;'>Nearest location calculation</li>";
            echo "<li style='list-style: none;'>Original: ".$latitude.",".$longitude."</li>";
        } 
        foreach($query->posts as $object){
            $l = (array) $object;
            $l['lat'] = floatval(get_field('location_latitude',$object->ID));
            $l['lon'] = floatval(get_field('location_longitude',$object->ID));
            $l['bc_location_slug'] = get_field('bc_location_slug',$object->ID);
            $l['miles'] = self::_distance($l, [
                "lat" => $latitude,
                "lon" => $longitude
            ]);
            if(defined('WP_DEBUG_CONTEXT') && WP_DEBUG_CONTEXT) echo "<li style='list-style: none;'>".$l["post_title"].": ".$l['miles']."</li>";
            if(!$nearest || $nearest["miles"] > $l['miles']) $nearest = $l;
        } 
        if(defined('WP_DEBUG_CONTEXT') && WP_DEBUG_CONTEXT) echo "</ul>";
        return self::fillMember($nearest);
    }
    
    private static function _distance($a, $b)
    {
        $theta = $a['lon'] - $b['lon'];
        $dist = sin(deg2rad($a['lat'])) * sin(deg2rad($b['lat'])) +  cos(deg2rad($a['lat'])) * cos(deg2rad($b['lat'])) * cos(deg2rad($theta));
        $dist = acos($dist);
        $dist = rad2deg($dist);
        $miles = $dist * 60 * 1.1515;
        return $miles;
    }
    
}