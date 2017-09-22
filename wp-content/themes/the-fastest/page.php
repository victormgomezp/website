<?php 
    /* Template Name: Visual Composer Ready */
    get_header('visualcomposer'); 
    $args = wpas_get_view_data();
?>
  <?php echo do_shortcode($args['wp_query']->post_content); ?>
  <?php //global $wp_scripts; var_dump($wp_scripts); ?>
<?php get_footer(); ?>