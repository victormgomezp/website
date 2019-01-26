<?php

    require_once './vendor/autoload.php';
    require_once './hooks/utils.php';
    
    use ZendDiagnostics\Check;
    use ZendDiagnostics\Runner\Runner;
    use ZendDiagnostics\Runner\Reporter\BasicConsole;

    
    $publicURL = 'https://www.4geeksacademy.co';
    // Create Runner instance
    $runner = new Runner();
    
    $runner->addCheck(checkURL($publicURL.'/apply', 'Once you click on Apply, you will'));
    $runner->addCheck(checkURL($publicURL.'/home', 'TimeToCode'));
    $runner->addCheck(checkURL($publicURL.'/the-program', 'A Premium Program designed to'));
    //$runner->addCheck(checkURL($publicURL.'/pricing', 'Our program was specifically built to efficiently'));
    $runner->addCheck(checkURL($publicURL.'/the-academy', 'Theory is delivered through video, animation, images, '));
    $runner->addCheck(checkURL($publicURL.'/calendar', 'to discover our available courses, workshops and events.'));
    $runner->addCheck(checkURL($publicURL.'/venezuela', 'acelerar tu carrera como programador'));
    $runner->addCheck(checkURL($publicURL.'/partners', 'To assure that our students are getting hired'));

    $runner->addCheck(checkURL($publicURL.'/location/downtown-miami/', '66 W Flagler Street, #900'));
    $runner->addCheck(checkURL($publicURL.'/location/santiago-de-chile/', '66 W Flagler Street, #900'));
    $runner->addCheck(checkURL($publicURL.'/location/los-cortijos-caracas-venezuela-en/', '66 W Flagler Street, #900'));
    $runner->addCheck(checkURL($publicURL.'/es/location/miami-downtown-usa/', '66 W Flagler Street, #900'));
    $runner->addCheck(checkURL($publicURL.'/es/location/santiago-de-chile-es/', '66 W Flagler Street, #900'));
    $runner->addCheck(checkURL($publicURL.'/es/location/maracaibo-venezuela/', '66 W Flagler Street, #900'));
    $runner->addCheck(checkURL($publicURL.'/es/location/los-cortijos-caracas-venezuela/', '66 W Flagler Street, #900'));

    $runner->addCheck(checkURL($publicURL.'/course/bootcamp-de-desarrollo-web-full-stack-part-time/', 'Un programa premium diseñado para'));
    $runner->addCheck(checkURL($publicURL.'/course/full-stack-web-development-bootcamp-full-time/', '9 weeks to launch your'));
    $runner->addCheck(checkURL($publicURL.'/course/full-stack-development/', 'A Premium Program designed'));
    $runner->addCheck(checkURL($publicURL.'/course/desarrollo-web/', 'websites faster than anyone'));
    $runner->addCheck(checkURL($publicURL.'/course/web-development/', 'websites faster than anyone'));
    $runner->addCheck(checkURL($publicURL.'/course/coding-introduction/', '4Geeks Academy students receive a lot of benefits'));
    
    // TODO: check the website forms


    // Add console reporter
    $runner->addReporter(new BasicConsole(80, true));
    
    // Run all checks
    $results = $runner->run();

    if($results->getFailureCount() > 0) exit(1);