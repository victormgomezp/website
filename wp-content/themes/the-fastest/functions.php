<?php

    if(!defined('BREATHECODE_API')) define('BREATHECODE_API', 'https://api.breatheco.de');
    
    if(!defined('ABSPATH')) define('ABSPATH', dirname(__FILE__) . '/');
    if(!defined('PUBLICPATH')) define('PUBLICPATH', get_site_url() . '/wp-content/themes/the-fastest/public/');
    require ABSPATH . 'vendor/autoload.php';
    
    use TF\ThemeManager;
    $themeManager = new ThemeManager();
    use WPAS\Performance\WPASAsyncLoader;
    $asyncLoader = new WPASAsyncLoader([
        'public-url' => get_stylesheet_directory_uri().'/public/',
        'minify-html' => true,
        'styles' => [
            "page" => [
                "home" => 'index.css',
                ]
            ],
        'critical-styles' => [
            "page" => [
                "home" => 'public/above.css',
                "blog" => 'public/blog.css'
                ],
            "custom-post" => [
                "course" => 'public/above.css'
                ],
            "post" => [
                'all' => 'public/blog.css'
                ]
            ],
        'scripts' => [
            "page" => [
                "home" => ['vendor.js','index.js'],
                "blog" => ['vendor.js','blog.js']
                ],
            "post" => [
                'all' => ['vendor.js','blog.js']
                ]
            ]
        ]);
        
    use \WPAS\Controller\WPASController;
    $controller = new WPASController([
        'namespace' => 'TF\\Controller\\'    
    ]);
    $controller->route([ 'slug' => 'home', 'controller' => 'General']);
    $controller->route([ 'slug' => 'Course', 'controller' => 'Course']);
    
    
    use \WPAS\Types\PostTypesManager;
    $namespace = '\TF\Types\\';
    
    $postTypeManager = new PostTypesManager([
        'course:'.$namespace.'CoursePostType',
        'location:'.$namespace.'LocationPostType'
    ]);
    
    use TF\ActiveCampaign\ACAPI;
    ACAPI::start();