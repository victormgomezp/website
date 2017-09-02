<?php

namespace TF;
use \Exception;
class WPASAsyncLoader{
    
    private static $manifest = [];
    private static $criticalPaths = [];
    private static $scripts = [];
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
        
        if(!empty($options['minify-output']) && $options['minify-output']===true){
            if(!WP_DEBUG) ob_start([$this,"minifyOutput"]);
        }
        if(!empty($options['critical-paths'])){
            self::$criticalPaths = $options['critical-paths'];
        }
        if(!empty($options['scripts'])){
            self::$scripts = $options['scripts'];
        }
        
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
        echo '<link rel="preload" href="'.self::load($path).'" as="style" onload="this.rel=\'stylesheet\'">';
        echo '<script>
		/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
		!function(a){"use strict";var b=function(b,c,d){function e(a){return h.body?a():void setTimeout(function(){e(a)})}function f(){i.addEventListener&&i.removeEventListener("load",f),i.media=d||"all"}var g,h=a.document,i=h.createElement("link");if(c)g=c;else{var j=(h.body||h.getElementsByTagName("head")[0]).childNodes;g=j[j.length-1]}var k=h.styleSheets;i.rel="stylesheet",i.href=b,i.media="only x",e(function(){g.parentNode.insertBefore(i,c?g:g.nextSibling)});var l=function(a){for(var b=i.href,c=k.length;c--;)if(k[c].href===b)return a();setTimeout(function(){l(a)})};return i.addEventListener&&i.addEventListener("load",f),i.onloadcssdefined=l,l(f),i};"undefined"!=typeof exports?exports.loadCSS=b:a.loadCSS=b}("undefined"!=typeof global?global:this);
		/*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
		!function(a){if(a.loadCSS){var b=loadCSS.relpreload={};if(b.support=function(){try{return a.document.createElement("link").relList.supports("preload")}catch(b){return!1}},b.poly=function(){for(var b=a.document.getElementsByTagName("link"),c=0;c<b.length;c++){var d=b[c];"preload"===d.rel&&"style"===d.getAttribute("as")&&(a.loadCSS(d.href,d,d.getAttribute("media")),d.rel=null)}},!b.support()){b.poly();var c=a.setInterval(b.poly,300);a.addEventListener&&a.addEventListener("load",function(){b.poly(),a.clearInterval(c)}),a.attachEvent&&a.attachEvent("onload",function(){a.clearInterval(c)})}}}(this);
		</script>';
    }
    
    private function minifyOutput($buffer){

        $search = array(
            '/\>[^\S ]+/s',     // strip whitespaces after tags, except space
            '/[^\S ]+\</s',     // strip whitespaces before tags, except space
            '/(\s)+/s',         // shorten multiple whitespace sequences
            '/<!--(.|\s)*?-->/' // Remove HTML comments
        );
    
        $replace = array(
            '>',
            '<',
            '\\1',
            ''
        );
    
        $buffer = preg_replace($search, $replace, $buffer);
    
        return $buffer;
    }
    
    public static function loadCriticalCSS(){
        
        if(!empty(self::$criticalPaths))
        {
            $currentPage = self::getCurrentViewId();
            //print_r($currentPage); die();
            if(!empty(self::$criticalPaths[$currentPage['type']])){
                
                if(!empty(self::$criticalPaths[$currentPage['type']]['all'])) echo '<style type="text/css">'.file_get_contents(PUBLICPATH.'../'.self::$criticalPaths[$currentPage['type']]['all']).'</style>';
                else if(!empty(self::$criticalPaths[$currentPage['type']][$currentPage['slug']]))
                {
                    //if(!$this->file_url_exists(self::$criticalPaths[$currentPage['type']][$currentPage['slug']])) throw new Exception('Critical CSS file now found');
                    echo '<style type="text/css">'.file_get_contents(PUBLICPATH.'../'.self::$criticalPaths[$currentPage['type']][$currentPage['slug']]).'</style>';
                }
            }
        }
        //echo print_r(self::getCurrentViewId()); die();
    }
    
    public static function loadScripts(){
        
        if(!empty(self::$scripts))
        {
            $currentPage = self::getCurrentViewId();
            //print_r($currentPage); die();
            if(!empty(self::$scripts[$currentPage['type']]) && !empty(self::$scripts[$currentPage['type']][$currentPage['slug']]))
            {
                self::printScripts(self::$scripts[$currentPage['type']][$currentPage['slug']]);
            }
        }
    }
    
    private static function printScripts($scriptsToPrint){
        if(count($scriptsToPrint)>2) throw new Exception('There can only be 2 scripts to load'); 
        $scripts = [];
        foreach($scriptsToPrint as $script) $scripts[] = WPASAsyncLoader::load($script);
        
        echo '<script type="text/javascript">
                var ScriptManger=function(){var e={};return e.single=function(e,n){var t=new XMLHttpRequest;t.open("GET",e),t.addEventListener("load",function(){var e=document.createElement("script");e.type="text/javascript",e.text=t.responseText,document.getElementsByTagName("head")[0].appendChild(e),n&&n()}),t.send()},e.load=function(n){e.single(n[0],function(){void 0!==n[1]&&e.single(n[1])})},e}();
                window.onload=function(){ScriptManger.load('.json_encode($scripts,JSON_UNESCAPED_SLASHES).');};
            </script>';
    }
    
    private static function getCurrentViewId(){
    
        global $post; 
        if(is_page()){
            $qo = get_queried_object();
            if(!empty($qo->slug)) return ['type'=>'page', 'slug' => $qo->slug];
            else if(!empty($qo->post_name)) return ['type'=>'page', 'slug' => $qo->post_name];
        } 
        else if(is_single()){
            return  ['type'=>'post', 'slug' => $post->post_name];
        }
        else if(is_tax()){
            $qo = get_queried_object();
            return  ['type'=>'taxonomy', 'slug' => $qo->slug];
        } 
        else if(is_category()){
            $qo = get_queried_object();
            return  ['type'=>'category', 'slug' => $qo->slug];
        } 
        else if(is_tag()){
            $qo = get_queried_object();
            return  ['type'=>'tag', 'slug' => $qo->slug];
        } 
        else if(is_archive()){
            $qo = get_queried_object();
            return  ['type'=>'archive', 'slug' => $qo->slug];
        } 
        else if(is_home()){
            global $wp_query;
            return ['type'=>'page', 'slug' => $wp_query->query['pagename']];
        } 
        else{
            global $wp_query;
            return ['type'=>'page', 'slug' => $wp_query->query['pagename']];
        }
        
        //echo 'Ending'; die();
        return null;
    }

}