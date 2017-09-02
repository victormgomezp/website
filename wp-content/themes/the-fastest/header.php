<?php use TF\WPASAsyncLoader; ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> </title>
        <?php wp_head(); ?>
        <?php echo WPASAsyncLoader::print_style_tag('index.css'); ?>
    </head>
    <body>
    <?php echo WPASAsyncLoader::loadCriticalCSS(); ?>
    <?php get_template_part('partials/navbar','main'); ?>