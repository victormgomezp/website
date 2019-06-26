<?php

    if(!defined('ABSPATH')) define('ABSPATH', dirname(__FILE__) . '/');
    if(!defined('PUBLICPATH')) define('PUBLICPATH', get_site_url() . '/wp-content/themes/the-fastest/public/');
    require ABSPATH . 'vendor/autoload.php';

    if(!file_exists(ABSPATH.'wp-content/themes/the-fastest/public/')) throw new Exception('There is no public folder in '.ABSPATH.'wp-content/themes/the-fastest/, $ npm run build');

    use TF\ThemeManager;
    $themeManager = new ThemeManager();

    use TF\ThemeAdminSettings;
    $settings = new ThemeAdminSettings();

    use WPAS\Performance\WPASAsyncLoader;
    $publicPath = get_stylesheet_directory_uri();
    //print_r($publicPath); die();
    $asyncLoader = new WPASAsyncLoader([
        //'manifest-url' => $publicPath.'/public/manifest.json',
        'public-url' => $publicPath.'/public/',
        'debug' => !WP_ASYNC_LOADING,
        'force-jquery' => true,
        'minify-html' => UGLIFY_HTML,
        'styles' => [
            "page" => [
                "template:page-landing-maker1.php" => 'landing.css',
                "all" => 'index.css'
            ],
            "custom-post" => [
                "template:page-landing-vc.php" => 'landing.css',
                "all" => 'index.css'
            ],
            "404" => ["all" => 'index.css']
        ],
        'critical-styles' => [
            "page" =>           ["blog" => 'blog.css', "all" => 'above.css'],
            "404" =>           ["all" => 'above.css'],
            "custom-post" =>    ["all" => 'above.css'],
            "post" =>           ['all' => 'blog.css'],
            "category" =>       ['all' => 'blog.css'],
            "tag" =>            ['all' => 'blog.css']
            ],
        'scripts' => [
            "page" => [
                "all" => ['vendor.js','index.js']
                ],
            "404" => [
                "all" => ['vendor.js','index.js']
                ],
            "custom-post" => [
                "template:page-landing-vc.php" => ['vendor.js','landing.js'],
                'all' => ['vendor.js','index.js']
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

    $controller->route([ 'slug' => 'Template:page-landing-maker1.php', 'controller' => 'Landing:renderLanding']);
    $controller->route([ 'slug' => 'Template:page-landing-vc.php', 'controller' => 'Landing:renderLanding']);
    $controller->route([ 'slug' => 'Template:page-default.php', 'controller' => 'Landing:renderLanding']);
    $controller->route([ 'slug' => 'Single:landing', 'controller' => 'Landing:renderLanding']);

    $controller->route([ 'slug' => 'single:job', 'controller' => 'General:renderSingleJob']);
    $controller->route([ 'slug' => 'jobs', 'controller' => 'General:renderJobs']);
    $controller->route([ 'slug' => 'trabaja', 'controller' => 'General:renderJobs']);

    $controller->route([ 'slug' => 'blog:blog', 'controller' => 'Blog']);
    $controller->route([ 'slug' => 'blog:blog-en-espanol', 'controller' => 'Blog']);

    $controller->route([ 'slug' => 'the-academy', 'controller' => 'General']);
    $controller->route([ 'slug' => 'academia', 'controller' => 'General:renderTheAcademy']);

    $controller->route([ 'slug' => 'apply', 'controller' => 'General']);
    $controller->route([ 'slug' => 'aplica', 'controller' => 'General:renderApply']);

    $controller->route([ 'slug' => 'the-program', 'controller' => 'General']);
    $controller->route([ 'slug' => 'programa', 'controller' => 'General:renderTheProgram']);

    $controller->route([ 'slug' => 'Single:course', 'controller' => 'General:renderTheProgram']);

    $controller->route([ 'slug' => 'venezuela', 'controller' => 'General:renderTheProgram']);

    $controller->route([ 'slug' => 'partners', 'controller' => 'General:renderPartners']);
    $controller->route([ 'slug' => 'aliados', 'controller' => 'General:renderPartners']);

    $controller->route([ 'slug' => 'Course', 'controller' => 'Course']);

    $controller->route([ 'slug' => 'calendar', 'controller' => 'Calendar']);
    $controller->route([ 'slug' => 'calendario', 'controller' => 'Calendar:renderCalendar']);

    $controller->route([ 'slug' => 'pricing', 'controller' => 'General']);
    $controller->route([ 'slug' => 'precio', 'controller' => 'General:renderPricing']);


    $controller->route([ 'slug' => 'Single:post', 'controller' => 'Blog']);

    $controller->route([ 'slug' => 'Category:news', 'controller' => 'Blog']);
    $controller->route([ 'slug' => 'Tag:all', 'controller' => 'Blog:renderTag']);

    $controller->route([ 'slug' => 'Single:event', 'controller' => 'Event']);

    $controller->route([ 'slug' => 'Single:location', 'controller' => 'General:renderLocation']);

    $controller->route([ 'slug' => 'home', 'controller' => 'General']);
    $controller->route([ 'slug' => 'inicio', 'controller' => 'General:renderHome']);

    $controller->route([ 'slug' => 'Template:page.php', 'controller' => 'Landing:renderLanding']);

    $controller->routeAjax([ 'slug' => 'all', 'controller' => 'General:newsletter_signup', 'scope' => 'public' ]);
    $controller->routeAjax([ 'slug' => 'all', 'controller' => 'General:download_syllabus', 'scope' => 'public' ]);
    $controller->routeAjax([ 'slug' => 'all', 'controller' => 'General:get_upcoming_event', 'scope' => 'public' ]);
    $controller->routeAjax([ 'slug' => 'apply', 'controller' => 'General:get_incoming_dates' ]);

    use \WPAS\Controller\WPASAPIController;
    $api = new WPASAPIController([
        'namespace' => 'TF\\Controller\\',
        'application_name' => '4g',
        'version' => 1,
        'allow-origin' => '*'
    ]);

    $api->get(['path' => '/events', 'controller' => 'APIController:getAllEvents']);
    $api->get(['path' => '/prices', 'controller' => 'APIController:getPrices']);
    $api->get(['path' => '/locations', 'controller' => 'APIController:getAllLocations']);
    $api->get(['path' => '/courses', 'controller' => 'APIController:getAllCourses']);
    $api->get(['path' => '/hook/sync_events', 'controller' => 'APIController:syncEvents']);
    $api->get(['path' => '/hook/sync_cohorts', 'controller' => 'APIController:syncCohorts']);
    $api->get(['path' => '/hook/sync_profiles', 'controller' => 'APIController:syncProfiles']);
    $api->post(['path' => '/apply/request_info', 'controller' => 'APIController:requestMoreInfo']);
    $api->post(['path' => '/apply/request_tour', 'controller' => 'APIController:requestTour']);


    use \WPAS\Types\PostTypesManager;

    $postTypeManager = new PostTypesManager([
        'namespace'=>'\TF\Types\\'
        ]);
    $postTypeManager->newType(['type'=>'course', 'class' => 'CoursePostType'])->register();
    $postTypeManager->newType(['type'=>'location', 'class' => 'LocationPostType'])->register();
    $postTypeManager->newType(['type'=>'team-member', 'class' => 'TeamMemberPostType'])->register();
    $postTypeManager->newType(['type'=>'testimonial', 'class' => 'TestimonialPostType'])->register();
    $postTypeManager->newType(['type'=>'job', 'class' => 'JobPostType'])->register();
//    $postTypeManager->newType(['type'=>'event', 'class' => 'EventPostType'])->register();
    $postTypeManager->newType(['type'=>'landing', 'class' => 'LandingPostType'])->register();
    $postTypeManager->newType(['type'=>'partner', 'class' => 'PartnerPostType'])->register();

    use TF\ActiveCampaign\ACAPI;
    ACAPI::start();

    use WPAS\GravityForm\WPASGravityForm;
    if ( class_exists( 'GFCommon' ) )
    {
        $gfManager = new WPASGravityForm([
            'submit-button-class' => true,
            'populate-current-language' => true,
            'populate-adwords-gclid' => true,
            'fields' => [
                ['type' => 'button-group', 'label' => 'Button Group'],
                ['type' => 'alert-message', 'label' => 'Alert Message']
            ]
        ]);

    }

    use WPAS\Language\WPASLanguages;
    if ( class_exists( 'WPASLanguages' ) )
    {
        $gfManager = new WPASLanguages([
            'languages-directory' => ABSPATH.'wp-content/themes/the-fastest/src/php/languages/'
        ]);
    }

    $vcSettings = new TF\VCSettings();

    use WPAS\Messaging\WPASAdminNotifier;
    WPASAdminNotifier::loadTransientMessages();
