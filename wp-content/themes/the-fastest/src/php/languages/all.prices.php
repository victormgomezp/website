<?php

$result = [];
$slugs = ['full-stack-full-time', 'full-stack', 'web-development'];
foreach($slugs as $s) $result[$s] = include 'prices.'.$s.'.php';
return $result;