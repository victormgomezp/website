<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="icon" href="assets/img/favicon.ico">
        <title><?php wp_title(); ?></title>
        <!--
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
        -->
    </head>
    <body>
    <?php do_action('wpas_print_critical_styles'); ?>
    <?php get_template_part('partials/blog-navbar','main'); ?>