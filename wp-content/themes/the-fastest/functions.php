<?php

    if(!defined('BREATHECODE_API')) define('BREATHECODE_API', 'https://api.breatheco.de');
    
    if(!defined('ABSPATH')) define('ABSPATH', dirname(__FILE__) . '/');
    if(!defined('PUBLICPATH')) define('PUBLICPATH', get_site_url() . '/wp-content/themes/the-fastest/public/');
    require ABSPATH . 'vendor/autoload.php';
    
    use TF\ThemeManager;
    $themeManager = new ThemeManager();
    
    use TF\ThemeAdminSettings;
    $settings = new ThemeAdminSettings();
    
    use WPAS\Performance\WPASAsyncLoader;
    $asyncLoader = new WPASAsyncLoader([
        'public-url' => get_stylesheet_directory_uri().'/public/',
        'debug' => WP_DEBUG,
        'minify-html' => !WP_DEBUG,
        'styles' => [
            "page" => [
                "all" => 'index.css'
                ]
            ],
        'critical-styles' => [
            "page" =>           ["blog" => 'blog.css', "all" => 'above.css'],
            "custom-post" =>    ["all" => 'above.css'],
            "post" =>           ['all' => 'blog.css'],
            "category" =>       ['all' => 'blog.css'],
            "tag" =>            ['all' => 'blog.css']
            ],
        'scripts' => [
            "page" => [
                "all" => ['vendor.js','index.js']
                ],
            "post" => [
                'all' => ['vendor.js','blog.js']
                ],
            "tag" => [
                'all' => ['vendor.js','blog.js']
                ],
            "category" => [
                'all' => ['vendor.js','blog.js']
                ]
            ]
        ]);
        
    use \WPAS\Controller\WPASController;
    $controller = new WPASController([
        'namespace' => 'TF\\Controller\\'
    ]);
    
    $controller->route([ 'slug' => 'home', 'controller' => 'General']);
    $controller->route([ 'slug' => 'inicio', 'controller' => 'General:renderHome']);
    
    $controller->route([ 'slug' => 'Course', 'controller' => 'Course']);
    
    $controller->route([ 'slug' => 'the-academy', 'controller' => 'General']);
    $controller->route([ 'slug' => 'academia', 'controller' => 'General:renderTheAcademy']);
    
    $controller->route([ 'slug' => 'apply', 'controller' => 'General']);
    $controller->route([ 'slug' => 'aplica', 'controller' => 'General:renderApply']);
    
    $controller->route([ 'slug' => 'the-program', 'controller' => 'General']);
    $controller->route([ 'slug' => 'programa', 'controller' => 'General:renderTheProgram']);
    
    $controller->route([ 'slug' => 'calendar', 'controller' => 'General']);
    $controller->route([ 'slug' => 'calendario', 'controller' => 'General:renderCalendar']);
    
    $controller->route([ 'slug' => 'pricing', 'controller' => 'General']);
    $controller->route([ 'slug' => 'precio', 'controller' => 'General:renderPricing']);
    
    $controller->route([ 'slug' => 'blog:blog', 'controller' => 'Blog']);
    
    $controller->route([ 'slug' => 'Single:post', 'controller' => 'Blog']);
    
    $controller->route([ 'slug' => 'Category:news', 'controller' => 'Blog']);
    $controller->route([ 'slug' => 'Tag:all', 'controller' => 'Blog:renderTag']);
    
    $controller->route([ 'slug' => 'Single:event', 'controller' => 'Event']);
    
    $controller->routeAjax([ 'slug' => 'all', 'controller' => 'General:newsletter_signup' ]);
    $controller->routeAjax([ 'slug' => 'all', 'controller' => 'General:download_syllabus' ]);
    $controller->routeAjax([ 'slug' => 'all', 'controller' => 'General:get_upcoming_event' ]);
    //$controller->routeAjax([ 'slug' => 'apply', 'controller' => 'General:get_incoming_dates' ]);
    
    
    use \WPAS\Types\PostTypesManager;
    $namespace = '\TF\Types\\';
    
    $postTypeManager = new PostTypesManager([
        'course:'.$namespace.'CoursePostType',
        'location:'.$namespace.'LocationPostType',
        'team-member:'.$namespace.'TeamMemberPostType',
        'testimonial:'.$namespace.'TestimonialPostType',
        'event:'.$namespace.'EventPostType'
    ]);
    
    use TF\ActiveCampaign\ACAPI;
    ACAPI::start();
    
    use WPAS\GravityForm\WPASGravityForm;
    if ( class_exists( 'GFCommon' ) )
    {
        $gfManager = new WPASGravityForm([
            'submit-button-class' => true,
            'populate-current-language' => true,
            'fields' => [
                ['type' => 'button-group', 'label' => 'Button Group']
            ]
        ]);
        
    }
    
    $gfManager = new WPAS\Language\WPASLanguages([
        'languages-directory' => ABSPATH.'wp-content/themes/the-fastest/src/php/languages/'
    ]);
    
    use WPAS\Messaging\WPASAdminNotifier;
    WPASAdminNotifier::loadTransientMessages();