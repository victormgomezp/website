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
    
    public function getPrices(){
        
        $course = null;
        if(isset($_GET['course'])) $course = $_GET['course'];
        $location = null;
        if(isset($_GET['location'])) $location = $_GET['location'];

        if($course){
            $prices = include(dirname(__FILE__).'/../../languages/prices.'.$course.'.php');
            if($prices){
                if($location) $prices = $prices[$location];
                return [
                    "status" => "ok",
                    "code" => 200,
                    "data" => $prices
                ];
            }
        }
        else return [
            "status" => "ok",
            "code" => 200,
            "data" => include(dirname(__FILE__).'/../../languages/all.prices.php')
        ];
        
        return [
            "status" => "error",
            "code" => 400,
            "data" => 'Price not found'
        ];
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
    
    public function requestMoreInfo(){

        $listId = get_option('activecampaign-soft-leads-list-id');
        $utmUrlId = get_option('activecampaign-utm-url-field');
        $utmLanguageId = get_option('activecampaign-utm-language-field');
        $utmCountryId = get_option('activecampaign-utm-country-field');
        $gclid = get_option('activecampaign-gclid-field');
        $utmLocationId = get_option('activecampaign-utm-location-field');
        $referralId = get_option('activecampaign-referral-key-field');

        if(empty($_POST['email'])) WPASController::ajaxError('Invalid Email');
        
        $fistName = '';
        if(!empty($_POST['first_name'])) $fistName = $_POST['first_name'];
        
        //get WPAS_APP values
        $globalContext = wpas_get_global_context();

        $utmURLValue = 'undefined';
        if(isset($globalContext['url'])) $utmURLValue = $globalContext['url'];
        
        $utmLanguageValue = 'undefined';
        if(isset($globalContext['lang'])) $utmLanguageValue = $globalContext['lang'];
        
        $utmCountryValue = 'undefined';
        if(isset($globalContext['country_name'])) $utmCountryValue = $globalContext['country_name'];
        
        $gclidValue = 'undefined';
        if(isset($_GET['gclid'])) $gclidValue = $_GET['gclid'];
        else if(isset($globalContext['gclid'])) $gclidValue = $globalContext['gclid'];

        $utmLocationValue = 'undefined';
        if(isset($_GET['utm_location'])) $utmLocationValue = $_GET['utm_location'];
        else if(isset($globalContext['city_slug'])) $utmLocationValue = $globalContext['city_slug'];
        
        $referralValue = 'undefined';
        if(isset($_GET['referral_key'])) $referralValue = $_GET['referral_key'];
        else if(isset($globalContext['referral_key'])) $referralValue = $globalContext['referral_key'];

        $contact = array(
    		"email" => $_POST['email'],
    		"first_name" => $fistName,
    		"tags" => 'download_syllabus, request_more_info',
    		"field[".$utmUrlId.",0]" => $utmURLValue,
    		"field[".$utmLanguageId.",0]" => $utmLanguageValue,
    		"field[".$utmCountryId.",0]" => $utmCountryValue,
    		"field[".$utmLocationId.",0]" => $utmLocationValue,
    		"field[".$gclid.",0]" => $gclidValue,
    	);
    	if(!empty($referralId)) $contact["field[".$referralId.",0]"] = $referralValue;

        $coursesField = \TF\ActiveCampaign\ACAPI::subscribeToList($contact, $listId);

        if($coursesField){
            return [
                "status" => "ok",
                "code" => 200,
                "data" => "Check your email! In the next minutes your should receive what you asked for :)"
            ];
        }
        else return [
            "status" => "error",
            "code" => 500,
            "data" => "Something went wrong"
        ];
        
    }
    
    public function requestTour(){

        $listId = get_option('activecampaign-soft-leads-list-id');
        $utmUrlId = get_option('activecampaign-utm-url-field');
        $utmLanguageId = get_option('activecampaign-utm-language-field');
        $utmCountryId = get_option('activecampaign-utm-country-field');
        $gclid = get_option('activecampaign-gclid-field');
        $utmLocationId = get_option('activecampaign-utm-location-field');
        $referralId = get_option('activecampaign-referral-key-field');

        if(empty($_POST['email'])) WPASController::ajaxError('Invalid Email');
        
        $fistName = '';
        if(!empty($_POST['first_name'])) $fistName = $_POST['first_name'];
        
        //get WPAS_APP values
        $globalContext = wpas_get_global_context();

        $utmURLValue = 'undefined';
        if(isset($globalContext['url'])) $utmURLValue = $globalContext['url'];
        
        $utmLanguageValue = 'undefined';
        if(isset($globalContext['lang'])) $utmLanguageValue = $globalContext['lang'];
        
        $utmCountryValue = 'undefined';
        if(isset($globalContext['country_name'])) $utmCountryValue = $globalContext['country_name'];
        
        $gclidValue = 'undefined';
        if(isset($_GET['gclid'])) $gclidValue = $_GET['gclid'];
        else if(isset($globalContext['gclid'])) $gclidValue = $globalContext['gclid'];

        $utmLocationValue = 'undefined';
        if(isset($_GET['utm_location'])) $utmLocationValue = $_GET['utm_location'];
        else if(isset($globalContext['city_slug'])) $utmLocationValue = $globalContext['city_slug'];
        
        $referralValue = 'undefined';
        if(isset($_GET['referral_key'])) $referralValue = $_GET['referral_key'];
        else if(isset($globalContext['referral_key'])) $referralValue = $globalContext['referral_key'];

        $contact = array(
    		"email" => $_POST['email'],
    		"first_name" => $fistName,
    		"tags" => 'request_tour',
    		"field[".$utmUrlId.",0]" => $utmURLValue,
    		"field[".$utmLanguageId.",0]" => $utmLanguageValue,
    		"field[".$utmCountryId.",0]" => $utmCountryValue,
    		"field[".$utmLocationId.",0]" => $utmLocationValue,
    		"field[".$gclid.",0]" => $gclidValue,
    	);
    	if(!empty($referralId)) $contact["field[".$referralId.",0]"] = $referralValue;

        $coursesField = \TF\ActiveCampaign\ACAPI::subscribeToList($contact, $listId);

        if($coursesField){
            return [
                "status" => "ok",
                "code" => 200,
                "data" => "Check your email! In the next minutes with possible schedules to organize a tour to our location"
            ];
        }
        else return [
            "status" => "error",
            "code" => 500,
            "data" => "Something went wrong"
        ];
        
    }
    
}