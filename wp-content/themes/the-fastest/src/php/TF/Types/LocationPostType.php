<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WP_Query;

class LocationPostType extends BasePostType{
    
    function populate_fields(){
        
        add_filter('acf/load_field/name=active_campaign_location_slug', [$this,'populate_active_campaign_slug']);
        add_filter('acf/load_field/name=breathecode_location_slug', [$this,'populate_breathecode_slug']);
    }
    
    function populate_active_campaign_slug( $field ) {
        
        $coursesField = \TF\ActiveCampaign\ACAPI::getCustomField('location');
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

        $cohortsJSON = @file_get_contents(BREATHECODE_API.'/locations/');
        if($cohortsJSON)
        {
            $cohorts = json_decode($cohortsJSON);
            if($cohorts && $cohorts->code==200) foreach($cohorts->data as $opt) $field['choices'][$opt->slug] = $opt->name.' ('.$opt->slug.')';
        
            
        }else WPASAdminNotifier::addTransientMessage(WPASAdminNotifier::ERROR,'Error getting the BreatheCode Location Slugs');
        
        return $field;
        
    }
    
    public static function get($args){
        
        $query = new WP_Query(['post_type' => 'location', 'slug' => $args['slug']]);
        if($query->posts && count($query->posts)==1){
            return end($query->posts);
        }else return null;
    }
    
    public static function all($args=null, $hook=null){
        $query = new WP_Query([
            'post_type' => 'location'
            ]);
        wp_reset_postdata();
        $objectsArray = [];
        foreach($query->posts as $object){
            if($hook) $objectsArray[] = $hook($object);
            else $objectsArray[] = self::fillMember($object);
        } 
        return $objectsArray;
    }
    
    private static function fillMember($object){
        
        $arrayObject = (array) $object;
        $arrayObject['flag'] = get_field('flag_icon',$object->ID);
        $arrayObject['bc_location_slug'] = get_field('breathecode_location_slug',$object->ID);
        $arrayObject['short-title'] = substr($object->post_title,0,13).'...';
        return $arrayObject;
    }
}