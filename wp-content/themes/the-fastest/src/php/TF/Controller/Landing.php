<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use TF\Types\TestimonialPostType;
use TF\Types\CoursePostType;
use \WP_Query;

class Landing{
    
    public function renderLanding(){
        $page = get_queried_object();
        $args = [];
        $args['page']['heading1'] = get_field('page_heading_1', $page->ID);
        $args['page']['heading2'] = get_field('page_heading_2', $page->ID);
        $args['page']['call-to-action'] = get_field('page_call_to_action', $page->ID);
        //print_r($args['page']['call-to-action']); die();
        $args['styles'] = UtilsController::getBodyStyles($page->ID);
        $args['page']['styles'] = get_field('landing_extra_styles', $page->ID);
        $args['page']['script'] = get_field('landing_extra_script', $page->ID);
        
        $city = get_query_var('city');
        if(!empty($city)) $args['current-location'] = (array) LocationPostType::get([ "name" => $city]);
        if(empty($args['current-location'])) $args['current-location'] = (array) LocationPostType::get([ "p" => 145 ]);
        
        $args['testimonials'] = TestimonialPostType::All();
        $args['upcoming'] = CoursePostType::getNextCohort();
        
        return $args;
    }
    
}