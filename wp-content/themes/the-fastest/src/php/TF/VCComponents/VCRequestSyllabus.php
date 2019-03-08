<?php

namespace TF\VCComponents;

class VCRequestSyllabus{
    
    const BASE_NAME = 'syllabus-horizontal';
    
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
                array(
                    "type" => "textfield",
                    "holder" => "div",
                    "heading" => "Extra Classes",
                    "param_name" => "classnames",
                    "value" => "",
                    "description" => "Extra Classes for the form"
                ),
                array(
                    "type" => "textfield",
                    "holder" => "div",
                    "heading" => "Extra Styles",
                    "param_name" => "extrastyles",
                    "value" => "",
                    "description" => "Extra Stypes for the box"
                ),
            )
	   ) );
    }
    
	function render( $atts , $content = null) {
	    extract( shortcode_atts( array(
	      'classnames' => '',
	      'extrastyles' => '',
	   ), $atts ) );
	   return '
            <h4>'.pll__('Download our syllabus PDF to get all the details').'</h4>
             <form style="'.$extrastyles.'" class="form-inline text-center syllabus-download '.$classnames.'">
              <div class="alert alert-danger" style=" width: 100%; display: none;" role="alert"></div>
              <input type="text" class="form-control mr-lg-3 mb-sm-0 mb-1" name="" placeholder="'.pll__('Your first name').'" required/>
              <input type="email" class="form-control  mr-lg-3 mb-sm-0 mb-1" name="" placeholder="'.pll__('Your email').'" required/>
              <select class="locations form-control"><option value="undefined">'.pll__('Select a location').'</option></select>
              <button class="btn btn-secondary form-control ml-lg-3 mt-sm-0 mt-1">'.pll__('Download').'</a>
            </form>';
	}
}