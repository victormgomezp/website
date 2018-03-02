<?php 
/* Template Name: Partners */
get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 mx-auto">
            <h2 class="text-center"><?php pll_e('Why companies trust us, and hire our students'); ?>.</h2>
            <!-- Breathe Coding is our motto, premium and accessible coding education is our obsession. -->
            <div class="row">
            <?php foreach ($args['partners'] as $p) { if($p['partner_type']!='hiring_partner') continue; ?>
                <div class="col-6 col-xs-6 col-sm-4 col-sm-3">
                  <div class="card partner-card">
                    <img class="card-img-top" src="<?php echo $p['image']['url']; ?>" alt="Card image cap">
                  </div>
                </div>
            <?php } ?>
            </div>
            <div class="row mt-5">
              <div class="col-12 text-center">
                <button class="btn btn-danger">Become a hiring partner</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="bg-white text-black pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 mx-auto">
            <h2 class="text-center"><?php pll_e('Immersed in Miami\'s Coding Ecosystem'); ?></h2>
            <h5 class="text-center mb-5"><?php pll_e('Working together to make it the tech hub it deserves to be'); ?>.</h5>
            <div class="row">
            <?php foreach ($args['partners'] as $p) { if($p['partner_type']=='hiring_partner') continue; ?>
                <div class="col-6 col-xs-6 col-sm-3 col-sm-3">
                  <div class="card partner-card">
                    <img class="card-img-top" src="<?php echo $p['image']['url']; ?>" alt="Card image cap">
                  </div>
                </div>
            <?php } ?>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-3 text-center">
            <h3>2015</h3>
            <?php pll_e('Founded'); ?>
          </div>
          <div class="col-3 text-center">
            <h3>5</h3>
            <?php pll_e('Campuses'); ?>
          </div>
          <div class="col-3 text-center">
            <h3>250+</h3>
            <?php pll_e('Graduates'); ?>
          </div>
          <div class="col-3 text-center">
            <h3>100+</h3>
            <?php pll_e('Hiring Partners'); ?>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light text-black pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-heading text-center"><?php pll_e('Our four cornerstones'); ?></h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="card-deck">
              <div class="card bg-yellow mb-3 mb-sm-0">
                <div class="card-body">
                  <h4 class="card-title"><?php pll_e('Flipped Classroom'); ?></h4>
                  <p class="card-text"><?php pll_e('Theory is delivered through video, animation, images, and infographics. Class-time is then used to debate, build projects and mentor over practical exercises'); ?>.</p>
                </div>
              </div>
              <div class="card bg-yellow mb-3 mb-sm-0">
                <div class="card-body">
                  <h4 class="card-title"><?php pll_e('1:7 Student Ratio'); ?></h4>
                  <p class="card-text"><?php pll_e('An intimate setting provides the faculty with the opportunity to adapt to each student’s particular pace'); ?>.</p>
                </div>
              </div>
              <div class="card bg-yellow mb-3 mb-sm-0">
                <div class="card-body">
                  <h4 class="card-title"><?php pll_e('1-1 Mentorship'); ?></h4>
                  <p class="card-text"><?php pll_e('Every student has the opportunity to have regular conversations with a mentor'); ?>.</p>
                </div>
              </div>
              <div class="card bg-yellow mb-3 mb-sm-0">
                <div class="card-body">
                  <h4 class="card-title"><?php pll_e('Talent Tree'); ?></h4>
                  <p class="card-text"><?php pll_e('The syllabus maps out 44 skills, where students earn points towards each skill in a gamified fashion'); ?>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <?php get_footer(); ?>