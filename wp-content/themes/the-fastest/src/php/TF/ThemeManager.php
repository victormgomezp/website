<?php

namespace TF;

class ThemeManager{
    
    public $version = 1.2;
    
    public function __construct(){

        $this->removeDefauls();
        
        if(!defined('WP_DEBUG') || WP_DEBUG == false)
        {
            ini_set('display_errors', false);
            error_reporting(0);
        }
        
        add_action( 'after_setup_theme', [$this,'register_menus'], 10 );
        add_filter( 'walker_nav_menu_start_el', [$this,'prefix_nav_description'], 10, 4 );
        add_filter( 'body_class', [$this,'add_slug_body_class'], 10 );
    }
    
    function prefix_nav_description( $item_output, $item, $depth, $args ) {
        if ( !empty( $item->description ) ) {
            $item_output = str_replace( $args->link_after . '</a>', '<span class="menu-item-description details">' . $item->description . '</span>' . $args->link_after . '</a>', $item_output );
        }
 
        return $item_output;
    }
    
    //Page Slug Body Class
    function add_slug_body_class( $classes ) {
        global $post;
        if (isset($post)) {
            $classes[] = $post->post_type . '-' . $post->post_name;
        }
        return $classes;
    }
    
    public function register_menus(){
        register_nav_menus( array( 
            'header' => 'Header menu', 
            'blog-header' => 'Blog Header menu', 
            'footer-company' => 'Footer menu',
            'footer-locations' => 'Footer Locations' 
        ));
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
    
    function is_login_page() {
        return in_array($GLOBALS['pagenow'], array('wp-login.php', 'wp-register.php'));
    }   
    
}
