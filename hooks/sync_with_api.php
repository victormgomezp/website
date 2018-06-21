<?php

    require_once './vendor/autoload.php';
    require_once './tests/utils.php';
    
    use ZendDiagnostics\Check;
    use ZendDiagnostics\Runner\Runner;
    use ZendDiagnostics\Runner\Reporter\BasicConsole;

    
    $publicURL = 'https://www.4geeksacademy.com';
    // Create Runner instance
    $runner = new Runner();
    
    $runner->addCheck(checkURL($publicURL.'/wp-json/4g/v1/hook/sync_events', '"status":"ok","code":200'));
    $runner->addCheck(checkURL($publicURL.'/wp-json/4g/v1/hook/sync_cohorts', '"status":"ok","code":200'));
    //$runner->addCheck(checkURL($publicURL.'/course/coding-introduction/', 'acelerar tu carrera como programador'));
    
    // TODO: check the website forms


    // Add console reporter
    $runner->addReporter(new BasicConsole(80, true));
    
    // Run all checks
    $results = $runner->run();

    if($results->getFailureCount() > 0) exit(1);