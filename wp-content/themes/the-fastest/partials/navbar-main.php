<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="<?php echo get_home_url(); ?>">
            <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo-black.png"></img>
        </a>
<?php if(!is_page('venezuela')){ ?>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
       <?php
       wp_nav_menu([
         'menu'            => 'Header Menu',
         'theme_location'  => 'header',
         'container'       => 'div',
         'container_id'    => 'navbarResponsive',
         'container_class' => 'collapse navbar-collapse',
         'menu_id'         => false,
         'menu_class'      => 'navbar-nav ml-auto',
         'depth'           => 2,
         'fallback_cb'     => 'bs4navwalker::fallback',
         'walker'          => new WPAS\Utils\BS4Navwalker()
       ]);
       ?>
<?php } ?>
    </div>
</nav>