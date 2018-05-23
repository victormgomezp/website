<?php 
    get_header('visualcomposer'); 
    $args = wpas_get_view_data();
?>
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