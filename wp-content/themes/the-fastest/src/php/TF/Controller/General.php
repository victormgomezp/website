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
        $profilesJSON = @file_get_contents(BREATHECODE_API.'/specialties/');
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
    
    public function renderApply(){
        $args = [];
        $args['upcoming'] = $this->getNextCohort();
        return $args;
    }

    public function renderCalendar(){

        $args = [];
        $args['locations'] = LocationPostType::all();
        
        if(!empty($_GET['type']) && $_GET['type']=='events') $args['events'] = EventPostType::getUpcomingEvents();
        $args['courses'] = CoursePostType::getUpcomingDates();
        
        $args['query'] = $this->getCalendarQuery();
        if(!empty($args['courses'])) $args['upcoming'] = $args['courses'][0];
        else $args['upcoming'] = null;
        return $args;
    }
    
    private function getData(){
        $args = [];
        $args['testimonials'] = TestimonialPostType::All();
        //$args['locations'] = LocationPostType::All();
        $args['upcoming'] = $this->getNextCohort();
        return $args;
    }

    private function getCalendarQuery(){
        
        $query = [];
        if(!empty($_GET['type']))
        {
            if($_GET['type'] == 'event') $query = EventPostType::getCalendarQuery();
            else  $query = CoursePostType::getCalendarQuery();
            $query['type'] = $_GET['type'];
        }
        else $query = CoursePostType::getCalendarQuery();
        
        return $query;
    }
    
    private function getNextCohort(){
        $cohorts = CoursePostType::getUpcomingDates();
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
        
        $contact = array(
    		"email" => $_POST['email'],
    	);
        
        $coursesField = \TF\ActiveCampaign\ACAPI::subscribeToList($contact, $listId);

        if($coursesField) WPASController::ajaxSuccess('Thank you! Your subscription has been processed successfully');
        else WPASController::ajaxError('Something went wrong');
        
    }
    
    public function download_syllabus(){
        
        $listId = get_option('activecampaign-soft-leads-list-id');
        if(empty($_POST['email'])) WPASController::ajaxError('Invalid Email');
        
        $contact = array(
    		"email" => $_POST['email'],
    		"tags" => 'download_syllabus',
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