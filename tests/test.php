<?php

    require_once './vendor/autoload.php';
    require_once './tests/utils.php';
    
    use ZendDiagnostics\Check;
    use ZendDiagnostics\Runner\Runner;
    use ZendDiagnostics\Runner\Reporter\BasicConsole;

    
    $publicURL = 'https://www.4geeksacademy.com';
    // Create Runner instance
    $runner = new Runner();
    
    $runner->addCheck(checkURL($publicURL.'/apply', 'If you were referred by any current or past student use your referral code for extra credit or discounts.'));
    $runner->addCheck(checkURL($publicURL.'/home', 'Finally an affordable & premium course in Miami'));
    $runner->addCheck(checkURL($publicURL.'/the-program', 'A Premium Program designed to'));
    $runner->addCheck(checkURL($publicURL.'/pricing', 'Pick your payment plan, no extra fees or hidden costs'));
    $runner->addCheck(checkURL($publicURL.'/the-academy', 'Theory is delivered through video, animation, images, '));
    $runner->addCheck(checkURL($publicURL.'/calendar', 'to discover our available courses, workshops and events.'));
    $runner->addCheck(checkURL($publicURL.'/venezuela', 'acelerar tu carrera como programador'));
    // $runner->addCheck(checkEndpoint(
    //     'POST',
    //     $assetsURL.'/hook/sync/contact',
    //     ['email'=> getSample('user')->username]
    // )->assertSuccess());
    
    // TODO: check the website forms


    // Add console reporter
    $runner->addReporter(new BasicConsole(80, true));
    
    // Run all checks
    $results = $runner->run();

    if($results->getFailureCount() > 0) exit(1);