<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use WPAS\Controller\WPASController;
use TF\Types\LocationPostType;
use TF\Types\CoursePostType;
use TF\Types\WorkshopPostType;
use TF\Types\EventPostType;
use \WP_Query;

class Calendar{
    
    public function renderCalendar(){

        $args = [];
        $args['locations'] = LocationPostType::all();
        
        if(!empty($_GET['type'])){
            if($_GET['type']=='course'){
                $args['selected_type'] = 'course';
                $args['courses'] = CoursePostType::getUpcomingDates();
            }
            else{
                $args['selected_type'] = $_GET['type'];
                $args['events'] = EventPostType::getUpcomingEvents();
            }
        } 
        else{
            $args['selected_type'] = 'course';
            $args['courses'] = CoursePostType::getUpcomingDates();
        } 
        
        //if(!empty($_GET['type']) && $_GET['type']=='events') $args['events'] = EventPostType::getUpcomingEvents();
        //$args['courses'] = CoursePostType::getUpcomingDates();
        
        $args['query'] = $this->getCalendarQuery();
        if(!empty($args['courses'])) $args['upcoming'] = $args['courses'][0];
        else $args['upcoming'] = null;
        return $args;
    }
    
    private function getCalendarQuery(){
        
        $query = [];
        if(!empty($_GET['type']))
        {
            if($_GET['type'] != 'course') $query = EventPostType::getCalendarQuery();
            else  $query = CoursePostType::getCalendarQuery();
            $query['type'] = $_GET['type'];
        }
        else $query = CoursePostType::getCalendarQuery();
        
        return $query;
    }
    
}