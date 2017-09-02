<?php

namespace TF;

class ThemeManager{
    
    public $version = 1;
    
    public function __construct(){

        $this->removeDefauls();
        
        add_action( 'init', [$this,'manage_styles_and_scripts'], 10 );
    }
    
    public function manage_styles_and_scripts(){
        if (!is_admin() && !$this->is_login_page()) {
          wp_deregister_script('jquery');
          wp_deregister_script( 'wp-embed' );
       }
    }
    
    private function removeDefauls(){
        if (!is_admin() && !$this->is_login_page()) {
            //Removing embed.js
            remove_action ('wp_head', 'rsd_link');
            remove_action( 'wp_head', 'wlwmanifest_link');
            remove_action('wp_head', 'wp_generator');
           
            $this->removeEmojis();
        }
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
    
    function is_login_page() {
        return in_array($GLOBALS['pagenow'], array('wp-login.php', 'wp-register.php'));
    }   
    
}