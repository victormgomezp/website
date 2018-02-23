<?php 
    /* Template Name: Visual Composer Ready */
    /* Template Post Type: landing, page */
    get_header('visualcomposer'); 
    $args = wpas_get_view_data();
?>
  <?php echo do_shortcode($args['wp_query']->post_content); ?>
  <?php //global $wp_scripts; var_dump($wp_scripts); ?>
  <?php echo (isset($args['page']['script'])) ? '<script type="text/javascript" src="'.$args['page']['script'].'"></script>' : ''; ?>
<?php get_footer(); ?>