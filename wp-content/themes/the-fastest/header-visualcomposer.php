<?php $args = wpas_get_view_data(); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <?php get_template_part('partials/script','tagmanager'); ?>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php echo wp_title(); ?></title>
        <?php wp_head(); ?>
        <?php wpas_head(); ?>
    </head>
    <body <?php echo body_class('vc-composer-page'); ?> <?php echo (isset($args['styles'])) ? $args['styles'] : ""; ?>>
    <?php get_template_part('partials/script','tagmanagerbody'); ?>
    <div id="bg-sketch"></div>
    <?php wpas_critical_head(); ?>
    <?php get_template_part('partials/navbar','main'); ?>