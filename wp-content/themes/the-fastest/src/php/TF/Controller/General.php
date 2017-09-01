<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use \WP_Query;

class General{
    
    public function renderHome(){
        
        $args = [];
        $profilesJSON = file_get_contents(BREATHECODE_API.'specialties/');
        $result = json_decode($profilesJSON);
        $args['profiles'] = $result->data;
        //print_r($args['profiles']); die();
        return $args;
    }
    
    public function whatever(){}
}