<?php
/*
* @title: Every cohort must have a replit
*/

use PHPUnit\Framework\TestCase;

class PricesTest extends TestCase {
    var $current_dir = '';
    public function setUp()
    {
        parent::setUp();
        $this->current_dir = dirname(__FILE__);
    }
    function testThereMustBeAPriceForAllLocations(){
        $result = include $this->current_dir.'/../src/php/languages/all.prices.php';
        $courses = json_decode(file_get_contents('https://www.4geeksacademy.co/wp-json/4g/v1/courses'));
        $locations = json_decode(file_get_contents('https://www.4geeksacademy.co/wp-json/4g/v1/locations'));
        
        $courses = array_map(function($c){ return $c->bc_profile_slug; }, $courses);
        $locations = array_map(function($c){ return $c->bc_location_slug; }, $locations);
        
        foreach($courses as $c){
            foreach($locations as $l){
                $this->assertSame($this->priceExists($result,$l,$c), "Found location ".$l." and course ".$c);
            }
        }
    }
    
    function priceExists($prices, $location, $course){
        if(isset($prices[$course][$location])) return "Found location ".$location." and course ".$course;
        else return false;
    }
}