<?php get_header(); ?>
  <h1 class='text-center text-white p-5'><?php pll_e('Woops! Page not found'); ?></h1>
  <section class='bg-white'>
      <div class="container">
          <div class="row">
              <div class="col-12 text-center p-4">
                  <h3><?php pll_e('It seems we could not found the page that you have requested'); ?></h3>
                  <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('home') ) ); ?>" class="btn btn-warning text-white">Go to our website</a>
                  <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('blog') ) ); ?>" class="btn btn-primary text-white">Go to our blog</a>
              </div>
          </div>
      </div>
  </section>
<?php get_footer(); ?>