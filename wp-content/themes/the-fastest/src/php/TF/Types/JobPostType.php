<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WP_Query;

class JobPostType extends BasePostType{
    
    public static function get($args=[]){
        
        $args = array_merge($args,[
            'post_type' => 'job',
            'status' => 'publish'
        ]);
        
        $query = new WP_Query($args);
        if($query->posts && count($query->posts)>=1){
            return $query->posts[0];
        }else return null;
    }
    
    public static function all($args=[], $hook=null){
        
        $args = array_merge($args, [
            'post_type' => 'job',
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
    
    private static function fillMember($object){

        
        $arrayObject = (array) $object;
        //$arrayObject['post_content'] = get_field( 'event_small_description',$object->ID );
        return $arrayObject;
    }
    
}