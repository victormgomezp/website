<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WP_Query;

class PostPostType extends BasePostType{
    
    public static function get($args){
        
        $query = new WP_Query(['post_type' => 'post', 'slug' => $args['slug']]);
        if($query->posts && count($query->posts)==1){
            return end($query->posts);
        }else return null;
    }
    
    public static function all($args=null, $hook=null){
        
        $args = array_merge($args,[
            'post_type' => 'post'
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
        $arrayObject['post_author'] = $object->post_author;
        $arrayObject['permalink'] = get_permalink($object->ID);
        $arrayObject['beautiful_date'] = get_the_date('D M j',$object->ID);
        $arrayObject['thumb_url'] = get_the_post_thumbnail_url($object->ID);
        $arrayObject['post_author_name'] = get_the_author_meta( 'display_name' , $object->post_author );
        $arrayObject['post_author_avatar'] = get_avatar_url( $object->post_author );
        return $arrayObject;
    }
}