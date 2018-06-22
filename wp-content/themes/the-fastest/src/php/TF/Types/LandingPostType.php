<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WP_Query;

class LandingPostType extends BasePostType{
    
    const POST_TYPE = 'landing';
    
    function initialize(){
		add_filter( 'manage_'.self::POST_TYPE.'_posts_columns', [$this,'columns_header'] ) ;
		add_action( 'manage_'.self::POST_TYPE.'_posts_custom_column', [$this,'columns_content'], 10, 2 );
    }
    
	function columns_header( $columns ) {
		$columns = array_merge($columns, [
			'template' => 'Template'
		]);
	
		return $columns;
	}
	
	
	function columns_content($column_name, $post_ID) {
	    if ($column_name == 'template') {
	        echo get_page_template_slug($post_ID);
	    }
	}
    
    function populate_fields(){

        add_filter('acf/load_field/name=landing_extra_script', [$this,'populate_script']);
        //add_filter( 'gform_pre_render', [$this,'populate_gf_location_dropdown'] );
    }
    
    function populate_script( $field ) {
        
        $scriptPath = get_template_directory().'/src/js/scripts';
        $publicPath = get_template_directory_uri().'/src/js/scripts';
        $field['choices'] = array();
        $field['choices']['0'] = 'Select a script';
        
        if(file_exists($scriptPath))
        {
            $files = glob($scriptPath.'/*.js');
            foreach ($files as $file) {
                $filename = basename($file);
                $field['choices'][$publicPath.'/'.$filename] = $filename;
            }
        }
        else
        {
            throw new \Exception('Missing directory: '.$scriptPath);
        }
        // return the field
        return $field;
        
    }
    
}