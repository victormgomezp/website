<?php 
/* Template Name: Pay */
    get_header('visualcomposer'); 
    $args = wpas_get_view_data();
?>
  <form action="your-server-side-code" method="POST">
    <script
      src="https://checkout.stripe.com/checkout.js" class="stripe-button"
      data-key="pk_test_KilgjBgBWwdL3I1d7aufRw2Q"
      data-amount="999"
      data-name="Demo Site"
      data-zip-code="true"
      data-description="Example charge"
      data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
      data-locale="auto">
    </script>
  </form>
<?php 
  if(isset($args['page']['script'])){
    if (filter_var($args['page']['script'], FILTER_VALIDATE_URL))
        echo '<script type="text/javascript" src="'.$args['page']['script'].'"></script>';
    else echo '<!-- inlin script --> <script type="text/javascript">'.wpas_minify_js($args['page']['script']).'</script>';
  }else echo'<!-- no script found -->';
?>
<?php get_footer(); ?>