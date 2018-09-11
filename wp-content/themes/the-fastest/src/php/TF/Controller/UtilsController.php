<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use \WP_Query;

class UtilsController{
    
    public static function getBodyStyles($postId){
        
        $styles = 'style="';
        
        $backgroundColor = get_field('body_background_color', $postId);
        if($backgroundColor) $styles .= 'background-color: '.$backgroundColor.';';
        
        $backgroundImage = get_field('body_background_image', $postId);
        if(isset($backgroundImage)){
            if(isset($backgroundImage['url'])) $styles .= "background-image: url('".$backgroundImage['url']."');";
            else $styles .= "background-image: url('".wp_get_attachment_url($backgroundImage)."');";
        } 
        
        $styles .= '"';
        return $styles;
    }
    
}