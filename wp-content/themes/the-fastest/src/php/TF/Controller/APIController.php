<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use TF\Types\EventPostType;
use TF\Types\CoursePostType;
use TF\Types\WorkshopPostType;
use \WP_Query;

class APIController{
    
    public function getAllEvents(){
        header( 'Access-Control-Allow-Origin: *' );
        return EventPostType::all();
    }
    
    public function getAllWorkshops(){
        header( 'Access-Control-Allow-Origin: *' );
        return WorkshopPostType::all();
    }
    
    public function getAllCourses(){
        header( 'Access-Control-Allow-Origin: *' );
        return CoursePostType::all()->posts;
    }
    
}