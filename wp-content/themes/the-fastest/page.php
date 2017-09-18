<?php 
    get_header(); 
    $args = wpas_get_view_data();
?>
  <?php echo do_shortcode($args['wp_query']->post_content); ?>
  
<?php get_footer(); ?>