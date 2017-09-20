<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WP_Query;

class EventPostType extends BasePostType{
    
    public static function get($args){
        
        $args = array_merge($args,[
            'post_type' => 'event'
        ]);
        
        $query = new WP_Query($args);
        if($query->posts && count($query->posts)==1){
            return end($query->posts);
        }else return null;
    }
    
    public static function all($args=null, $hook=null){
        
        $args = array_merge($args,[
            'post_type' => 'event'
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
    
    private static function fillMember($object){

        $arrayObject = (array) $object;
        $arrayObject['permalink'] = get_permalink($object->ID);
        $arrayObject['thumb_url'] = get_the_post_thumbnail_url($object->ID);
        $arrayObject['event_end_time'] = get_field( 'event_end_time',$object->ID );
        $arrayObject['event_start_time'] = get_field( 'event_start_time',$object->ID );
        $arrayObject['event_date'] = get_field( 'event_date',$object->ID );
        return $arrayObject;
    }
}