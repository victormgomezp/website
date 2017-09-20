<?php

namespace TF\Controller;

use WPAS\Exception\WPASException;
use TF\Types\EventPostType;
use \WP_Query;

class Event{
    
    public function renderEvent(){

        $args = [];
        $args['event'] = EventPostType::get([ 'ID' => get_the_id()]);
        return $args;
    }
    
}