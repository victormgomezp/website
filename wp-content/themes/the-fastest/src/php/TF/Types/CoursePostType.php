<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WPAS\Settings\WPASThemeSettingsBuilder;
use WP_Query;
use DateTime;

class CoursePostType extends BasePostType{
    
    private static $cohorts = null;
    private static $cohortsSlugs = null;
    
    function populate_fields(){
        
        add_filter('acf/load_field/name=active_campaign_course_slug', [$this,'populate_active_campaign_slug']);
        add_filter('acf/load_field/name=breathecode_course_slug', [$this,'populate_breathecode_slug']);
        
    }
    
    function populate_active_campaign_slug( $field ) {
        
        $coursesField = \TF\ActiveCampaign\ACAPI::getCustomField('course');
        // reset choices
        $field['choices'] = array();
        $field['choices']['0'] = 'Select a slug from active campaign';
        foreach($coursesField->options as $opt) $field['choices'][$opt->value] = $opt->name;
    
        // return the field
        return $field;
        
    }
    
    static function _fetchProfiles(){
        $cohortsJSON = @file_get_contents(BREATHECODE_API_HOST.'/profiles/');
        if($cohortsJSON)
        {
            $c = json_decode($cohortsJSON);
            if($c && $c->code==200){
                
                self::$cohorts = [];
                self::$cohortsSlugs = [];
                
                foreach($c->data as $opt){
                    self::$cohorts[$opt->slug] = $opt->name;
                    self::$cohortsSlugs[] = $opt->slug;
                } 
            }
            return self::$cohorts;
            
        }else WPASAdminNotifier::addTransientMessage(WPASAdminNotifier::ERROR,'Error getting the BreatheCode Profiles Slugs');
    }
    
    function populate_breathecode_slug( $field ) {
        
        $field['choices'] = array();
        $field['choices']['0'] = 'Select a slug from breathecode';

        if(!self::$cohortsSlugs) self::_fetchProfiles();
        foreach(self::$cohorts as $slug => $name) $field['choices'][$slug] = $name.' ('.$slug.')';
        
        return $field;
        
    }
    
    public static function getUpcomingDates($params=null){
        
        if($params and !empty($params['profile']) and is_string($params['profile']) and $params['profile']!=='all') $params['profile'] = [$params['profile']];
        $query = $params;
        if(!$params) $query = self::getCalendarQuery();

        $cohorts = WPASThemeSettingsBuilder::getThemeOption('sync-bc-cohorts-api');
        $upcoming = [];
        if(!empty($cohorts)) foreach($cohorts as $c) if(self::filterQuery($c,$query)) $upcoming[] = $c;
        
        if(!empty($params['posts_per_page'])) $upcoming = array_slice($upcoming, 0, $params['posts_per_page']);
        return $upcoming;
    }
    
    public static function getDateInformation($cohort){
        
        $cohort = (array) $cohort;

        $time = strtotime($cohort['kickoff_date']);
        
        $course = [];
        $course['day'] = date('d',$time);
        $course['month'] = date('M',$time);
        $course['year'] = date('Y',$time);
        $course['date'] = date('M j, Y',$time);
        $course['bc_location_slug'] = $cohort['location_slug'];
        $course['bc_profile_slug'] = $cohort['profile_slug'];
        $course['status'] = $cohort['stage'];
        $course['time'] = $time;
        $course['language'] = ($cohort['language']=='en') ? 'English' : 'Español';
        $course['icon'] = ($cohort['language']=='en') ? 'united-states' : 'spain';

        $courseTemplate = self::get(['meta_key' => 'breathecode_course_slug', 'meta_value' => $course['bc_profile_slug'], 'lang' => $cohort['language']]);
        if($courseTemplate){
            $course['name'] = $courseTemplate->post_title;
            $course['slug'] = $courseTemplate->post_name;
            $course['id'] = $courseTemplate->ID;
            $course['short_description'] = get_field('course_short_description',$courseTemplate->ID);
            $course['hr_duration'] = get_field('course_hr_duration',$courseTemplate->ID);
            $course['week_duration'] = get_field('course_week_duration',$courseTemplate->ID);
            $course['featured_image'] = get_field('course_featured_image',$courseTemplate->ID,'thumbnail');
        } 
        else $course['name'] = "Uknowwn: ".$course['bc_profile_slug'];
        //print_r($course); die();
        $location = LocationPostType::get(['meta_key' => 'breathecode_location_slug', 'meta_value' => $course['bc_location_slug'], 'lang' => $cohort['language']]);
        if($location){
            $course['location'] = $location->post_title;
            $course['location_id'] = $location->ID;
        } 
        else $course['location'] = 'Uknowwn';
        
        return $course;
    }
    
    public static function getCalendarQuery($args=null){
        $query = [];
        
        if(!self::$cohortsSlugs) self::_fetchProfiles();
        
        if(!empty($_REQUEST['lang'])) $query['language'] = $_REQUEST['lang'];
        
        $city = get_query_var('city');
        if(!empty($_REQUEST['l'])) $query['location'] = $_REQUEST['l'];
        else if(!empty($city)) $query['location'] = $city;
        else if(!empty($_GET['city_slug'])) $query['location'] = $_GET['city_slug'];
        else if(!empty($globalContext['city_slug'])) $query['location'] = $globalContext['city_slug'];
        
        if(empty($_REQUEST['profile']) || $_REQUEST['profile'] === 'all'){
            $query['profile'] = self::$cohortsSlugs;
        }else{
            $query['profile'] = explode(",", $_REQUEST['profile']);
        }
        return $query;
    }
    
    private static function filterQuery($cohort, $query){
        //debug($query);
            if( 
                !empty($query['profile']) && !in_array($cohort['bc_profile_slug'], $query['profile'])
                //&& $query['profile'] != 'coding-introduction'
            ) return false;

        if(!empty($query['language']) && strtolower(substr($cohort['language'],0,2)) != $query['language']) return false;
        if(!empty($query['location']) && $cohort['bc_location_slug'] != $query['location']) return false;
        if(new DateTime() > new DateTime(date('Y-m-d',$cohort['time']))) return false;

        return true;
    }
    
    public static function get($args){
        //['post_type' => 'course', 'slug' => $args['slug']]
        $args = array_merge($args, ['post_type' => 'course']);
        $query = new WP_Query($args);
        if($query->posts && count($query->posts)==1){
            return end($query->posts);
        }else return null;
    }
    
    public static function getAllCourses($args){
        return CoursePostType::all()->posts;
    }
    
    private static function fillMember($object){
        
        $arrayObject = (array) $object;
        $arrayObject['financed_minimum_monthly_price'] = get_field('financed_minimum_monthly_price',$object->ID);
        $arrayObject['financed_deposit'] = get_field('financed_deposit',$object->ID);
        $arrayObject['slug'] = $arrayObject['post_name'];
        $arrayObject['full_price'] = get_field('full_price',$object->ID);
        return $arrayObject;
    }
    
    public static function getNextCohort(){
        
        $query = [];
        if(get_post_type() == 'course') 
        {
            $query['profile'] = get_field('breathecode_course_slug',get_the_ID());
        }
        else if(get_post_type() == 'location') 
        {
            $query['location'] = get_field('breathecode_location_slug',get_the_ID());
        }
        else $query = null;
        
        $cohorts = self::getUpcomingDates($query);
        if(!empty($cohorts)) return $cohorts[0];
        else return null;
    }
    
    public static function getCohortsFromAPI(){
	    $cohortsJSON = file_get_contents(BREATHECODE_API_HOST.'/cohorts/');
        if($cohortsJSON)
        {
            $cohorts = json_decode($cohortsJSON);
            
            $upcoming = [];
            if($cohorts && $cohorts->code==200){
            	foreach($cohorts->data as $c){
            		if($c->stage == 'not-started'){
	            		$cohort = CoursePostType::getDateInformation($c);
						// if($c->slug == 'mia-prework-i'){
						// 	print_r($cohort);die();
						// }
	            		if($cohort['time'] > time()){
	            			$upcoming[] = $cohort;
	            		} 
            		}
            	} 
            }
            
            //Sort 
			usort($upcoming, function( $a, $b ) {
			    return $a["time"] - $b["time"];
			});

            return $upcoming;
        }
        return null;
    }
    
    public static function getProfilesFromAPI(){
	    $profilesJSON = file_get_contents(BREATHECODE_API_HOST.'/profiles/');
        if($profilesJSON)
        {
            $profiles = json_decode($profilesJSON);
            //print_r($profiles); die();
            $upcoming = [];
            if($profiles && $profiles->code==200) foreach($profiles->data as $p) {
                $upcoming[] = (array) $p;
            }

            return $upcoming;
        }
        return null;
    }
    
}