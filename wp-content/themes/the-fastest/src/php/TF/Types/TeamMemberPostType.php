<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WP_Query;

class TeamMemberPostType extends BasePostType{
    
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
    
    public static function all($args = [], $hook=null){
        
        $args = array_merge($args,[
            'post_type' => 'team-member'
            ]);
        
        $query = new WP_Query($args);
        $membersArray = [];
        foreach($query->posts as $member) $membersArray[] = self::fillMember($member);
        return $membersArray;
    }
    
    private static function fillMember($member)
    {
        $arrayMember = (array) $member;
        $arrayMember['full_name'] = get_field('full_name',$member->ID);
        $arrayMember['teacher_thumb'] = get_field('teacher_thumb',$member->ID);
        
        return $arrayMember;
    }
    
}