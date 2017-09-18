<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use TF\Types\PostPostType;
use TF\Types\CoursePostType;
use \WP_Query;

class Blog{
    
    public function renderBlog(){
        $args = [];
        $args['featured'] = PostPostType::All(array(
        	'numberposts'	=> 4,
        	'meta_key'		=> 'featured_post',
        	'meta_value'	=> true
        ));
        $args['upcoming'] = $this->getNextCohort();
        return $args;
    }
    
    public function renderPost(){
        $args = [];
        $args['upcoming'] = $this->getNextCohort();
        return $args;
    }
    
    public function renderNews(){
        $args = [];
        $category = get_queried_object();
        //print_r($args); die();
        return $args;
    }
    
    private function getNextCohort(){
        $cohorts = CoursePostType::getUpcomingDates();
        return array_pop($cohorts);
    }
    
}