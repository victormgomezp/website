<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use \WP_Query;

class Course{
    
    public function renderCourse(){
        
        $args = [];
        $args['course'] = (array) get_queried_object();
        $args['course']['course_tagline'] = get_field('course_tagline', $args['course']['ID']);
        return $args;
    }
    
}