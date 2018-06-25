<?php 
/* Template Name: Pricing */
get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="container mb-5">
        <div class="row text-white">
          <div class="col-md-10 mx-auto">
            <h1 class="text-center text-white"><?php pll_e('Celebrate the <span class="underline">best price in town</span>!'); ?></h1>
            <h4 class="text-center text-white"><?php pll_e('We never stopped trying until we mastered a real premium but affordable program. Our philosophy is rooted in making coding education available to EVERYONE'); ?>.</h4>
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
              <text x="180" y="65" fill="white"><?php pll_e('Quality'); ?></text>
              <text x="40" y="65" fill="white"><?php pll_e('Price'); ?></text>
              <text x="110" y="185" fill="white"><?php pll_e('Placement'); ?></text>
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
            <h4 class='text-center'><?php pll_e('Pick your payment plan, no extra fees or hidden costs, everything is included'); ?></h4>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-6 upfront'>
            <div class='row mb-3'>
              <div class='col-12'>
                <div class="card card-block card-primary card-inverse bg-yellow mb-3">
                  <div class="card-body p-4 mb-3 mt-2">
                    <h4 class="card-title text-center"><?php pll_e('Pay Up-Front'); ?></h4>
                    <h3 class="card-text text-center">$6,000</h3>
                  </div>
                </div>
              </div>
              <div class='col-12 d-none d-md-block'>
                <div class='row mb-3'>
                  <div class='col-sm-12'>
                    <div class="card card-block card-primary bg-light mb-3">
                      <div class="card-body text-center">
                        <p><?php pll_e('Enjoy the best price in town'); echo '<br />'; pll_e('Pay up-front now with no extra or hidden fees'); ?></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-sm-12 text-center'>
                  <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class="btn btn-danger btn-lg"><?php pll_e('Apply to 4Geeks Academy'); ?></a>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-6 text-center'>
            <div class='row'>
              <div class='col-12'>
                <div class="card card-block card-primary card-inverse bg-yellow payment-plan">
                  <div class="card-body">
                    <h5 class="card-title m-0 text-center"><?php pll_e('Or Extended Payment Plan'); ?></h5>
                    <h4 id="price-label" class="card-text text-center">$135 / month (No deposit)</h4>
                  </div>
                  <div class="card-footer">
                    <input id="pricing-slider" data-slider-value="4" data-slider-id='pricing-slider-instance' data-slider-ticks-snap-bounds="100" type="text" data-slider-ticks="[0, 1, 2, 3, 4]" data-slider-ticks-labels='["6 months", "12 mo.", "24 mo.", "36 mo.", "60 mo."]' ticks_positions="[0, 25, 50, 75, 100]" />
                  </div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row'>
                  <div class='col-12 mt-2'>
                    <div class="card card-block card-primary bg-light mb-3">
                  <div class="card-body">
                    <p id="financing-details"><?php pll_e('Thanks to our partnership with Skillfund we have managed to create a new special payment plant <strong>starting at $135/mo</strong>'); ?></p>
                  </div>
                </div>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-sm-6'>
                      <img id="financing-logo" class="card-img-top" data-templateurl="<?php echo get_stylesheet_directory_uri(); ?>" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/skillsfund.png">
                  </div>
                  <div class='col-sm-6'>
                      <a id="financing-btn" data-applylink="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" href="http://4geeksacademy.skills.fund" class="btn btn-danger btn-lg"><?php pll_e('Apply to Financing'); ?></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light text-black pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 mx-auto text-center">
            <h4><?php pll_e('Any questions on the financing or extended payment?'); ?></h4> 
            <h5><a id="financing_guide_download" href='<?php echo content_url(); ?>/uploads/2017/10/4GA-Payment-Guidebook.pdf'><?php pll_e('Click here to review our Payment Guidebook'); ?>.</a></h5>
          </div>
        </div>
      </div>
    </section>
  <?php get_footer(); ?>