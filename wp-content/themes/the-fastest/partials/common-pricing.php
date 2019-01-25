<div class="container">
  <div class="row mb-4">
    <div class="col-md-6 mx-auto">
      <h2 class="text-center"><?php pll_e('Pricing & Financing'); ?></h2>
      <h4 class='text-center'>
        <?php pll_e('Prices can vary depending on the location.'); ?> <br />
        <?php pll_e('Currently revewing prices for:'); ?>
        <div class="dropdown cities dropdown-selector">
          <button class="dropdown-toggle" type="button" id="pricing-cities" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span><?php echo $args['current-location']['post_title']; ?></span>
          </button>
          <div class="dropdown-menu" aria-labelledby="pricing-cities">
            <?php foreach($args['locations'] as $l){ ?>
            <a class="dropdown-item location-option" href="<?php echo get_permalink($args['course']['ID']); ?><?php echo $l['post_name']; ?>#pricing" data-value="<?php echo $l['bc_location_slug']; ?>">
              <?php echo $l['post_title']; ?>
              <?php wpas_get_inline_svg('assets/icons/flags/inline',$l['flag'].'.svg'); ?>
            </a>
            <?php } ?>
          </div>
        </div>
      </h4>
    </div>
  </div>
  <?php if(isset($args['current-location']['prices'])){ ?>
    <div class='row pricing-component'>
    <div class='col-md-6 upfront'>
      <div class='row mb-3'>
        <div class='col-12'>
          <div class="card card-block card-primary card-inverse bg-yellow mb-3">
            <div class="card-body p-4 mb-3 mt-2">
              <h4 class="card-title text-center"><?php pll_e('Pay Up-Front'); ?></h4>
              <h3 data-concept="upfront" class="card-text text-center"><?php echo $args['current-location']['prices']['upfront'];  ?></h3>
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
              <?php if($hasFinancing){ ?>
                <h4 data-concept="monthly" class="card-text text-center price-label"><?php echo $args['current-location']['prices']['financed'][$args['current-location']['prices']['data-slider-initial-value']]['monthly'];  ?></h4>
              <?php } else { ?>
              <?php } ?>
            </div>
                <?php if($hasFinancing){ ?>
                  <div class="card-footer">
                      <input class="pricing-slider" data-slider-value="<?php echo $args['current-location']['prices']['data-slider-initial-index'];  ?>" type="text" 
                        data-location='<?php echo $args['current-location']['bc_location_slug']; ?>'
                        data-course='<?php echo $args['course']['slug']; ?>'
                        data-slider-id='pricing-slider-instance' 
                        data-slider-ticks-snap-bounds="100" 
                        data-slider-ticks='<?php echo $args['current-location']['prices']['data-slider-ticks']; ?>'
                        data-slider-ticks-labels='<?php echo $args['current-location']['prices']['data-slider-ticks-labels']; ?>'
                        ticks_positions='<?php echo $args['current-location']['prices']['ticks_positions']; ?>' />
                  </div>
                <?php } else { ?>
                  <div class="card-footer">
                    <?php pll_e('Multiple financing options, deffered tuition or even scolarships available'); ?>
                  </div>
                <?php } ?>
          </div>
        </div>
        <div class='col-12'>
          <div class='row'>
            <div class='col-12 mt-2'>
              <div class="card card-block card-primary bg-light mb-3">
            <div class="card-body">
              <?php if($hasFinancing){ ?>
              <p class="financing-details"><?php pll_e('Thanks to our partnership with Skillfund we have managed to create a new special payment plant <strong>starting at $135/mo</strong>'); ?></p>
              <?php } else { ?>
              <p class="financing-details"><?php pll_e('The best candidates will be accepted no matter their current income, please apply we will figure out your options'); ?></p>
              <?php } ?>
            </div>
          </div>
            </div>
          </div>
          <div class='row'>
            <?php if($hasFinancing){ ?>
            <div class='col-sm-6'>
                <img class="card-img-top financing-logo" data-templateurl="<?php echo get_stylesheet_directory_uri(); ?>" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/skillsfund.png">
            </div>
            <?php } ?>
            <div class='col-sm-6 mx-auto'>
                <a data-applylink="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" href="http://4geeksacademy.skills.fund" class="financing-btn btn btn-danger btn-lg"><?php pll_e('Apply to Financing'); ?></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php } else {?>
    <div class='bg-yellow card text-center p-3'>
      <p class="mb-0 mt-3"><?php pll_e('Prices cannot be published for this location, but inscriptions are be opened.'); ?></p>
      <p class="mt-0"><?php pll_e('Fill out your information to receive more information about the program.'); ?></p>
      <div class="mb-4">
        <form class="form-inline text-center more-info-signup d-inline" data-children-count="2">
          <div class="alert alert-danger" style=" width: 100%; display: none;" role="alert"></div>
          <input type="text" class="form-control mr-sm-3 mb-1 mb-sm-0" name="" placeholder="Your first name" required="" data-kwimpalastatus="alive" data-kwimpalaid="1547773331449-5">
          <input type="email" class="form-control" name="" placeholder="Your email" required="" data-kwimpalastatus="alive" data-kwimpalaid="1547773331449-6">
          <button class="btn btn-secondary form-control ml-md-3 ml-0 mt-3 mt-sm-0">Get notified</button>
        </form>
      </div>
    </div>
  </div>
  <?php } ?>
</div>
    