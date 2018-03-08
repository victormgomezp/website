<?php 
/* Template Name: Home */
get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead pb-0">
      <div class="header-content">
        <div class="row heading-row">
          <div class="col-sm-10 col-md-10 col-lg-9 col-xl-7 mx-auto">
            <h1 id="homeHeading" class="text-white">&#x3C;/ Breathe Coding &#x3E;</h1>
            <h3 class='text-white'><span class="text-orange">[ </span><span class="text-blue"><?php pll_e('Premium coding education'); ?></span>, <span class="text-blue"><?php pll_e('part-time'); ?></span> & <span class="text-blue"> <?php pll_e('from'); ?> $135/month.</span> <span class="text-orange">] </span></h3>
          </div>
        </div>
        <div class="row certified">
          <div class="col-sm-12 col-md-5 col-lg-4 col-xl-3 ml-auto florida">
            <?php pll_e('Certified by'); ?> 
            <a target="_blank" rel="nofollow" href="http://www.fldoe.org/">
              <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/florida.png"></img>
            </a>
          </div>
          <div class="col-sm-12 col-md-5 col-lg-4 col-xl-3 mr-auto">
            <a target="_blank" rel="nofollow" href="http://www.newsweek.com/insights/coding-career-and-you-top-coding-schools-2017/4geeks-academy">
              <img style="max-height: 45px;" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/newsweek.jpg"></img>
            </a>
          </div>
        </div>
      </div>
      <section class="bg-light text-black call-to-action" id="about">
      <div class="container">
        <div class="row">
          <div class="col-11 mx-auto">
            <h4 class="section-heading text-black"><?php pll_e('Finally an affordable & premium course in Miami'); ?></h4>
            <p class="text-faded"><?php pll_e('We never stopped trying until we mastered a real premium but affordable program. Talk to one of our student advisors and make sure you are a good fit for our program'); ?>;</p>
            <form class="form-inline">
              <a href="#syllabusModal"  data-toggle="modal" data-target="#syllabusModal" class='btn btn-lg btn-secondary'><?php pll_e('Request Syllabus'); ?></a>
              <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class='btn btn-lg btn-danger'><?php pll_e('Apply Now'); ?></a>
            </form>
          </div>
        </div>
      </div>
    </section>
    </header>
    <!--
      -->
    <?php get_template_part('partials/common','parttime'); ?>
    <section class="bg-white text-black text-center pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 ">
            <h2 class="section-heading text-black"><?php pll_e('Gamified and focused on'); ?> <br/><?php pll_e('skills with modern technologies'); ?></h2>
          </div>
        </div>
        <div class="row no-gutters">
            <div class="col-12">
                <div class="card-deck">
                    <div class="card">
                        <div class="card-body section-message bg-light">
                            <?php pll_e('Complete challenges, projects and quizes to gain all the skills from our'); ?> <a href="https://www.4geeksacademy.co/the-talent-tree/"><?php pll_e('Talent Tree'); ?></a>.
                            <img style="max-height: 150px;" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/specialties.png"></img>
                            <!--
                            <ul class="list-inline h-scroll">
                            <?php if(!empty($args['profiles'])) foreach($args['profiles'] as $profile){ ?>
                            <li class="list-inline-item">
                              <div class="card card-block card-primary card-inverse specialty">
                                <img src="<?php echo BREATHECODE_API.$profile->image_url; ?>"></img>
                                <a href="#"><?php echo $profile->name; ?></a>
                              </div>
                            </li>
                            <?php } ?>
                            </ul>
                            -->
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body section-message bg-light">
                            <?php pll_e('Learn an advanced stack of technologies, what companies are looking for.'); ?>
                            <div class="tech-icons">
                                <em class="techico icon-js" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                                <em class="techico icon-babel" data-toggle="tooltip" data-placement="top" title="Babel JS"></em>
                                <em class="techico icon-webpack" data-toggle="tooltip" data-placement="top" title="Webpack"></em>
                                <em class="techico icon-react" data-toggle="tooltip" data-placement="top" title="React JS"></em>
                                <em class="techico icon-python" data-toggle="tooltip" data-placement="top" title="Python"></em>
                                <em class="techico icon-django" data-toggle="tooltip" data-placement="top" title="Django"></em>
                                <em class="techico icon-git-squared" data-toggle="tooltip" data-placement="top" title="GIT"></em>
                                <em class="techico icon-database" data-toggle="tooltip" data-placement="top" title="SQL"></em>
                                <em class="techico icon-mysql" data-toggle="tooltip" data-placement="top" title="MySQL (SQL)"></em>
                                <em class="techico icon-mongodb" data-toggle="tooltip" data-placement="top" title="Mongo DB (NoSQL)"></em>
                                <em class="techico icon-sass" data-toggle="tooltip" data-placement="top" title="SASS"></em>
                                <em class="techico icon-html5" data-toggle="tooltip" data-placement="top" title="HTML5"></em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-12 mx-auto">
            <p class='section-message'>
              <h3><?php pll_e('Why do we teach this technologies?'); ?></h3>
              <p class='text-center'>
              <?php pll_e('<strong>Javascript</strong> has 26x more job vacancys than <strong>Ruby On Rails</strong>. <strong>Python</strong> has 14x more job vacancys than <strong>Ruby On Rails</strong>'); ?>.
              <a target="_blank" href="https://www.linkedin.com/jobs/search?keywords=javascript&location=florida&trk=jobs_jserp_search_button_execute&orig=JSERP&applyLogin=&locationId="><?php pll_e('Click here to check it out!'); ?></a>
              </p>
              <figure class='programming-langs'>
                <div class="graphic">
                    <div class="chart">
                      <span class="block" title="Javascript">
                         <span class="legend">Javascript</span>
                         <span class="value">60%</span>
                      </span>
                      <span class="block" title="Python">
                         <span class="legend">Python</span>
                         <span class="value">27%</span>
                      </span>
                      <span class="block" title="Ruby">
                         <span class="legend">Ruby</span>
                         <span class="value">13%</span>
                      </span>
                    </div>
                </div>
              </figure>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-yellow text-black text-center p-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 mx-auto call-to-action mb-0">
            <?php get_template_part( 'partials/common', 'syllabus-download' ); ?>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 mx-auto">
            <h2 class="text-center"><?php pll_e('Get immersed in Miami\'s Coding Ecosystem'); ?></h2>
            <h5 class="text-center mb-5"><?php pll_e('4Geeks Academy and its students actively participates Miami\'s top coding initiatives'); ?>.</h5>
            <div class="row">
            <?php foreach ($args['c-partners'] as $p) { ?>
                <div class="col-6 col-sm-3">
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
    <section class="bg-white">
      <div class="container text-center">
        <div class="row">
          <div class="col-12">
            <h2 class="section-heading text-black"><?php pll_e('Ace any job interview or code for your self'); ?></h2>
          </div>
        </div>
        <div class="row">
          <div class="col-6 student-projects">
            <p class='section-message pb-1'>
              <?php pll_e('As a student, you will develop real-life projects similar to the most popular website out there:'); ?>
            </p>
            <ul class="list-inline h-scroll">
              <li class="list-inline-item">
                <div class="card card-block card-primary card-inverse">
                  <?php wpas_get_inline_svg('assets/icons/inline','airbnb.svg'); ?>
                  <p class="text-center mt-2"><?php pll_e('Airbnb'); ?></p>
                </div>
              </li>
              <li class="list-inline-item">
                <div class="card card-block card-primary card-inverse">
                  <?php wpas_get_inline_svg('assets/icons/inline','instagram.svg'); ?>
                  <p class="text-center mt-2"><?php pll_e('Instagram'); ?></p>
                </div>
              </li>
              <li class="list-inline-item">
                <div class="card card-block card-primary card-inverse">
                  <?php wpas_get_inline_svg('assets/icons/inline','slack.svg'); ?>
                  <p  class="text-center mt-2"><?php pll_e('Slack.com'); ?></p>
                </div>
              </li>
              <li class="list-inline-item">
                <div class="card card-block card-primary card-inverse">
                  <?php wpas_get_inline_svg('assets/icons/inline','coursera.svg'); ?>
                  <p class="text-center mt-2"><?php pll_e('Coursera'); ?></p>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-6 h-partners">
            <p class='section-message pb-1 mt-4'>
              <?php pll_e('And get prepared with all the skills that our network of hiring partners is craving for:'); ?>
            </p>
            <div class="card-deck">
            <?php foreach ($args['h-partners'] as $p) { ?>
                <div class="card partner-card" data-toggle="tooltip" data-placement="top" title="" data-original-title="WordCamp Miami">
                    <img class="card-img-top" src="<?php echo $p['image']['url']; ?>">
                </div>
            <?php } ?>
            </div>
            <p><a href="<?php echo get_permalink( get_page_by_path('partners') ); ?>">Check out more about our partnerships</a></p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light text-black text-center pricing-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-heading text-black"><?php pll_e('Pricing & Financing'); ?></h2>
              <div class='row'>
                <div class='col-6 ml-auto upfront'>
                  <div class="card card-block card-primary card-inverse">
                    <div class="card-body mb-3">
                      <h3 class="card-title m-3"><?php pll_e('Upfront'); ?></h3>
                      <h4 class="card-text">$6,000</h4>
                    </div>
                  </div>
                </div>
                <div class='col-6 mr-auto'>
                  <div class="card card-block card-primary card-inverse">
                    <div class="card-body">
                      <h3 class="card-title m-0"><?php pll_e('Extended Plan'); ?></h3>
                      <h4 class="card-text">From $135/month</h4>
                      <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('pricing') ) ); ?>">*<?php pll_e('Learn more about our payment plans'); ?></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-10 mx-auto text-center'>
                  <p class='section-message'><?php pll_e('This was the most challenging part, our program was designed from the ground up aming to make coding education universal'); ?>;</p>
                  <small>
                    <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class="btn btn-danger btn-lg"><?php pll_e('Apply to the program'); ?></a>
                  </small>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <?php include(locate_template('partials/common-testimonials.php')); ?>
  <?php get_footer(); ?>