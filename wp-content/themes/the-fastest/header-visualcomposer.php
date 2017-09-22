<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PGGRR6');</script>
        <!-- End Google Tag Manager -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php echo wp_title(); ?></title>
        <?php wp_head(); ?>
        <?php wpas_head(); ?>
    </head>
    <?php $backgroundColor = get_field('body_background_color',get_the_ID()); ?>
    <body <?php echo body_class(); ?> <?php if($backgroundColor) echo 'style="background-color: '.$backgroundColor.'"'; ?>>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PGGRR6"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="bg-sketch"></div>
    <?php wpas_critical_head(); ?>
    <?php get_template_part('partials/navbar','main'); ?>