<?php

namespace TF\VCComponents;
use TF\Types\CoursePostType;
class VCUpcomingPrograms{
    
    const BASE_NAME = 'upcoming-programs';
    
    function __construct(){
        add_action( 'vc_before_init', array($this,'register'));
        add_shortcode( self::BASE_NAME, array($this,'render'));
    }
    
    function register()
    {
	   vc_map( array(
	      "name" => "Upcoming Programs",
	      "base" => self::BASE_NAME,
	      "category" => "BreatheCode",
	      "params" => array(
                array(
                    "type" => "textfield",
                    "holder" => "div",
                    "heading" => "Extra Class",
                    "param_name" => "classnames",
                    "value" => "",
                    "description" => "Additional Classes to apply"
                ),
            )
	   ) );
    }
    
	function render( $atts , $content = null) {
	    extract( shortcode_atts( array(
	      'classnames' => '',
	   ), $atts ) );
	    $args['upcoming-cohorts'] = CoursePostType::getUpcomingDates();
	    $content = '<div class="upcoming-courses '.$classnames.'">';
        if(!empty($args['upcoming-cohorts'])){
          $content .= '<h4 class="section-heading text-black text-center mb-4 mt-2">Upcoming Courses at this location</h4>';
        } else {
          $content .= '<h4 class="section-heading text-black text-center mb-4 mt-2">No upcoming courses at this location</h4>';
        }
        if(!empty($args['upcoming-cohorts'])) foreach($args['upcoming-cohorts'] as $course){
		 $content .= '<div class="card">
            <h4 class="card-title">
              <a href="'.get_permalink($course['id']).'">
                '.$course['name'].'
              </a>
            </h4>
            <ul>
              <li>
                '.file_get_contents(get_template_directory_uri().'/assets/icons/inline-calendarstroke.svg.php').' '.$course['day'].' '.$course['month'].', '.$course['year'].'
              </li>
              <li>
                - '.$course['hr_duration'].' hrs ('.$course['week_duration'].' wks)
              </li>
              <li>
                '.file_get_contents(get_template_directory_uri().'/assets/icons/flags/inline-'.$course['icon'].'.svg.php').'
                <span class="language">'.$course['language'].'</span>
              </li>
            </ul>
          </div></div>';
          return $content;
        }
	}
}