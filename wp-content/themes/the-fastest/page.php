<?php 
    /* Template Name: Visual Composer Ready */
    /* Template Post Type: landing, page */
    get_header('visualcomposer'); 
    $args = wpas_get_view_data();
?>
  <?php echo do_shortcode($args['wp_query']->post_content); ?>
  <?php //global $wp_scripts; var_dump($wp_scripts); ?>
  <?php echo (isset($args['page']['script'])) ? '<script type="text/javascript">'.wpas_minify_js($args['page']['script']).'</script>' : '<!-- no script found -->'; ?>
<?php get_footer(); ?>