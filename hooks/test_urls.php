<?php

    require_once './vendor/autoload.php';
    require_once './hooks/utils.php';
    
    use ZendDiagnostics\Check;
    use ZendDiagnostics\Runner\Runner;
    use ZendDiagnostics\Runner\Reporter\BasicConsole;

    
    $publicURL = 'https://www.4geeksacademy.com';
    // Create Runner instance
    $runner = new Runner();
    
    $runner->addCheck(checkURL($publicURL.'/apply', 'Once you click on Apply, you will'));
    $runner->addCheck(checkURL($publicURL.'/home', 'Breathe Coding'));
    $runner->addCheck(checkURL($publicURL.'/the-program', 'A Premium Program designed to'));
    $runner->addCheck(checkURL($publicURL.'/pricing', 'Our program was specifically built to efficiently'));
    $runner->addCheck(checkURL($publicURL.'/the-academy', 'Theory is delivered through video, animation, images, '));
    $runner->addCheck(checkURL($publicURL.'/calendar', 'to discover our available courses, workshops and events.'));
    $runner->addCheck(checkURL($publicURL.'/venezuela', 'acelerar tu carrera como programador'));
    $runner->addCheck(checkURL($publicURL.'/partners', 'To assure students get hired, we work closely with our hiring partners and industry leaders refreshing and optimizing the program and syllabus'));

    $runner->addCheck(checkURL($publicURL.'/location/downtown-miami/', 'Starthub. 66 W Flaggle, #900. 33130, Miami, Florida.'));
    $runner->addCheck(checkURL($publicURL.'/es/location/maracaibo-venezuela/', 'Av. 5 de julio. Maracaibo, Venezuela.'));
    $runner->addCheck(checkURL($publicURL.'/es/location/el-nacional-caracas-venezuela/', 'Sede Principal de El Nacional. Los Cortijos de Lourdes, Caracas.'));
    $runner->addCheck(checkURL($publicURL.'/es/location/impact-hub-caracas/', 'Av. Francisco de Miranda, Torre HP, piso 17'));
    
    $runner->addCheck(checkURL($publicURL.'/course/full-stack-development/', 'A Premium Program designed'));
    $runner->addCheck(checkURL($publicURL.'/course/web-development/', 'websites faster than anyone'));
    //$runner->addCheck(checkURL($publicURL.'/course/coding-introduction/', 'acelerar tu carrera como programador'));
    
    // TODO: check the website forms


    // Add console reporter
    $runner->addReporter(new BasicConsole(80, true));
    
    // Run all checks
    $results = $runner->run();

    if($results->getFailureCount() > 0) exit(1);