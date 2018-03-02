<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WP_Query;

class PartnerPostType extends BasePostType{
    
    function populate_fields(){

    }
    
    public static function fill($post){
        
        return array_merge((array) $post, [
            'image' => get_field('image',$post->ID),
            'partner_type' => get_field('partner_type',$post->ID)
        ]);
    }
    
}