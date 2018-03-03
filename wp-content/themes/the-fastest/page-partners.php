<?php 
/* Template Name: Partners */
get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead text-white">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 mx-auto text-center">
            <h2><?php pll_e('Companies trust us and hire our students'); ?>.</h2>
            <blockquote>
              <h4 class="mb-3">"I'm impressed with the level of understanding 4Geek's students have, my hiring ended up being a team leader"</h4>
              <h5 class="mb-3">CuevaSocial Marketing Agency</h5>
            </blockquote>
            <!-- Breathe Coding is our motto, premium and accessible coding education is our obsession. -->
            <div class="row mt-5">
              <div class="col-12 text-center">
                <button class="btn btn-danger btn-lg">Become a hiring partner</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="bg-yellow text-black pt-5 pb-5">
      <div class="container">
        <div class="row text-center">
          <div class="col-2 ml-auto stat">
            <h5><?php pll_e('Employers'); ?></h5>
            <h3>290</h3>
          </div>
          <div class="col-2 stat">
            <h5><?php pll_e('Graduates'); ?></h5>
            <h3>312</h3>
          </div>
          <div class="col-2 stat">
            <h5><?php pll_e('Hiring Rate'); ?></h5>
            <h3>90%</h3>
          </div>
          <div class="col-2 stat mr-auto">
            <h5><?php pll_e('Hiring Period'); ?></h5>
            <h3>60 <small>days</small></h3>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black pt-5 pb-5">
      <div class="container">
        <div class="row text-center">
          <div class="col-sm-10 mx-auto">
            <h2><?php pll_e('Some of our partners and employers'); ?></h2>
            <h5>To assure students get hired, we work closely with our hiring partners and industry leaders refreshing and optimizing the program and syllabus.</h5>
            <div class="row">
            <?php foreach ($args['h-partners'] as $p) { if($p['partner_type']!='hiring_partner') continue; ?>
                <div class="col-6 col-xs-6 col-sm-3">
                  <div class="card partner-card" data-toggle="tooltip" data-placement="top" title="<?php echo $p['post_title']; ?>">
                    <img class="card-img-top" src="<?php echo $p['image']['url']; ?>">
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
          <div class="col-sm-10 mx-auto">
            <h2 class="text-center"><?php pll_e('Immersed in Miami\'s Coding Ecosystem'); ?></h2>
            <h5 class="text-center mb-5"><?php pll_e('Working together to make it the tech hub it deserves to be'); ?>.</h5>
            <div class="row">
            <?php foreach ($args['o-partners'] as $p) { if($p['partner_type']=='hiring_partner') continue; ?>
                <div class="col-6 col-xs-6 col-sm-3">
                  <div class="card partner-card" data-toggle="tooltip" data-placement="top" title="<?php echo $p['post_title']; ?>">
                    <img class="card-img-top" src="<?php echo $p['image']['url']; ?>">
                  </div>
                </div>
            <?php } ?>
            </div>
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