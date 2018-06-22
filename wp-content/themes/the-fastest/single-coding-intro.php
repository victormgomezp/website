<?php
/*
Template Name: Coding Introduction
Template Post Type: course
*/
get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="header-content">
        <div class="row heading-row">
          <div class="col-sm-10 mx-auto text-center text-white">
            <h1 class="underline"><?php pll_e('Coding Introduction Course'); ?></h1>
            <h3>From nothing to real coding in just 2 weeks</h3>
            <div class="mt-3 mt-sm-4 mx-auto">
              <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('coding-introduction-signup') ) ); ?>" class='btn btn-lg btn-danger'><?php pll_e('Sign Up Now'); ?></a>
              or <a href="#freeCodingIntroModal"  data-toggle="modal" data-target="#freeCodingIntroModal" class='btn btn-lg btn-secondary mr-3'><?php pll_e('Apply for free access'); ?></a>
            </div>
            <!--<div class="partnership mt-5">-->
            <!--  <p>In partnership with</p>-->
            <!--  <?php //wpas_get_inline_svg('assets/icons/inline','mdc.svg'); ?>-->
            <!--</div>-->
          </div>
        </div>
        <div class="row">
          <div class="col-sm-10 mx-auto text-left text-black">
          </div>
        </div>
      </div>
    </header>
    <!--
      -->
    <section class="bg-light text-black text-left">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-lg-2 ml-auto">
            <ul data-toggle="sticky-onscroll" class="nav flex-column program-menu">
              <li class="nav-item active">
                <a class="nav-link" href="#program-details"><?php pll_e('Why take this course'); ?></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#course-modules"><?php pll_e('What you will learn'); ?></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#instructors"><?php pll_e('Benefits'); ?></a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#skills"><?php pll_e('Starting every 8 weeks'); ?></a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#calendar"><?php pll_e('Upcoming dates'); ?></a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#pricing"><?php pll_e('Pricing'); ?></a>
              </li>
              <li class="nav-item">
                <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class='btn btn-danger'><?php pll_e('Apply Now'); ?></a>
              </li>
            </ul>
          </div>
          <div id="program-details" class="col-md-9 ml-auto">
            <h2 class="section-heading text-black mb-2"><?php pll_e("Whom should take this course?"); ?></h2>
            <div class="row">
              <div class='col-sm-8 mb-3'>
                <?php pll_e("Someone with little or no coding skills, it's the ideal introduction for doing web development, allowing students to create small websites and start mastering real coding skills like looping, conditionals, etc."); ?>.
              </div>
              <div class='col-sm-8 mb-3'>
                <h4>Segue to full-stack</h4>
                <?php pll_e("By the end of this small course you will be already making your first real websites and ready to jump to the more complete full-stack web development course."); ?>.
              </div>
            </div>
            <h5 class="mb-4">
              <span class="text-orange">[ </span><span class="text-blue"><?php pll_e('230+ hrs of lessons, 3 times a week during 14 weeks'); ?>.</span> <span class="text-orange">]</span>
            </h5>
          </div>
        </div>
      </div>
    </section>
<!-- STEPS -->
    <section id="course-modules" class="steps-section bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-9 ml-auto">
            <h2 class="steps-header text-center"><?php pll_e('What you will learn'); ?></h2>
            <div class="steps-timeline steps2">
              <div class="steps">
                <div class="steps-img"></div>
                <h3 class="steps-name"><?php pll_e('Your first website'); ?></h3>
                <div class="steps-description">
                  <h5><?php pll_e('Duration: 1 week'); ?></h5>
                  <?php pll_e('Start coding since the first minute, use HTML&CSS to build a couple of small website including an instagram simulation '); ?>.
                  <h5><?php pll_e(''); ?></h5>
                  <?php pll_e('Understand the workflow of coding websites, learn best practices and master the most important Layout, CSS and HTML Skills.'); ?>
                </div>
              </div>
              <div class="steps">
                <div class="steps-img"></div>
                <h3 class="steps-name"><?php pll_e('Learn To Code'); ?></h3>
                <div class="steps-description">
                  <h5><?php pll_e('Duration: 1 week'); ?></h5>
                  <?php pll_e('Think like a computer: Control the flow of your code, code algorithms, loop, use conditionals, and combin Javascript with HTML&CSS to create your first interactive websites'); ?>.
                  <h5><?php pll_e('Possible projects'); ?></h5>
                  <?php pll_e('TicTactToe, Random Card Generator, Landing Page, etc.'); ?>
                </div>
              </div>
            </div>
          </div><!-- /.steps-timeline -->
        </div><!-- /.steps-timeline -->
      </div><!-- /.steps-timeline -->
    </section>
    <section class="bg-yellow text-black">
      <div class="container">
        <div class="row">
          <div class="col-md-9 ml-auto call-to-action mb-0">
              <?php get_template_part( 'partials/common', 'syllabus-download' ); ?>
          </div>
        </div>
      </div>
    </section>
    <section id="instructors" class="bg-light text-black text-left instructors">
      <div class="container">
        <div class="row">
          <div class="col-md-9 ml-auto">
            <h2 class="section-heading text-black mb-3"><?php pll_e('A real 4Geeks Academy student'); ?></h2>
            <div class="row">
              <div class='col-sm-12 col-md-10 mb-3'>
                <p>
                  <?php pll_e('4Geeks Academy students receive a lot of benefits, and even though the course is designed to be 99% online, you will also have the following student benefits while taking the course:'); ?>.
                </p>
                <ul>
                  <li><?php pll_e('Free access to most of the academy events, talks and workshops'); ?></li>
                  <li><?php pll_e('Office hour access to our co-working location to work on the assignments, projects, etc.'); ?></li>
                  <li><?php pll_e('Full access to the Coding Weekends'); ?></li>
                  <li><?php pll_e('The academy slack'); ?></li>
                  <li><?php pll_e('Event free personal mentorships from any of the academy instructors during the weekends'); ?></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light text-black text-left skills">
      <div class="container">
        <div id="skills" class="row">
          <div class="col-md-9 ml-auto">
            <h2 class="section-heading text-black mb-3"><?php pll_e('Skills: Be prepared for full-stack'); ?></h2>
            <div class="row">
              <div class='col-sm-8 mb-3'>
                <h5>
                  <?php pll_e('The course focuses in the 2 most important skills to start coding:'); ?>.
                </h5>
                <ul class="list-group">
                  <li class="list-group-item">
                    <div class="media">
                      <div class="media-left">
                        <?php wpas_get_inline_svg('assets/icons/inline','dynamicwebsites.svg'); ?>
                      </div>
                      <div class="media-body">
                        <h5 class="media-heading"><?php pll_e('Build Websties with HTML and CSS'); ?></h5>
                        <?php pll_e('In web development, everything start on HTML and CSS, learn how to create static websites with these two technologies'); ?>.
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="media">
                      <div class="media-left">
                        <?php wpas_get_inline_svg('assets/icons/inline','logicalthinking.svg'); ?>
                      </div>
                      <div class="media-body">
                        <h5 class="media-heading"><?php pll_e('Logical Thinker'); ?></h5>
                        <?php pll_e('Think like a computer and create top-quality algorithms: Loops, conditionals, functions, variables, etc. Create algorithms to generate dynamic HTML & CSS'); ?>.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="calendar" class="bg-light text-black upcoming-courses pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
              <div class="row">
                <div class="col-md-9 ml-auto">
                  <h2 class="section-heading text-black mb-4 mt-2"><?php pll_e('Calendar: A new cohort starts every 8 weeks'); ?></h2>
                  <?php pll_e('Pick the date that most acomodates to your schedule and start your career with a very small investment or even for free!'); ?>
  						  </div>
  						</div>
                <?php if(!empty($args['upcoming-cohorts'])) foreach($args['upcoming-cohorts'] as $course){ ?>
              <div class="row">
  							  <div class="col-md-9 ml-auto">
                    <h5 class="upcoming-cohort">
                      <?php wpas_get_inline_svg('assets/icons/inline','calendarstroke.svg'); ?> 
                      <?php echo $course['day']; ?> <?php echo $course['month']; ?>, <?php echo $course['year']; ?> 
                      <span class="ml-5 imoon icon-location"></span> <?php echo $course['location']; ?>
                      <div class="button-bar">
    							     <button class="btn btn-danger btn-sm">Signup now</button> or
    							     <button class="btn btn-secondary btn-sm" data-target="#freeCodingIntroModal">Request free access</button>
                      </div>
                    </h5>
                  </div>
  						</div>
                <?php } ?>
          </div>
        </div>
      </div>
    </section>
    <section id="pricing" class="bg-white text-black text-center pricing-section">
      <div class="container">
        <div class="row">
          <div class="col-md-9 ml-auto">
            <h2 class="section-heading text-black"><?php pll_e('Pricing & Financing'); ?></h2>
              <div class='row'>
                <div class='col-6 ml-auto upfront'>
                  <div class="card card-block card-primary card-inverse bg-light">
                    <div class="card-body">
                      <h4 class="card-title m-0"><?php pll_e('Right now'); ?></h4>
                      <h3 class="card-text">$400</h3>
                    </div>
                  </div>
                </div>
                <div class='col-6 mr-auto'>
                  <div class="card card-block card-primary card-inverse bg-light">
                    <div class="card-body">
                      <h4 class="card-title m-0"><?php pll_e('Every 8 Weeks'); ?></h4>
                      <h3 class="card-text">FREE</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-10 mx-auto text-center'>
                  <p class='section-message p-3'><?php pll_e('Come to any of our geek nights events receive free access to this course and become an official 4Geeks Academy student!'); ?></p>
                  <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class="btn btn-danger btn-lg"><?php pll_e('Apply to the program'); ?></a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <?php include(locate_template('partials/common-testimonials.php')); ?>
  <?php get_footer(); ?>