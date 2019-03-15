<?php

namespace TF;

use TF\VCComponents\VCRequestSyllabus;
use TF\VCComponents\VCTestimonialCarousel;
use TF\VCComponents\VCTechnologiesChart;
use TF\VCComponents\VCUpcomingPrograms;
use TF\VCComponents\VCAboutTheProgram;
use WPAS\Messaging\WPASAdminNotifier;

class VCSettings {

	function __construct() {
		
		if(!function_exists('vc_map')) WPASAdminNotifier::addTransientMessage(WPASAdminNotifier::ERROR,'The plugin Visual Composer is required, please install https://vc.wpbakery.com/');
		
		try{
			$requestSyllabus = new VCRequestSyllabus();
			$testimonialsCarousel = new VCTestimonialCarousel();
			$technologiasChart = new VCTechnologiesChart();
			$upcomingPrograms = new VCUpcomingPrograms();
			$about = new VCAboutTheProgram();
		}
		catch(\Exception $e)
		{
			WPASAdminNotifier::addTransientMessage(WPASAdminNotifier::ERROR,$e->getMessage());
		}
	}

}

//Your "container" content element should extend WPBakeryShortCodesContainer class to inherit all required functionality
if ( class_exists( 'WPBakeryShortCodesContainer' ) ) {
    class WPBakeryShortCode_coderepl extends \WPBakeryShortCodesContainer {
    }
}
if ( class_exists( 'WPBakeryShortCode' ) ) {
    class WPBakeryShortCode_codepreview extends \WPBakeryShortCode {}
    class WPBakeryShortCode_codehighliter extends \WPBakeryShortCode {}
}