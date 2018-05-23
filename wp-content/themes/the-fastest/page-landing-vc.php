<?php 
/* Template Name: Visual Composer */
/* Template Post Type: landing, page */
    get_header('visualcomposer'); 
    $args = wpas_get_view_data();
?>
<nav class="call-to-action-nav navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <a class="navbar-brand" href="<?php echo get_home_url(); ?>"><img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo-white.png"></img></a>
    <ul class="navbar-nav ml-auto d-none d-sm-inline-block">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About The Academy 
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <?php
               wp_nav_menu([
                 'menu'            => 'Landing Visual Composer',
                 'theme_location'  => 'landing-vc',
                 'container'       => false,
                 'menu_id'         => false,
                 'menu_class'      => false,
                 'depth'           => 1,
                 'fallback_cb'     => 'bs4navwalker::fallback',
                 'walker'          => new WPAS\Utils\BS4Navwalker()
               ]);
               ?>
            </div>
        </li>
    </ul>
    <form class="form-inline">
        <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class="btn btn-danger">Apply Now</a>
    </form>
</nav>
  <?php echo do_shortcode($args['wp_query']->post_content); ?>
  <?php //global $wp_scripts; var_dump($wp_scripts); ?>
<?php 
  if(isset($args['page']['script'])){
    if (filter_var($args['page']['script'], FILTER_VALIDATE_URL))
        echo '<script type="text/javascript" src="'.$args['page']['script'].'"></script>';
    else echo '<!-- inlin script --> <script type="text/javascript">'.wpas_minify_js($args['page']['script']).'</script>';
  }else echo'<!-- no script found -->';
?>
<?php get_footer(); ?>