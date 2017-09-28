<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use TF\Types\TestimonialPostType;
use \WP_Query;

class Landing{
    
    public function renderLanding(){
        
        $page = get_queried_object();
        $args = [];
        $args['page']['heading1'] = get_field('page_heading_1', $page->ID);
        $args['page']['heading2'] = get_field('page_heading_2', $page->ID);
        $args['page']['call-to-action'] = get_field('page_call_to_action', $page->ID);
        //print_r($args['page']['call-to-action']); die();
        $args['styles'] = $this->getBodyStyles($page);
        
        $args['testimonials'] = TestimonialPostType::All();

        return $args;
    }
    
    private function getBodyStyles($page){
        
        $styles = 'style="';
        
        $backgroundColor = get_field('body_background_color', $page->ID);
        if($backgroundColor) $styles .= 'background-color: '.$backgroundColor.';';
        
        $backgroundImage = get_field('body_background_image', $page->ID);
        if($backgroundImage) $styles .= "background-image: url('".$backgroundImage."');";
        
        $styles .= '"';
        
        return $styles;
    }
    
}