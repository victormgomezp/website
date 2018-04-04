<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use TF\Types\EventPostType;
use TF\Types\CoursePostType;
use TF\Types\LocationPostType;
use TF\Types\WorkshopPostType;
use \WP_Query;

class APIController{
    
    public function getAllEvents(){
        return EventPostType::all();
    }
    
    public function getAllWorkshops(){
        return WorkshopPostType::all();
    }
    
    public function getAllCourses(){
        return CoursePostType::getUpcomingDates(true);
    }
    
    public function getAllLocations(){
        return LocationPostType::all();
    }
    
}