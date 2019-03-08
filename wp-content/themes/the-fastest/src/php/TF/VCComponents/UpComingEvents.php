<?php

namespace TF\VCComponents;

class VCUpcomingEvents{
    
    const BASE_NAME = 'upcoming-events';
    
    function __construct(){
        add_action( 'vc_before_init', array($this,'register'));
        add_shortcode( self::BASE_NAME, array($this,'render'));
    }
    
    function register()
    {
	   vc_map( array(
	      "name" => "Syllabus Horizontal",
	      "base" => self::BASE_NAME,
	      "category" => "BreatheCode",
	      "params" => array(
                // array(
                //     "type" => "textfield",
                //     "holder" => "div",
                //     "heading" => "Box Height",
                //     "param_name" => "background-color",
                //     "value" => "#FFFFFF",
                //     "description" => "The height of the test tool container."
                // ),
            )
	   ) );
    }
    
	function render( $atts , $content = null) {
	    $content = '
        <div class="row">
          <div class="col-12 col-sm-6 mx-auto">';
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
                    '.wpas_get_inline_svg('assets/icons/inline','calendarstroke.svg').' '.$course['day'].' '.$course['month'].', '.$course['year'].'
                  </li>
                  <li>
                    - '.$course['hr_duration'].' hrs ('.$course['week_duration'].' wks)
                  </li>
                  <li>
                    '.wpas_get_inline_svg('assets/icons/flags/inline',$course['icon'].'.svg').'
                    <span class="language">'.$course['language'].'</span>
                  </li>
                </ul>
              </div>';
            }
          $content .= '</div>';
          if(!empty($args['events'])){
          $content .= '<div class="col-12 col-sm-6 mx-auto">
              <h4 class="section-heading text-black text-center">'.pll__('Upcoming Events at this location').'</h4>';
            foreach($args['events'] as $event){
				$content .= '<div class="media">
                  <img class="media-left" alt="Image" src="http://via.placeholder.com/160x100">
                  <div class="media-body text-left">
                    <h4 class="card-title">'.$event['post_title'].'</h4>
                    <p class="card-text">
                      '.get_file_contents('assets/icons/inline-calendarstroke.svg').'
                      '.$event['day'].' '.$event['month'].', '.$event['year'].'
                    </p>
                    <p class="card-text">Starts: '.$event['event_start_time'].'</p>
                  </div>
              </div>';
            }
          $content .= '</div>';
        }
        $content .= '</div>
        ';
	}
}