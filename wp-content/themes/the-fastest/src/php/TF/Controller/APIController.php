<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use TF\Types\EventPostType;
use TF\Types\CoursePostType;
use TF\Types\LocationPostType;
use \WP_Query;
use \WPAS\Settings\WPASThemeSettingsBuilder;

class APIController{
    
    public function getAllEvents(){
        return EventPostType::all();
    }
    
    public function getAllCourses(){
        return CoursePostType::getUpcomingDates(true);
    }
    
    public function getAllLocations(){
        return LocationPostType::all();
    }
    
    public function syncEvents(){
        $upcoming = EventPostType::getEventsFromAPI();
        WPASThemeSettingsBuilder::setThemeOption('sync-bc-events-api',$upcoming);
        return [
            "status" => "ok",
            "code" => 200,
            "data" => $upcoming
        ];
    }
    
    public function syncCohorts(){
        $upcoming = CoursePostType::getCohortsFromAPI();
        WPASThemeSettingsBuilder::setThemeOption('sync-bc-cohorts-api',$upcoming);
        return [
            "status" => "ok",
            "code" => 200,
            "data" => $upcoming
        ];
    }
    
    public function syncProfiles(){
        $upcoming = CoursePostType::getProfilesFromAPI();
        WPASThemeSettingsBuilder::setThemeOption('sync-bc-profiles-api',$upcoming);
        return [
            "status" => "ok",
            "code" => 200,
            "data" => $upcoming
        ];
    }
    
}