<?php 
/* Template Name: Pricing */
get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="container mb-5">
        <div class="row text-white">
          <div class="col-md-10 mx-auto">
            <h1 class="text-center text-white">Celebrate the <span class="underline">best price in town</span></h1>
            <h4 class="text-center text-white">We didn't stop trying until we have mastered a real premium and affordable program.</h4>
          </div>
        </div>
      </div>
    </header>
    <section class="bg-white text-black pt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-5 col-lg-3 mx-auto order-2 order-md-1">
            <svg width="270" height="240" class="mt-0">
              <circle cx="80" cy="80" r="80" style="fill:red" opacity="0.9" />
              <circle cx="145" cy="160" r="80" style="fill:cornflowerblue" opacity="0.9" />
              <circle cx="190" cy="80" r="80" style="fill:olivedrab" opacity="0.9" />
              <text x="180" y="65" fill="white"><?php pll_e(''); ?>Quality</text>
              <text x="40" y="65" fill="white"><?php pll_e(''); ?>Price</text>
              <text x="110" y="185" fill="white"><?php pll_e(''); ?>Placement</text>
            </svg>
          </div>
          <div class="col-md-7 mr-auto order-1 order-md-2 pt-2">
            <h4 class='section-message pb-1 text-center mt-5'>
              <?php pll_e('Using technology and building -from the ground up- our entire program we have managed to deliver a more affordable program'); ?>
            </h4>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black pt-md-5 pb-5">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-6 mx-auto">
            <h4 class='text-center'><?php pll_e('Pick your payment plan, no extra fees or hidden costs, everything is included:'); ?></h4>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-6 ml-auto upfront'>
            <div class="card card-block card-primary card-inverse bg-yellow mb-3">
              <div class="card-body">
                <h5 class="card-title m-0 text-center"><?php pll_e('Upfront'); ?></h5>
                <h4 class="card-text text-center">$6,000</h4>
              </div>
              <div class="card-footer">
                <h5 class='text-center mb-3'>
                  <?php pll_e('Yes, we know... The best price in town'); ?>.
                </h5>
              </div>
            </div>
          </div>
          <div class='col-md-6 mr-auto'>
            <div class="card card-block card-primary card-inverse bg-yellow payment-plan">
              <div class="card-body">
                <h5 class="card-title m-0 text-center"><?php pll_e('Or Extended Payment Plan'); ?></h5>
                <h4 id="price-label" class="card-text text-center">$1000 deposit + $240 / month</h4>
              </div>
              <div class="card-footer">
                <input id="pricing-slider" data-slider-value="3" data-slider-id='pricing-slider-instance' data-slider-ticks-snap-bounds="100" type="text" data-slider-ticks="[0, 1, 3]" data-slider-ticks-labels='["6 months", "12 Months", "24 Months"]' ticks_positions="[0, 25, 100]" />
              </div>
            </div>
          </div>
        </div>
        <!--
        <div class='row'>
          <div class='col-md-12 mx-auto text-center mt-4 mb-4'>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/pricing.png" />
          </div>
        </div>
        -->
        <div class='row'>
          <div class='col-md-8'>
            <div class="card card-block card-primary bg-light mb-3">
              <div class="card-body">
                <h5>Thanks to our partnership with Skillfund we have managed to create a new special payment plant <span class="text-warning">starting at $135/mo</span></h5>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div class="card card-block bg-light mb-3 p-2 text-center" style="height: 95px;">
                <img style="max-width: 180px; margin-left: auto; margin-right: auto;" class="card-img-top mt-4" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/skillsfund.png">
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-12 mx-auto text-center mt-4 mb-4'>
            <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class="btn btn-danger btn-lg"><?php pll_e('Apply to the program'); ?></a>
          </div>
        </div>
      </div>
    </section>
  <?php get_footer(); ?>