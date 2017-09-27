<!DOCTYPE html>
<html lang="en">
    <head>
        <?php get_template_part('partials/script','tagmanager'); ?>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="icon" href="assets/img/favicon.ico">
        <title><?php wp_title(); ?></title>

        <?php wp_head(); ?>
        <?php wpas_head(); ?>
        <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
    </head>
    <body>
    <?php get_template_part('partials/script','tagmanagerbody'); ?>
    <?php wpas_critical_head(); ?>
    <?php get_template_part('partials/blog-navbar','main'); ?>