<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use WPAS\Controller\WPASController;
use TF\Types\TeamMemberPostType;
use TF\Types\TestimonialPostType;
use TF\Types\LocationPostType;
use TF\Types\CoursePostType;
use TF\Types\EventPostType;
use \WP_Query;

class General{
    
    public function load_controller_hooks(){
        
        //add_filter( 'gform_pre_validation_'.$fieldId, [$this,'populate_location_dropdown'] );
        //add_filter( 'gform_pre_submission_filter_'.$fieldId, [$this,'populate_location_dropdown'] );
        //add_filter( 'gform_admin_pre_render_'.$fieldId, [$this,'populate_location_dropdown'] );
    }
    
    public function renderHome(){

        $args = [];
        $args = $this->getData();
        /*
        $profilesJSON = @file_get_contents(BREATHECODE_API_HOST.'/specialties/');
        if($profilesJSON)
        {
            $result = json_decode($profilesJSON);
            $args['profiles'] = (array) $result->data;
        }
        else
        {
            $args['profiles'] = [];
            $profile = [];
            $profile['image_url'] = 'Profile 1';
            $profile['name'] = '';
            
            $args['profiles'][] = (object) $profile;
        }
        */
        //print_r($args['profiles']); die();
        return $args;
    }
    
    public function renderPricing(){
        
        $args = [];
        $args = $this->getData();
        return $args;
    }
    
    public function renderTheAcademy(){
        $args = $this->getData();
        $args['members'] = TeamMemberPostType::All(array(
        	'numberposts'	=> 8,
        	'meta_key'		=> 'member_type',
        	'meta_value'	=> 'staff'
        ));
       // print_r($args['testimonials']); die();
        return $args;
    }
    
    public function renderTheProgram(){
        
        $args = $this->getData();
        $args['members'] = TeamMemberPostType::All(array(
        	'numberposts'	=> 6,
        	'meta_key'		=> 'member_type',
        	'meta_value'	=> 'teacher'
        ));
        //print_r($args['testimonials']); die();
        return $args;
    }
    
    public function renderLocation(){

        $args = [];
        
        $args['current-location'] = (array) get_queried_object();
        $args['current-location']['bc_location_slug'] = get_field('breathecode_location_slug', $args['current-location']['ID']);
        $args['current-location']['map'] = get_field('location_map', $args['current-location']['ID']);
        $args['current-location']['phone'] = get_field('location_phone_number', $args['current-location']['ID']);
        $args['current-location']['email'] = get_field('location_email', $args['current-location']['ID']);
        $args['current-location']['office_image'] = get_field('location_office_image', $args['current-location']['ID']);
        
        $args['locations'] = LocationPostType::all();
        $args['styles'] = UtilsController::getBodyStyles($args['current-location']["ID"]);
        $args['upcoming-cohorts'] = CoursePostType::getUpcomingDates(['location' => $args['current-location']['bc_location_slug']]);;
        if(count($args['upcoming-cohorts'])>0) $args['upcoming'] = $args['upcoming-cohorts'][0];
        else $args['upcoming-message'] = [
            "message" => "No upcoming dates scheduled for this location",
            "btn-message" => "Other dates & locations"
        ];
        $args['testimonials'] = TestimonialPostType::All();
        
        //print_r($args['upcoming']); die();
        return $args;
    }
    
    public function renderApply(){
        $args = [];
        $args['upcoming'] = $this->getNextCohort();
        return $args;
    }

    private function getData(){
        $args = [];
        $args['testimonials'] = TestimonialPostType::All();
        //$args['locations'] = LocationPostType::All();
        $args['upcoming'] = $this->getNextCohort();
        return $args;
    }

    private function getNextCohort(){
        
        $query = [];
        if(get_post_type() == 'course') 
        {
            $query['profile'] = get_field('breathecode_course_slug',get_the_ID());
        }
        else $query = null;
        
        $cohorts = CoursePostType::getUpcomingDates($query);
        if(!empty($cohorts)) return $cohorts[0];
        else return null;
    }
    
    public function get_incoming_dates(){
        
        $cohorts = CoursePostType::getUpcomingDates();
        WPASController::ajaxSuccess($cohorts);
        
    }

    public function newsletter_signup(){
        
        $listId = get_option('activecampaign-newsletter-list-id');
        
        if(empty($_POST['email'])) WPASController::ajaxError('Invalid Email');
        
        //get WPAS_APP values
        $globalContext = wpas_get_global_context();
        $gclidValue = 'undefined';
        if(isset($globalContext['gclid'])) $gclidValue = $globalContext['gclid'];
        
        $contact = array(
    		"email" => $_POST['email'],
    		"field[".$gclid.",0]" => $gclidValue
    	);
        
        $coursesField = \TF\ActiveCampaign\ACAPI::subscribeToList($contact, $listId);

        if($coursesField) WPASController::ajaxSuccess('Thank you! Your subscription has been processed successfully');
        else WPASController::ajaxError('Something went wrong');
        
    }
    
    public function download_syllabus(){
        
        $listId = get_option('activecampaign-soft-leads-list-id');
        $utmUrlId = get_option('activecampaign-utm-url-field');
        $utmLanguageId = get_option('activecampaign-utm-language-field');
        $utmCountryId = get_option('activecampaign-utm-country-field');
        $gclid = get_option('activecampaign-gclid-field');

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
        if(isset($globalContext['country'])) $utmCountryValue = $globalContext['country'];
        
        $gclidValue = 'undefined';
        if(isset($_GET['gclid'])) $gclidValue = $_GET['gclid'];
        else if(isset($globalContext['gclid'])) $gclidValue = $globalContext['gclid'];
        
        $contact = array(
    		"email" => $_POST['email'],
    		"first_name" => $fistName,
    		"tags" => 'download_syllabus',
    		"field[".$utmUrlId.",0]" => $utmURLValue,
    		"field[".$utmLanguageId.",0]" => $utmLanguageValue,
    		"field[".$utmCountryId.",0]" => $utmCountryValue,
    		"field[".$gclid.",0]" => $gclidValue
    	);

        $coursesField = \TF\ActiveCampaign\ACAPI::subscribeToList($contact, $listId);

        if($coursesField) WPASController::ajaxSuccess('Check your email! In the next minutes your should receive what you asked for :)');
        else WPASController::ajaxError('Something went wrong');
        
    }
    
    public function get_upcoming_event(){
        
        $events = EventPostType::getUpcomingEvents();

        if(count($events)>0) WPASController::ajaxSuccess($events[0]);
        else WPASController::ajaxError('No upcoming events');
        
    }
    
    public function get_upcoming_course(){
        
        $cohorts = CoursePostType::getUpcomingDates();
        if(!empty($cohorts)) WPASController::ajaxSuccess($cohorts[0]);
        else WPASController::ajaxError('No upcoming dates');
        
    }
    
}