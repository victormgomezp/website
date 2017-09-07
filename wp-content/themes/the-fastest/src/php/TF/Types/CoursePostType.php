<?php

namespace TF\Types;

use WPAS\Types\BasePostType;

class CoursePostType extends BasePostType{
    
    function populate_fields(){
        
        add_filter('acf/load_field/name=active_campaign_slug', [$this,'populate_active_campaign_slug']);
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
    
}