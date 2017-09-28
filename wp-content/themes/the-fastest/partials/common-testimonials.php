<?php if(isset($args['testimonials']) && count($args['testimonials'])>0){ ?>
<section class="bg-light text-black testimonials">
      <div class="container">
        <h2 class="text-black text-center"><?php pll_e('Over 200 students graduated so far'); ?></h2>
        <div class="row">
            <div class="col-md-12">
              <div id="testimonials-carousel" class="carousel carousel-testimonial slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <?php 
                    $count = 0;
                    foreach($args['testimonials'] as $testi){ ?>
                    <div class="carousel-item <?php if($count++==0) echo 'active'; ?>">
                        <div class="testimonial">
                            <div class="avatar">
                                <div style="background-image: url('<?php echo $testi['student_thumb']['url']; ?>');" class="rounded-circle img-fluid"></div>
                            </div>
                            <p><span class="imoon icon-quotes-left"></span> <?php echo $testi['post_content']; ?></p>
                            <h4><?php echo $testi['student_name']; ?></h4>
                            <!--
                            <h6>Founder at ET Company</h6>
                            ->
                            <?php while(!empty($testi['stars']) and $testi['stars']>0){ ?>
                            <span class="imoon icon-star-full"></span>
                            <?php $testi['stars']--; ?>
                            <?php } ?>
                        </div>
                    </div>
                    <?php } ?>
                </div>
                <!--Controls-->
                <a class="carousel-control carousel-control-prev text-black" href="#testimonials-carousel" role="button" data-slide="prev">
                  <span class="imoon icon-arrow-left2"></span>
                  <span class="sr-only"><?php pll_e('Previous'); ?></span>
                </a>
                <a class="carousel-control carousel-control-next text-black" href="#testimonials-carousel" role="button" data-slide="next">
                  <span class="imoon icon-arrow-right2"></span>
                  <span class="sr-only"><?php pll_e('Next'); ?></span>
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
    <?php } ?>