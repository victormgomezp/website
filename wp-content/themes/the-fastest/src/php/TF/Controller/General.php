<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use WPAS\Controller\WPASController;
use TF\Types\TeamMemberPostType;
use TF\Types\TestimonialPostType;
use TF\Types\LocationPostType;
use TF\Types\CoursePostType;
use TF\Types\EventPostType;
use TF\Types\PartnerPostType;
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
        $query = PartnerPostType::all(['meta_key' => 'partner_type', 'meta_value' => 'coding_related','posts_per_page' => 4]);
        $args['c-partners'] = array_map(function($post){
            return PartnerPostType::fill($post);
        },$query->posts);
        
        $query2 = PartnerPostType::all(['meta_key' => 'partner_type', 'meta_value' => 'hiring_partner','posts_per_page' => 4]);
        $args['h-partners'] = array_map(function($post){
            return PartnerPostType::fill($post);
        },$query2->posts);
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
        $args['members'] = TeamMemberPostType::all(array(
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
    
    public function renderPartners(){

        $args = [];

        $query1 = PartnerPostType::all(['meta_key' => 'partner_type', 'meta_value' => 'hiring_partner', 'posts_per_page' => 4]);
        $args['h-partners'] = array_map(function($post){ return PartnerPostType::fill($post); },$query1->posts);
        
        $query2 = PartnerPostType::all([
            'posts_per_page' => 4,
            'meta_key' => 'partner_type',
            'meta_value' => 'coding_related' // or whatever it is you're using here
        ]);
        $args['code-partners'] = array_map(function($post){ return PartnerPostType::fill($post); },$query2->posts);
        
        $query3 = PartnerPostType::all([
            'posts_per_page' => 8,
            'meta_query' => array(
                'relation' => 'OR',
                array('key' => 'partner_type', 'value' => 'government_institution'),
                array('key' => 'partner_type', 'value' => 'university'),
                array('key' => 'partner_type','value' => 'student_support'),
                array('key' => 'partner_type','value'=> 'other')
            )
        ]);
        $args['city-partners'] = array_map(function($post){ return PartnerPostType::fill($post); },$query3->posts);
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
        $args['upcoming'] = CoursePostType::getNextCohort();
        return $args;
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
        if(isset($globalContext['country'])) $utmCountryValue = $globalContext['country'];
        
        $gclidValue = 'undefined';
        if(isset($_GET['gclid'])) $gclidValue = $_GET['gclid'];
        else if(isset($globalContext['gclid'])) $gclidValue = $globalContext['gclid'];
        
        $referralValue = 'undefined';
        if(isset($_GET['referral_key'])) $referralValue = $_GET['referral_key'];
        else if(isset($globalContext['referral_key'])) $referralValue = $globalContext['referral_key'];

        $contact = array(
    		"email" => $_POST['email'],
    		"first_name" => $fistName,
    		"tags" => 'download_syllabus',
    		"field[".$utmUrlId.",0]" => $utmURLValue,
    		"field[".$utmLanguageId.",0]" => $utmLanguageValue,
    		"field[".$utmCountryId.",0]" => $utmCountryValue,
    		"field[".$gclid.",0]" => $gclidValue,
    	);
    	if(!empty($referralId)) $contact["field[".$referralId.",0]"] = $referralValue;

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