<?php

$result = [];
$slugs = ['full-stack-ft', 'full-stack', 'web-development'];
foreach($slugs as $s) $result[$s] = include 'prices.'.$s.'.php';
return $result;