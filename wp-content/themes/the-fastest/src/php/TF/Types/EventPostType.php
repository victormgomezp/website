<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WPAS\Settings\WPASThemeSettingsBuilder;
use WP_Query;
use DateTime;

class EventPostType extends BasePostType{
    
    function populate_fields(){
        //add_filter('acf/load_field/name=breathecode_Event_slug', [$this,'populate_breathecode_slug']);
    }
    
    function populate_breathecode_slug( $field ) {
        
        $field['choices'] = array();
        $field['choices']['0'] = 'Select a slug from breathecode';

        $cohortsJSON = @file_get_contents(BREATHECODE_API_HOST.'/wtemplates/');
        if($cohortsJSON)
        {
            $cohorts = json_decode($cohortsJSON);
            if($cohorts && $cohorts->code==200) foreach($cohorts->data as $opt) $field['choices'][$opt->slug] = $opt->name.' ('.$opt->slug.')';
        
            
        }else WPASAdminNotifier::addTransientMessage(WPASAdminNotifier::ERROR,'Error getting the BreatheCode EventTemplate Slugs');
        
        return $field;
        
    }
    
    public static function get($args){
        
        $args = array_merge($args,[
            'post_type' => 'wvent'
        ]);
        
        $query = new WP_Query($args);
        if($query->posts && count($query->posts)>=1){
            return $query->posts[0];
        }else return null;
    }
    
    public static function all($args=[], $hook=null){
        
        $args = array_merge($args,[
            'post_type' => 'event'
            ]);
        
        $query = new WP_Query($args);
        wp_reset_postdata();
        $objectsArray = [];
        foreach($query->posts as $object){
            if($hook) $objectsArray[] = $hook($object);
            else $objectsArray[] = self::fillMember($object);
        } 
        return $objectsArray;
    }
    /*
    private static function fillMember($object){
        
        $arrayObject = (array) $object;
        $arrayObject['permalink'] = get_permalink($object->ID);
        $arrayObject['thumb_url'] = get_the_post_thumbnail_url($object->ID);
        $arrayObject['event_end_time'] = get_field( 'event_end_time',$object->ID );
        $arrayObject['event_start_time'] = get_field( 'event_start_time',$object->ID );
        $arrayObject['event_date'] = get_field( 'event_date',$object->ID );

        $arrayObject['day'] = substr($arrayObject['event_date'],6,2);
        $arrayObject['month'] = self::getMonthName(substr($arrayObject['event_date'],4,2));
        $arrayObject['year'] = substr($arrayObject['event_date'],0,4);
        //print_r($arrayObject); die();
        
        $arrayObject['address'] = get_field( 'event_address',$object->ID );
        $arrayObject['ticket_url'] = get_field( 'event_ticket_url',$object->ID );
        $arrayObject['post_content'] = get_field( 'event_small_description',$object->ID );
        return $arrayObject;
    }
    */
    public static function getDateInformation($event){
        
        $event = (array) $event;
// Array
// (
//     [description] => 4Geeks Nights - Learn to Code for Free Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free. To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.We have five -probably more- GREAT reasons why you should be in our 4Geeks Nights event on June 28th.- You will get FREE access to the Coding Intro Program and platform. Learn to Code has never been easy and better;- You will get free mentorship hours every week;- Our Career Support program speaks for itself. You will meet our Alumni; one of them will talk about his projects and experience at 4Geeks!- You will have fun while meeting our entire team & office: Founders, instructors, partners and classroom spaces. Have a drink with us!- You will get the details about our Software Program.  Full Stack + Part-time + Premium Education + Best pricing options'- Play Kill the Bug and earn a prize!Every 2 months we are launching new programs and you can be part of the next 4Geeks Alumni as a Full-Stack Software Developer. Get ready to change your life.Come. Have fun. Learn to Code. Let's celebrate together our way of making Coding a possibility to your career.A little bit about our program:Become a software developer in 16 weeks, with a part-time/blended methodology and with pricing options starting at $140p/mo. You will get more than 320 hours of training, in a gamified program designed to be 100% hands-on.Our Syllabus is based on Javascript, React JS, Python, Django, Mongo DB, AJAX, API, among other exciting technologies. You will be trained in the most wanted technologies in Miami; just what companies are looking for!NOTE: Our programs are up to 14 students. Few spots available per cohort. Just click here if you want to meet with us. The program will start on August, 13th. This is your chance to understand how Coding will change your professional life!
//     [title] => 4Geeks Nights: INFO+CODING+GAMES+DRINKS
//     [url] => https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-46847266435
//     [capacity] => 100
//     [logo_url] => https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg
//     [event_date] => 2018-06-28 18:00:00
//     [type] => intro_to_coding
//     [address] => 66 West Flagler Street #900, Miami, FL 33130
//     [location_slug] => downtown-miami
//     [lang] => en
//     [city_slug] => mia
//     [banner_url] => http://placehold.it/800x400
//     [invite_only] => 0
//     [created_at] => 2018-06-19 16:18:50
//     [id] => 1
// )
        
        $time = strtotime($event['event_date']);
        
        $wkshp = [];
        $wkshp['day'] = date('d',$time);
        $wkshp['month'] = date('M',$time);
        $wkshp['year'] = date('Y',$time);
        $wkshp['date'] = date('F j, Y',$time);
        $wkshp['bc_location_slug'] = $event['location_slug'];
        $wkshp['time'] = $time;
        $wkshp['language'] = ($event['lang']=='es') ? 'Español' : 'English';
        $wkshp['icon'] = ($event['lang']=='es') ? 'spain' : 'united-states';

        $wkshp['name'] = $event['title'];
        $wkshp['type'] = $event['type'];
        $wkshp['url'] = $event['url'];
        $wkshp['description'] = $event['description'];
        $wkshp['address'] = $event['address'];
        $wkshp['city_slug'] = $event['city_slug'];
        
        $maxLength = 350; // maximum number of characters to extract
        $trimmedString = substr($event['description'], 0, $maxLength);//trim the string to the maximum length
        $wkshp['excerpt'] = substr($trimmedString, 0, min(strlen($trimmedString), strripos($trimmedString, "."))).'.';//re-trim if we are in the middle of a word
        
        //print_r($wkshp); die();
        $location = LocationPostType::get(['meta_key' => 'breathecode_location_slug', 'meta_value' => $event['location_slug']]);
        if($location){
            $wkshp['location'] = $location->post_title;
            $wkshp['location_id'] = $location->ID;
        } 
        else $wkshp['location'] = 'Uknowwn';
        
        return $wkshp;
    }
    
    public static function getUpcomingEvents(){

        $query = self::getCalendarQuery();
        $events = WPASThemeSettingsBuilder::getThemeOption('sync-bc-events-api');
        $upcoming = [];
        if(!empty($events)) foreach($events as $c) if(self::filterQuery($c,$query)) $upcoming[] = $c;
        
        return $upcoming;
    }
    
    public static function getCalendarQuery(){
        $query = [];
        if(!empty($_REQUEST['lang'])) $query['language'] = $_REQUEST['lang'];
        if(!empty($_REQUEST['l'])) $query['location'] = $_REQUEST['l'];
        
        return $query;
    }
    
    private static function fillMember($object){
        
        $arrayObject = (array) $object;
        //$arrayObject['financed_minimum_monthly_price'] = get_field('financed_minimum_monthly_price',$object->ID);
        //$arrayObject['financed_deposit'] = get_field('financed_deposit',$object->ID);
        //$arrayObject['full_price'] = get_field('full_price',$object->ID);
        return $arrayObject;
    }
    
    private static function filterQuery($event, $query){

        if(!empty($query['language']) && strtolower(substr($event['language'],0,2)) != $event['language']) return false;
        if(!empty($query['location']) && $event['bc_location_slug'] != $query['location']) return false;
        if(!empty($query['type']) && $event['type'] != $query['type']) return false;
        if(new DateTime() > new DateTime(date('Y-m-d',$event['time']))) return false;
        
        return true;
    }
    
    private static function getMonthName($month){
        switch($month){
            case "01": return 'JAN'; break;
            case "02": return 'FEB'; break;
            case "03": return 'MAR'; break;
            case "04": return 'APR'; break;
            case "05": return 'MAY'; break;
            case "06": return 'JUN'; break;
            case "07": return 'JUL'; break;
            case "08": return 'AGO'; break;
            case "09": return 'SEP'; break;
            case "10": return 'OCT'; break;
            case "11": return 'NOV'; break;
            case "12": return 'DEC'; break;
        }
        
        return "";
    }
    
    public static function getEventsFromAPI(){
	    $eventsJSON = file_get_contents(BREATHECODE_ASSETS_HOST.'/apis/event/all');
        if($eventsJSON)
        {
            $events = json_decode($eventsJSON);

            //print_r($events); die();

            $upcoming = [];
            if($events){
            	foreach($events as $w){
            		$event = self::getDateInformation($w);
            		$event['description'] = wp_strip_all_tags($event['description']);
            		if($event['time'] > time()) $upcoming[] = $event;
            	} 
            }
            
            //print_r($events); die();
            //Sort 
			usort($upcoming, function( $a, $b ) {
			    return $a["time"] - $b["time"];
			});

            return $upcoming;
        }
        
        return null;
    }
}