<?php

namespace TF;
use \Exception;
class WPASAsyncLoader{
    
    private static $manifest = [];
    private static $publicUrl = '';
    
    public function __construct($options=[]){
        
        if(!empty($options['public-url'])){
            self::$publicUrl = $options['public-url'];
        }
        if(empty($options['manifest-url'])) $options['manifest-url'] = 'manifest.json';
        
        $manifestURL = $options['public-url'].$options['manifest-url'];
        if($this->file_url_exists($manifestURL))
        {
            $jsonManifiest = json_decode(file_get_contents($manifestURL));
            if($jsonManifiest) self::$manifest = $this->loadManifiest($jsonManifiest);
            else throw new Exception('Invalid Manifiest Syntax');
            
        }
        else throw new Exception('Invalid Manifiest URL: '.$manifestURL);
        
    }
    
    private function loadManifiest($manifiestObj){
        $manifest = [];
        foreach($manifiestObj as $resource => $path)
            $manifest[$resource] = self::$publicUrl.$path;
            
        return $manifest;
    }
    
    public static function load($url){
        return self::$manifest[$url];
    }
    
    private function file_url_exists($file){
        $file_headers = @get_headers($file);
        if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') return false;
        else return true;
    }
    
    public static function print_style_tag($path){
        echo '<link rel="stylesheet" href="'.self::load($path).'" media="none" onload="if(media!=\'all\')media=\'all\'"><noscript><link rel="stylesheet" href="'.self::load($path).'"></noscript>';
    }
    
}