<?php

namespace TF\VCComponents;

class VCTechnologiesChart{
    
    const BASE_NAME = 'why-these-technologies';
    
    function __construct(){
        add_action( 'vc_before_init', array($this,'register'));
        add_shortcode( self::BASE_NAME, array($this,'render'));
    }
    
    function register()
    {
	   vc_map( array(
	      "name" => "Why do we teach these technologies",
	      "base" => self::BASE_NAME,
	      "category" => "BreatheCode",
	      "params" => array(
            array(
                "type" => "textfield",
                "holder" => "div",
                "heading" => "Extra Classes",
                "param_name" => "classnames",
                "value" => "",
                "description" => "Extra classes"
            ),
            )
	   ) );
    }
    
	function render( $atts , $content = null) {
	    extract( shortcode_atts( array(
	      'classnames' => '',
	   ), $atts ) );
	   return '
            s
        ';
	}
}