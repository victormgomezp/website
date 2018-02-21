<?php 
/* Template Name: The Academy */
get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 mr-auto">
            <h2 class="text-white"><?php pll_e('Enabling future and current software builders to adapt to the needs of the real world'); ?>.</h2>
            <!-- Breathe Coding is our motto, premium and accessible coding education is our obsession. -->
          </div>
        </div>
      </div>
    </header>
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
    <section class="bg-white text-black text-left instructors pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ml-auto">
            <h2 class="section-heading text-black mb-3"><?php pll_e('The Team'); ?></h2>
            <p>
              <?php pll_e('Our team is devoted to deliver a premium program. In order to be part of our team, everybody needs to feel the passion for education, coding and helping students develop their skills. At 4Geeks Academy we believe in the power of education and the importance of coding'); ?>.
            </p>
          </div>
        </div>
        <div class="row">
          <?php foreach($args['members'] as $memb){ ?>
          <div class='col-sm-4 col-md-3'>
            <div class="card">
              <div class="card-img-top" style="background-image: url('<?php echo $memb['teacher_thumb']['url'];  ?>'); height: 200px; width: 100%; display: block;"></div>
              <div class="card-body">
                <h4 class="card-title"><?php echo $memb['full_name'];  ?></h4>
                <p class="card-text"><?php echo $memb['post_content'];  ?></p>
              </div>
            </div>
          </div>
          <?php } ?>
        </div>
      </div>
    </section>
    <section class="bg-light text-black pb-0 founders pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xl-6">
            <div class='founders-img' style="width: 100%; background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/img/founders.png');"></div>
          </div>
          <div class="col-md-8 col-xl-6">
            <h3 class='text-left pl-3 mt-0 mb-3'><?php pll_e('Our story...'); ?></h3>
            <p class="section-message pt-0 mb-0">
              <?php the_content(); ?>
              <a target="_blank" href="https://4geeksacademy.co/en/4geeks-academy-history/" class='btn btn-danger mt-3'><?php pll_e('Learn more about 4Geeks Academy'); ?></a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <?php include(locate_template('partials/common-parttime.php')); ?>
    <?php include(locate_template('partials/common-testimonials.php')); ?>
  <?php get_footer(); ?>