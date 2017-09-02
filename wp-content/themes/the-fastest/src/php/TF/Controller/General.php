<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use \WP_Query;

class General{
    
    public function renderHome(){
        
        $args = [];
        $profilesJSON = @file_get_contents(BREATHECODE_API.'specialties/');
        if($profilesJSON)
        {
            $result = json_decode($profilesJSON);
            $args['profiles'] = (array) $result->data;
        }
        else
        {
            $args['profiles'] = [];
            $profile = [];
            $profile['image_url'] = 'Profile 1';
            $profile['name'] = '';
            
            $args['profiles'][] = (object) $profile;
        }
        //print_r($args['profiles']); die();
        return $args;
    }
    
}