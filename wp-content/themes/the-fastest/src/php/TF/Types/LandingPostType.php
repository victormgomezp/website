<?php

namespace TF\Types;

use WPAS\Types\BasePostType;
use WPAS\Messaging\WPASAdminNotifier;
use WP_Query;

class LandingPostType extends BasePostType{
    
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