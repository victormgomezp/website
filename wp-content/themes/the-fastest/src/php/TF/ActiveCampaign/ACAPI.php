<?php

namespace TF\ActiveCampaign;
require_once(dirname(__FILE__)."/../../vendor/activecampaign/includes/ActiveCampaign.class.php");

class ACAPI{
    
    private static $connector = [];
    
    public static function start(){
        
        $apiOldURL = 'https://4geeks.api-us1.com';
        $apiURL = 'https://4geeks.api-us1.com/api/3/';
        $apiKey = "30f9f6fe16d0c589445290af8c87fd7658500c700eda21ad8a232103d0037486c57e7a7d";
        
        if(empty(self::$connector['new'])) self::$connector['new'] = new Connector($apiURL, $apiKey);
        if(empty(self::$connector['old'])) self::$connector['old'] = new \ActiveCampaign($apiOldURL, $apiKey);
        
    }
    
    private function request($slug, $args)
    {
        
    }
    
    public static function getCustomField($slug, $listIds='1'){
        
        $slug = strtoupper($slug);
        $args = [];
        $args['ids'] = $listIds;
        $args['global_fields'] = 1;
        $args['full'] = 1;
        
        $list = (array) self::$connector['old']->api("list/list", $args);
        $list = array_shift($list);
        $courseField = self::findField($list->fields,$slug);
        
        if(!$courseField) throw new \Exception('Unable to find custom field: '.$slug);
        return $courseField;
    }
    
    private static function findField($fields, $slug){
        foreach($fields as $f) if($f->perstag == $slug) return $f;
        return null;
    }
}