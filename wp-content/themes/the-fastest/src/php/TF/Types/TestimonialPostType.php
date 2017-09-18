<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WP_Query;

class TestimonialPostType extends BasePostType{
    
    function populate_fields(){
        
        //add_filter('acf/load_field/name=active_campaign_slug', [$this,'populate_active_campaign_slug']);
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
    
    public static function all(){
        $query = new WP_Query([
            'post_type' => 'testimonial'
            ]);
            
        $testimonialsArray = [];
        foreach($query->posts as $testimonial) $testimonialsArray[] = self::fillMember($testimonial);
        return $testimonialsArray;
    }
    
    private static function fillMember($testimonial)
    {
        $arrayTesti = (array) $testimonial;
        $arrayTesti['student_name'] = get_field('student_name',$testimonial->ID);
        $arrayTesti['testimonial_date'] = get_field('testimonial_date',$testimonial->ID);
        $arrayTesti['stars'] = get_field('stars',$testimonial->ID);
        $arrayTesti['student_thumb'] = get_field('student_thumb',$testimonial->ID);
        
        return $arrayTesti;
    }
    
}