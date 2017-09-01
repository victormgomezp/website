<?php

namespace TF;

class ThemeManager{
    
    public $version = 1;
    
    public function __construct(){
        //if(WP_DEBUG) $this->version += rand(0,999999999); 
        
        //add_action( 'init', [$this,'load_scripts'] );
        //add_filter( 'script_loader_tag', [$this,'script_loading_template'], 10, 3 );
        //add_filter( 'style_loader_tag', [$this,'script_loading_template'], 10, 3 );
        $this->removeDefauls();
        
        add_action( 'init', [$this,'manage_styles_and_scripts'], 10 );
    }
    
    public function load_styles(){
    }
    public function load_scripts(){
        
        wp_enqueue_script( 'vendor', PUBLICPATH.'vendor.js', [], $this->version );
        wp_enqueue_script( 'bundle', PUBLICPATH.'index.js', [], $this->version, ['vendor'] );
    }
    
    public function manage_styles_and_scripts(){
        if (!is_admin()) {
          wp_deregister_script('jquery');
          wp_deregister_script( 'wp-embed' );
          
          //wp_enqueue_style('main-styles', get_stylesheet_uri(), array(), $this->version, null);
          
       }
    }
    
    private function removeDefauls(){
        //Moving scripts to the </body>
        remove_action('wp_head', 'wp_print_scripts'); 
        remove_action('wp_head', 'wp_print_head_scripts', 9); 
        remove_action('wp_head', 'wp_enqueue_scripts', 1);
        
        add_action('wp_footer', 'wp_print_scripts', 5);
        add_action('wp_footer', 'wp_enqueue_scripts', 5);
        add_action('wp_footer', 'wp_print_head_scripts', 5); 

        //Removing embed.js
        remove_action ('wp_head', 'rsd_link');
        remove_action( 'wp_head', 'wlwmanifest_link');
        remove_action('wp_head', 'wp_generator');
       
        $this->removeEmojis();
    }
    
    private function removeEmojis(){
        // all actions related to emojis
        remove_action( 'admin_print_styles', 'print_emoji_styles' );
        remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
        remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
        remove_action( 'wp_print_styles', 'print_emoji_styles' );
        remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
        remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
        remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
        
        // filter to remove TinyMCE emojis
        add_filter( 'tiny_mce_plugins', 'disable_emojicons_tinymce' );
    }
    
    public function test(){
        echo 'hello';die();
    }
    
    function script_loading_template( $tag, $handle, $src ) {
        if ( 'vendor.js' === $handle ){
            $tag = '<script type="text/javascript">';
            $tag .= 'function downloadJSAtOnload() {
                        var element = document.createElement("script");
                        element.src = "'.esc_url( $src ).'";
                        document.body.appendChild(element);
                        }
                        if (window.addEventListener)
                        window.addEventListener("load", downloadJSAtOnload, false);
                        else if (window.attachEvent)
                        window.attachEvent("onload", downloadJSAtOnload);
                        else window.onload = downloadJSAtOnload;';
            $tag .= '</script>';
        }
     
        return $tag;
    }
    
    function style_loading_template( $tag, $handle, $src ) {
     
        return $tag;
    }
    
}