<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WP_Query;

class EventPostType extends BasePostType{
    
    public static function get($args){
        
        $args = array_merge($args,[
            'post_type' => 'event'
        ]);
        
        $query = new WP_Query($args);
        if($query->posts && count($query->posts)>=1){
            return $query->posts[0];
        }else return null;
    }
    
    public static function all($args=null, $hook=null){
        
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
    
    private static function fillMember($object){

        
        $arrayObject = (array) $object;
        $arrayObject['permalink'] = get_permalink($object->ID);
        $arrayObject['thumb_url'] = get_the_post_thumbnail_url($object->ID);
        $arrayObject['event_end_time'] = get_field( 'event_end_time',$object->ID );
        $arrayObject['event_start_time'] = get_field( 'event_start_time',$object->ID );
        $arrayObject['event_date'] = get_field( 'event_date',$object->ID );
        
        $arrayObject['day'] = date('d',$arrayObject['event_date']);
        $arrayObject['month'] = date('M',$arrayObject['event_date']);
        $arrayObject['year'] = date('Y',$arrayObject['event_date']);
        $arrayObject['date'] = date('F j, Y',$arrayObject['event_date']);
        
        $arrayObject['address'] = get_field( 'event_address',$object->ID );
        $arrayObject['ticket_url'] = get_field( 'event_ticket_url',$object->ID );
        $arrayObject['post_content'] = get_field( 'event_small_description',$object->ID );
        return $arrayObject;
    }
    
    public static function getUpcomingEvents(){

        $today = date('Ymd');
        $args = array(
            'order' => 'ASC',
            'meta_query' => array(
        	     array(
        	        'key'		=> 'event_date',
        	        'compare'	=> '>=',
        	        'value'		=> $today,
        	    )
            ),
    	);
        
        $events = EventPostType::all($args);
        return $events;
    }
}