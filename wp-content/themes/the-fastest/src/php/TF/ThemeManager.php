<?php

namespace TF;

class ThemeManager{
    
    public $version = 1.3;
    
    public function __construct(){

        $this->removeDefauls();
        
        if(!defined('WP_DEBUG') || WP_DEBUG == false)
        {
            ini_set('display_errors', false);
            error_reporting(0);
        }
        
        add_action( 'after_setup_theme', [$this,'register_menus'], 10 );
        add_filter( 'walker_nav_menu_start_el', [$this,'prefix_nav_description'], 10, 4 );
        add_filter( 'body_class', [$this,'add_slug_body_class'], 11 );
        
        //customize the page clumnos to add the template
		add_filter( 'manage_pages_columns', [$this,'pages_columns_header'] ) ;
		add_action( 'manage_pages_custom_column', [$this,'pages_columns_content'], 10, 2 );
		
		//customize rewrite rules
		add_filter('generate_rewrite_rules', [$this, 'customRewriteRules'], 10,1);
        add_filter( 'query_vars', [$this,'custom_query_vars_filter'] );
        
        //acf api key
        //add_filter('acf/fields/google_map/api', [$this, 'my_acf_google_map_api']);
        
        //advanced custome fields configuration
        $this->advancedCustomFieldsSync();
        
        add_filter('wpas_fill_content', function($data){
			
			//if its not already set
		    $info = $this->getUserInfo($this->getRealIpAddr());
		    if(defined('WP_DEBUG_CONTEXT') && WP_DEBUG_CONTEXT) self::logOnTopBar($info);
		    if(isset($info['country_name'])) $data['country_name'] = strtolower($info['country_name']);
		    if(isset($info['city'])) $data['city'] = strtolower($info['city']);
		    if(isset($info['latitude'])) $data['latitude'] = $info['latitude'];
		    if(isset($info['longitude'])) $data['longitude'] = $info['longitude'];
		    
		    $city = get_query_var('city');
		    if(!empty($city)){
		        if(empty($_GET['city_slug'])) $data['city_slug'] = $city;
		        else $data['city_slug'] = strtolower($_GET['city_slug']);
		    } 
			
			//if its not already set
			if(isset($_GET['referral_key'])) $data['referral_key'] = $_GET['referral_key'];
			if(isset($_GET['gclid'])) $data['gclid'] = $_GET['gclid'];
			if(isset($_GET['utm_medium'])) $data['utm_medium'] = $_GET['utm_medium'];
			if(isset($_GET['utm_campaign'])) $data['utm_campaign'] = $_GET['utm_campaign'];
			if(isset($_GET['utm_source'])) $data['utm_source'] = $_GET['utm_source'];
			
			return $data;
		},10,2);
		

        
        add_filter( 'redirect_canonical', [$this, 'wpse_184163_disable_canonical_front_page'], 10, 2 );
        add_filter( 'wp_title', [$this, 'override_the_title']);
    }
    function wpse_184163_disable_canonical_front_page( $redirect, $requested ) {
        
        if (preg_match('/(home)|(inicio)\/.*/',$requested)){
            $city = get_query_var('city');
            if (!empty($city)) $redirect = false;
        }
        return $redirect;
    }
    
    function override_the_title( $title ) {
        $city = get_query_var('city');
        if ( is_page() && $front_page = get_option( 'page_on_front' )) {
            if ( is_page( $front_page )){
                if(!empty($city)) echo ucwords(str_replace("-"," ",$city)) . ' Coding Bootcamp';
            }
            else if(!empty($city)) echo ucwords(str_replace("-"," ",$city)) . ' - ';
            
        }
        else if(!empty($city)) echo ucwords(str_replace("-"," ",$city)) . ' - ';
    }
    
    function _debug($val, $val2=null){
        if((isset($_GET['debug']) && $_GET['debug']==true) or (WP_DEBUG and (!isset($_GET['debug']) or $_GET['debug']!=false))){
            if($val2){
                echo $val."\n";
                print_r($val2);
            } 
        
            else print_r($val);
            
            die();
        }
    }
    
    function getUserInfo($ip, $defaults=[]){
        
        $value = get_transient( 'geolocalization_info_'.$ip );
        if (empty($value) or (isset($_GET['debug']) and $_GET['debug'] == 'true')) {
            /** @var array|WP_Error $response */
            if(defined('WP_DEBUG_CONTEXT') && WP_DEBUG_CONTEXT) self::logOnTopBar("Retreving IP info...");
            $response = wp_remote_get( 'http://api.ipstack.com/'.$ip.'?access_key='.IPSTACK_KEY );
            if ( is_array( $response ) && ! is_wp_error( $response ) ) {
                $headers = $response['headers']; // array of http header lines
                $result = (array) json_decode($response['body']); // use the content
                if($result){
                    set_transient( 'geolocalization_info_'.$ip, array_merge($result, $defaults), 60*60*12 ); # 12 hours  
                    $value = $result;
                } 
                else $value = null;
            }
            else $value = null;
             // this code runs when there is no valid transient set
        }
        
        return $value;
    }
    
    private static function logOnTopBar($context){
        echo '<pre style="background: #232323; color: white; font-size: 10px; line-height: 10px;margin-bottom: 0;">';
        if(is_string($context)) echo $context;
        else print_r($context);
        echo '</pre>';
    }
    
    function getRealIpAddr(){
        
        if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
        {
          $ip=$_SERVER['HTTP_CLIENT_IP'];
        }
        elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
        {
          $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
        }
        else
        {
          $ip=$_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }
    
    function customRewriteRules($wp_rewrite) {
        $rules = array();
        $courses = get_posts( array(
            'post_type' => 'course',
            'lang' => 'en,es',
            'post_status'=> 'publish',
            'posts_per_page' => -1
        ) );
        
        $post_type = 'course';
        foreach ($courses as $c) {    
            $rules[$post_type.'/' . $c->post_name . '/([a-zA-Z-_]*)[\/\?]?.*$'] = 'index.php?post_type=' . $post_type. '&city=$matches[1]&name='.$c->post_name;
            $rules[pll_get_post_language($c->ID).'/'.$post_type.'/' . $c->post_name . '/([a-zA-Z-_]*)[\/\?]?.*$'] = 'index.php?post_type=' . $post_type. '&city=$matches[1]&name='.$c->post_name;
        }
        
        $frontpage_id = get_option( 'page_on_front' );
        $rules['home/([a-zA-Z-_]*)[\/\?]?.*$'] = 'index.php?city=$matches[1]&pagename=home';
        $rules['en/home/([a-zA-Z-_]*)[\/\?]?.*$'] = 'index.php?city=$matches[1]&pagename=home';
        $rules['inicio/([a-zA-Z-_]*)[\/\?]?.*$'] = 'index.php?city=$matches[1]&pagename=inicio';
        $rules['es/inicio/([a-zA-Z-_]*)[\/\?]?.*$'] = 'index.php?city=$matches[1]&pagename=inicio';
        
        // merge with global rules
        $wp_rewrite->rules = $rules + $wp_rewrite->rules;
        
    }
    
    function custom_query_vars_filter($vars) {
      $vars[] .= 'city';
      return $vars;
    }
    
	function pages_columns_header( $columns ) {
		$columns = array_merge($columns, [
			'template' => 'Template',
		]);
		
    	unset(
    		$columns['author'],
    		$columns['comments']
    	);
	
		return $columns;
	}
	
	
	function pages_columns_content($column_name, $post_ID) {
	    if ($column_name == 'template') {
	        echo get_page_template_slug($post_ID);
	    }
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
            'landing-vc' => 'Visual Composer Landing', 
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
    
    function advancedCustomFieldsSync(){
        add_filter('acf/settings/save_json', function() {
        	return get_stylesheet_directory() . '/acf-json';
        });
        
        add_filter('acf/settings/load_json', function($paths) {
        	$paths = array(get_template_directory() . '/acf-json');
        
        	if(is_child_theme())
        	{
        		$paths[] = get_stylesheet_directory() . '/acf-json';
        	}
        
        	return $paths;
        });
    }
    
}
