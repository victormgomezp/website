<?php

    if(!defined('BREATHECODE_API')) define('BREATHECODE_API', 'https://api.breatheco.de/');
    
    if(!defined('ABSPATH')) define('ABSPATH', dirname(__FILE__) . '/');
    if(!defined('PUBLICPATH')) define('PUBLICPATH', get_site_url() . '/wp-content/themes/the-fastest/public/');
    require ABSPATH . 'vendor/autoload.php';
    
    use TF\ThemeManager;
    $themeManager = new ThemeManager();
    use TF\WPASAsyncLoader;
    $asyncLoader = new WPASAsyncLoader([
        'public-url' => get_stylesheet_directory_uri().'/public/'
        ]);
        
    $timber = new \Timber\Timber();
    
    use \WPAS\Controller\WPASController;
    $controller = new WPASController([
        'namespace' => 'TF\\Controller\\'    
    ]);
    $controller->route([ 'slug' => 'home', 'controller' => 'General']);
