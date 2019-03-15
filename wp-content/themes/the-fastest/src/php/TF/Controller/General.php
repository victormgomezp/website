<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use WPAS\Controller\WPASController;
use TF\Types\TeamMemberPostType;
use TF\Types\TestimonialPostType;
use TF\Types\LocationPostType;
use TF\Types\JobPostType;
use TF\Types\CoursePostType;
use TF\Types\EventPostType;
use TF\Types\PartnerPostType;
use \WP_Query;

class General{
    
    var $globalContext = null;
    var $defaultLocation = 145;
    
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
        
        $args['upcoming-cohorts'] = CoursePostType::getUpcomingDates();
        
        $args['current-location'] = $this->_getCurrentLocation();

        if(count($args['upcoming-cohorts'])>0) $args['upcoming'] = $args['upcoming-cohorts'][0];
        else $args['upcoming-message'] = [
            "message" => pll__("No scheduled dates for this course"),
            "btn-message" => pll__("Other dates & locations")
        ];
        return $args;
    }
    
    public function renderPricing(){
        
        $args = [];
        $args = $this->getData();
        $args['current-location'] = $this->_getCurrentLocation();
        $args['current-location']['bc_location_slug'] = get_field('breathecode_location_slug', $args['current-location']['ID']);
        
        $args['course'] = (array) CoursePostType::get([
            'meta_key'		=> 'breathecode_course_slug',
	        'meta_value'	=> 'full-stack'
        ]);
        $args['course']['slug'] = get_field('breathecode_course_slug', $args['course']['ID']);
        
        $args['current-location']['prices'] = $this->_getPrices($args['current-location'], $args['course']);
        
        $args['locations'] = LocationPostType::all();
        
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
        $args['students'] = TestimonialPostType::All(array(
        	'numberposts'	=> 6
        ));
        $args['members'] = TeamMemberPostType::All(array(
        	'numberposts'	=> 6,
        	'meta_key'		=> 'member_type',
        	'meta_value'	=> 'teacher'
        ));
        
        $args['course'] = (array) get_queried_object();
        $args['course']['slug'] = get_field('breathecode_course_slug', $args['course']['ID']);
        
        // get the current location
        $args['current-location'] = $this->_getCurrentLocation();
        $args['current-location']['bc_location_slug'] = get_field('breathecode_location_slug', $args['current-location']['ID']);
        $args['current-location']['prices'] = $this->_getPrices($args['current-location'], $args['course']);

        //get the rest of the locations
        $args['locations'] = LocationPostType::all();
        
        $args['upcoming-cohorts'] = CoursePostType::getUpcomingDates(['profile' =>$args['course']['slug'] ]);

        if(count($args['upcoming-cohorts'])>0) $args['upcoming'] = $args['upcoming-cohorts'][0];
        else $args['upcoming-message'] = [
            "message" => pll__("No scheduled dates for this course"),
            "btn-message" => pll__("Other dates & locations")
        ];
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
        $args['current-location']['office_image2'] = get_field('location_office_image2', $args['current-location']['ID']);
        $args['current-location']['office_image3'] = get_field('location_office_image3', $args['current-location']['ID']);
        $args['current-location']['should_know'] = get_field('should_know', $args['current-location']['ID']);
        
        $args['locations'] = LocationPostType::all();
        $args['styles'] = UtilsController::getBodyStyles($args['current-location']["ID"]);
        $args['page']['styles'] = get_field('landing_extra_styles', $args['current-location']["ID"]);
        $args['page']['script'] = get_field('landing_extra_script', $args['current-location']["ID"]);
        
        $args['upcoming-cohorts'] = CoursePostType::getUpcomingDates(['location' => $args['current-location']['bc_location_slug'], 'posts_per_page' => 4 ]);;
        if(count($args['upcoming-cohorts'])>0) $args['upcoming'] = $args['upcoming-cohorts'][0];
        else $args['upcoming-message'] = [
            "message" => pll__("No scheduled dates for this location"),
            "btn-message" => pll__("Other dates & locations")
        ];
        $args['testimonials'] = TestimonialPostType::All();
        
        //print_r($args['upcoming']); die();
        return $args;
    }
    
    public function renderPartners(){

        $args = [];
        $args = $this->getData();
        $query1 = PartnerPostType::all(['meta_key' => 'partner_type', 'meta_value' => 'hiring_partner', 'posts_per_page' => -1]);
        $args['h-partners'] = array_map(function($post){ return PartnerPostType::fill($post); },$query1->posts);
        
        $query2 = PartnerPostType::all([
            'posts_per_page' => -1,
            'meta_key' => 'partner_type',
            'meta_value' => 'coding_related' // or whatever it is you're using here
        ]);
        $args['code-partners'] = array_map(function($post){ return PartnerPostType::fill($post); },$query2->posts);
        
        $query3 = PartnerPostType::all([
            'posts_per_page' => -1,
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
        $args['upcoming'] = CoursePostType::getNextCohort();
        return $args;
    }

    public function renderSingleJob(){
        $page = get_queried_object();
        $args = [];
        $args['styles'] = UtilsController::getBodyStyles($page->ID);
        $args['page']['styles'] = get_field('landing_extra_styles', $page->ID);
        $args['page']['script'] = get_field('landing_extra_script', $page->ID);
        
        $args['current-location'] = $this->_getCurrentLocation();

        $args['locations'] = LocationPostType::fromJob($page->ID);
        
        $args['upcoming'] = CoursePostType::getNextCohort();
        
        return $args;
    }
    
    public function renderJobs(){
        
        $page = get_queried_object();
        $args = [];
        $args['styles'] = UtilsController::getBodyStyles($page->ID);
        $args['page']['styles'] = get_field('landing_extra_styles', $page->ID);
        $args['page']['script'] = get_field('landing_extra_script', $page->ID);
        
        $args['current-location'] = $this->_getCurrentLocation();

        $args['jobs'] = JobPostType::all();
        for($i = 0; $i<count($args['jobs']);$i++){
            $args['jobs'][$i]['locations'] = LocationPostType::fromJob($args['jobs'][$i]['ID']);
        }
            
        $args['upcoming'] = CoursePostType::getNextCohort();
        
        return $args;
    }
    
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
        $args['current-location'] = $this->_getCurrentLocation();
        $args['query'] = $this->_getCalendarQuery();
        if(!empty($args['courses'])) $args['upcoming'] = $args['courses'][0];
        else $args['upcoming'] = null;
        return $args;
    }
    
    private function _getCalendarQuery(){
        
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

    public function get_incoming_dates(){
        
        $cohorts = CoursePostType::getUpcomingDates();
        WPASController::ajaxSuccess($cohorts);
        
    }

    public function newsletter_signup(){
        
        $listId = get_option('activecampaign-newsletter-list-id');
        
        if(empty($_POST['email'])) WPASController::ajaxError('Invalid Email');
        
        //get WPAS_APP values
        $this->fetchContent();
        $gclidValue = 'undefined';
        if(isset($this->globalContext['gclid'])) $gclidValue = $this->globalContext['gclid'];
        
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
        $utmLocationId = get_option('activecampaign-utm-location-field');
        $gclid = get_option('activecampaign-gclid-field');
        $referralId = get_option('activecampaign-referral-key-field');

        if(empty($_POST['email'])) WPASController::ajaxError('Invalid Email');
        
        $fistName = '';
        if(!empty($_POST['first_name'])) $fistName = $_POST['first_name'];
        
        //get WPAS_APP values
        $this->fetchContent();

        $utmURLValue = 'undefined';
        if(isset($this->globalContext['url'])) $utmURLValue = $this->globalContext['url'];
        
        $utmLanguageValue = 'undefined';
        if(isset($this->globalContext['lang'])) $utmLanguageValue = $this->globalContext['lang'];
        
        $utmLocationValue = 'undefined';
        if(isset($_POST['utm_location'])) $utmLocationValue = $_POST['utm_location'];
        else if(isset($this->globalContext['city_slug'])) $utmLocationValue = $this->globalContext['city_slug'];

        $utmCountryValue = 'undefined';
        if(isset($this->globalContext['country_name'])) $utmCountryValue = $this->globalContext['country_name'];
        
        $gclidValue = 'undefined';
        if(isset($_POST['gclid'])) $gclidValue = $_POST['gclid'];
        else if(isset($this->globalContext['gclid'])) $gclidValue = $this->globalContext['gclid'];
        
        $referralValue = 'undefined';
        if(isset($_POST['referral_key'])) $referralValue = $_POST['referral_key'];
        else if(isset($this->globalContext['referral_key'])) $referralValue = $this->globalContext['referral_key'];

        $contact = array(
    		"email" => $_POST['email'],
    		"first_name" => $fistName,
    		"tags" => 'download_syllabus',
    		"field[".$utmUrlId.",0]" => $utmURLValue,
    		"field[".$utmLanguageId.",0]" => $utmLanguageValue,
    		"field[".$utmCountryId.",0]" => $utmCountryValue,
    		"field[".$utmLocationId.",0]" => $utmLocationValue,
    		"field[".$gclid.",0]" => $gclidValue,
    	);
    	if(!empty($referralId)) $contact["field[".$referralId.",0]"] = $referralValue;

        $coursesField = \TF\ActiveCampaign\ACAPI::subscribeToList($contact, $listId);

        if($coursesField) WPASController::ajaxSuccess('Check your email! In the next minutes your should receive what you asked for :)');
        else WPASController::ajaxError('Something went wrong');
        
    }
    
    public function get_upcoming_event(){
        
        $events = EventPostType::getUpcomingEvents();
        //debug($events);
        if(count($events)>0) WPASController::ajaxSuccess($events[0]);
        else WPASController::ajaxError('No upcoming events');
        
    }
    
    public function get_upcoming_course(){
        
        $cohorts = CoursePostType::getUpcomingDates();
        if(!empty($cohorts)) WPASController::ajaxSuccess($cohorts[0]);
        else WPASController::ajaxError('No upcoming dates');
        
    }
    
    private function getData(){
        $args = [];
        $args['testimonials'] = TestimonialPostType::All();
        //$args['locations'] = LocationPostType::All();
        $args['upcoming'] = CoursePostType::getNextCohort();
        return $args;
    }
    
    private function _getPrices($location, $course){
        $prices = @include dirname(__FILE__).'/../../languages/prices.'.$course['slug'].'.php';
        if($prices and !empty($prices[$location['bc_location_slug']])){
            //all the prices in just one place
            $location['prices'] = $prices[$location['bc_location_slug']];
            if(!empty($location['prices']['financed'])){
                //array of months
                $months = array_keys($location['prices']['financed']);
                
                $location['prices']['data-slider-total'] = count($months);
                $location['prices']['data-slider-ticks'] = "[".implode(",",$months).']';
                $location['prices']['data-slider-initial-index'] = count($months)-1;
                $location['prices']['data-slider-initial-value'] = $months[count($months)-1];
                
                $location['prices']['data-slider-ticks'] = "[".implode(",",array_map(function ($el, $i) {
                      return $i;
                   },$months, array_keys($months))).']';
                   
                $location['prices']['data-slider-ticks-labels'] = "[".implode(",",array_map(function ($el, $i) {
                      return $i == 0 ? "\"$el months\"" : "\"$el mo.\"";
                   },$months, array_keys($months))).']';
                 
                $totalPositions = count($months);
                $location['prices']['ticks_positions'] = "[".implode(",",array_map(function ($el, $i) use ($totalPositions) {
                      return ($i / $totalPositions) * 100;
                   },$months, array_keys($months))).']';
                   
                return $location['prices'];
            }
            else return $location['prices'];
        }
        
        return null;
    }
    
    private function _getCurrentLocation(){
        $this->fetchContent();
        $city = get_query_var('city');
        if(!empty($city)) return (array) LocationPostType::get([ "name" => $city]);
        else if(!empty($_GET['city_slug'])) return (array) LocationPostType::get([ "name" => $_GET['city_slug']]);
        else if(!empty($this->globalContext['city_slug'])) return (array) LocationPostType::get([ "name" => $this->globalContext['city_slug']]);
        else if(!empty($this->globalContext['latitude']) and !empty($this->globalContext['longitude'])){
            $loc = LocationPostType::nearest($this->globalContext['latitude'], $this->globalContext['longitude']);
            if($loc) return $loc;
        }
        return (array) LocationPostType::get([ "p" => $this->defaultLocation ]);
    }
    
    private function fetchContent(){
        if(!$this->globalContext){
            $this->globalContext = wpas_get_global_context();
        } 
    }
}