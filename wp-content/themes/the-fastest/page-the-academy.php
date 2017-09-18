<?php get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 mr-auto">
            <h2 class="text-white">Enabling future and current software builders to adapt to the needs of the real world.</h2>
            <!-- Breathe Coding is our motto, premium and accessible coding education is our obsession. -->
          </div>
        </div>
      </div>
    </header>
    <section class="bg-white text-black">
      <div class="container">
        <div class="row">
          <div class="col-3 text-center">
            <h3>2015</h3>
            Founded
          </div>
          <div class="col-3 text-center">
            <h3>5</h3>
            Campuses
          </div>
          <div class="col-3 text-center">
            <h3>250+</h3>
            Graduates
          </div>
          <div class="col-3 text-center">
            <h3>100+</h3>
            Hiring Partners
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light text-black">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-heading text-center">Our four cornerstones</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="card-deck">
              <div class="card bg-yellow mb-3 mb-sm-0">
                <div class="card-body">
                  <h4 class="card-title">Flipped Classroom</h4>
                  <p class="card-text">Theory is delivered through video, animation, images, and infographics. Class-time is then used to debate, build projects and mentor over practical exercises.</p>
                </div>
              </div>
              <div class="card bg-yellow mb-3 mb-sm-0">
                <div class="card-body">
                  <h4 class="card-title">1:7 Student Ratio</h4>
                  <p class="card-text">An intimate setting provides the faculty with the opportunity to adapt to each student’s particular pace.</p>
                </div>
              </div>
              <div class="card bg-yellow mb-3 mb-sm-0">
                <div class="card-body">
                  <h4 class="card-title">1-1 Mentorship</h4>
                  <p class="card-text">Every student has the opportunity to have regular conversations with a mentor.</p>
                </div>
              </div>
              <div class="card bg-yellow mb-3 mb-sm-0">
                <div class="card-body">
                  <h4 class="card-title">Talent Tree</h4>
                  <p class="card-text">The syllabus maps out 44 skills, where students earn points towards each skill in a gamified fashion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black text-left instructors">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ml-auto">
            <h2 class="section-heading text-black mb-3">Receive training from Senior-only instructors</h2>
            <p>
              Our team is devoted to deliver a premium program. In order to be part of our team, everybody needs to feel the passion for education, coding and helping students develop their skills. At 4Geeks Academy we believe in the power of education and the importance of coding.
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
    <section class="bg-light text-black pb-0 founders">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xl-6">
            <div class='founders-img' style="width: 100%; background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/img/founders.png');"></div>
          </div>
          <div class="col-md-8 col-xl-6">
            <h3 class='text-left pl-3 mt-0 mb-3'>Our story...</h3>
            <p class="section-message pt-0 mb-0">
              4Geeks Academy was founded in 2015. What started as an internal project to train more developers has now become our full-time passion.<br/><br/>
              4Geeks is today a USA based Coding Bootcamp pursuing to build a new framework for Coding Education, because coding is becoming an essential part of our society. <br/><br/>
              4Geeks Academy has now Locations in 3 cities, 5 on-going campuses, and more than 200 graduates.
              <button class='btn btn-danger mt-3'>Learn more about 4Geeks Academy</button>
            </p>
          </div>
        </div>
      </div>
    </section>
    <?php include(locate_template('partials/common-parttime.php')); ?>
    <?php include(locate_template('partials/common-testimonials.php')); ?>
  <?php get_footer(); ?>