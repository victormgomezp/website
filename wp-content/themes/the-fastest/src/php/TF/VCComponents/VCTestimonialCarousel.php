<?php

namespace TF\VCComponents;

use TF\Types\TestimonialPostType;

class VCTestimonialCarousel{
    
    const BASE_NAME = 'testimonial-carousel';
    
    function __construct(){
        add_action( 'vc_before_init', array($this,'register'));
        add_shortcode( self::BASE_NAME, array($this,'render'));
    }
    
    function register()
    {
	   vc_map( array(
	      "name" => "Testimonial Carousel",
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
	    $args = [];
        $args['testimonials'] = TestimonialPostType::All();
	   $output = '
          <div class="container">
            <h2 class="text-black text-center">'.pll__('Over 500 students graduated so far').'</h2>
            <div class="row">
                <div class="col-md-12">
                  <div id="testimonials-carousel" class="carousel carousel-testimonial slide" data-ride="carousel">
                    <div class="carousel-inner" role="listbox">';
                        $count = -1;
                        $activePosition = rand(0,count($args['testimonials'])-1);
                        foreach($args['testimonials'] as $testi){ $count++;
                        $output .= '<div class="carousel-item '.(($activePosition==$count) ? 'active' : '').'">
                            <div class="testimonial">
                                <div class="avatar">
                                    <div style="background-image: url(\''.$testi['student_thumb']['url'].'\');" class="rounded-circle img-fluid"></div>
                                </div>
                                <p>
                                  <span class="imoon icon-quotes-left"></span> 
                                  '.$testi['post_content'].'
                                  <span class="imoon icon-quotes-right"></span> 
                                </p>
                                <h4>'.$testi['student_name'].'</h4>
                                ';
                                while(!empty($testi['stars']) and $testi['stars']>0){
                                $output .= '<span class="imoon icon-star-full"></span>';
                                $testi['stars']--;
                                }
                            $output .= '</div>
                        </div>';
                        }
                    $output .= '</div>
                    <!--Controls-->
                    <a class="carousel-control carousel-control-prev text-black" href="#testimonials-carousel" role="button" data-slide="prev">
                      <span class="imoon icon-arrow-left2"></span>
                      <span class="sr-only">'.pll__('Previous').'</span>
                    </a>
                    <a class="carousel-control carousel-control-next text-black" href="#testimonials-carousel" role="button" data-slide="next">
                      <span class="imoon icon-arrow-right2"></span>
                      <span class="sr-only">'.pll__('Next').'</span>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        ';
        
        return $output;
	}
}