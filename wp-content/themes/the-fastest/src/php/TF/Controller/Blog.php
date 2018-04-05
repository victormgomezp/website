<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use TF\Types\PostPostType;
use TF\Types\CoursePostType;
use \WP_Query;

class Blog{
    
    public function renderBlog(){
        $args = [];
        $args['featured'] = PostPostType::all(array(
        	'numberposts'	=> 4,
        	'meta_key'		=> 'featured_post',
        	'meta_value'	=> 'true'
        ));
        $args['upcoming'] = $this->getNextCohort();
        $args['posts'] = get_posts(array(
        	'numberposts'	=> -1,
        	'meta_key'		=> 'featured_post',
        	'meta_value'	=> 'false'
        ));
        return $args;
    }
    
    public function renderPost(){
        $args = [];
        $args['upcoming'] = $this->getNextCohort();
        return $args;
    }
    
    public function renderNews(){
        $args = [];
        //$category = get_queried_object();
        //print_r($args); die();
        return $args;
    }
    
    public function renderTag(){
        $args = [];
        //$category = get_queried_object();
        //print_r($args); die();
        return $args;
    }
    
    private function getNextCohort(){
        $cohorts = CoursePostType::getUpcomingDates();
        if(!empty($cohorts)) return $cohorts[0];
        else return null;
    }
    
}