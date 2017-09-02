<?php

namespace TF\Types;

use PostTypes\PostType;

class Course{
    
    function __construct(){
        $course = new PostType('course');
    }
    
}