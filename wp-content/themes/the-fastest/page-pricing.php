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
    <section class="pricing-calculator bg-white text-black pt-md-5 pb-5">
      <?php include(locate_template('partials/common-pricing.php')); ?>
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