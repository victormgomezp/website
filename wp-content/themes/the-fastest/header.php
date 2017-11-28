<!DOCTYPE html>
<html lang="en">
    <head>
        <?php get_template_part('partials/script','tagmanager'); ?>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php echo wp_title(); ?></title>
        <?php wp_head(); ?>
        <?php wpas_head(); ?>
    </head>
    <body <?php echo body_class([str_replace('.php','',get_page_template_slug())]); ?>>
    <?php get_template_part('partials/script','tagmanagerbody'); ?>
    <div id="bg-sketch"></div>
    <?php wpas_critical_head(); ?>
    <?php get_template_part('partials/navbar','main'); ?>