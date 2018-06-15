<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WP_Query;

class PartnerPostType extends BasePostType{
    
    function populate_fields(){

    }
    
    protected static $post_type = 'partner';
    
    public static function all($args=[], $hook=null){
        $args = array_merge([
            'post_type' => self::$post_type
            ],$args);
        
        $query = new WP_Query($args);
        return $query;
    }
    
    public static function fill($post){
        
        return array_merge((array) $post, [
            'image' => get_field('image',$post->ID),
            'partner_type' => get_field('partner_type',$post->ID)
        ]);
    }
    
}