<?php 
/* Template Name: Home */
get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="header-content">
        <div class="row heading-row">
          <div class="col-sm-10 col-md-10 col-lg-9 col-xl-7 mx-auto">
            <h1 id="homeHeading" class="text-white">&#x3C;/ Breathe Coding &#x3E;</h1>
            <h3 class='text-white'><span class="text-orange">[ </span><span class="text-blue"><?php pll_e('Premium coding education'); ?></span>, <span class="text-blue"><?php pll_e('part-time'); ?></span> & <span class="text-blue"> <?php pll_e('from'); ?> $240/month.</span> <span class="text-orange">] </span></h3>
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
    </header>
    <!--
      -->
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
    <?php get_template_part('partials/common','partners'); ?>
    <?php get_template_part('partials/common','parttime'); ?>
    <section class="bg-white text-black text-center pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 ">
            <h2 class="section-heading text-black"><?php pll_e('Gamified training focused on'); ?> <br/><?php pll_e('skills & modern technologies'); ?></h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p class='section-message pb-1'>
              <?php pll_e('Complete challenges, projects and quizes to gain all the skills from our'); ?> <a href="#"><?php pll_e('Talent Tree'); ?></a>.
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
            </p>
          </div>
          <div class="col-md-6 ">
            <p class='section-message pb-1'>
              <?php pll_e('Learn an advanced stack of technologies, what companies are looking for.'); ?>
              <div class="tech-icons">
                <em class="techico icon-js"></em>
                <em class="techico icon-python"></em>
                <em class="techico icon-react"></em>
                <em class="techico icon-git-squared"></em>
                <em class="techico icon-database"></em>
                <em class="techico icon-mongodb"></em>
                <em class="techico icon-sass"></em>
              </div>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 ml-auto">
            <p class='section-message'>
              <h3><?php pll_e('Why do we teach this technologies?'); ?></h3>
              <p class='text-left'>
              <?php pll_e('<strong>Javascript</strong> has 26x more job vacancys than <strong>Ruby On Rails</strong>. <strong>Python</strong> has 14x more job vacancys than <strong>Ruby On Rails</strong>'); ?>.
              <a target="_blank" href="https://www.linkedin.com/jobs/search?keywords=javascript&location=florida&trk=jobs_jserp_search_button_execute&orig=JSERP&applyLogin=&locationId="><?php pll_e('Click here to check it out!'); ?></a>
              </p>
              
            </p>
          </div>
          <div class="col-md-4 mr-auto">
            <div class='chart-wrapper'>
                <div class="pieID pie"></div>
                <ul class="pieID legend">
                  <li>
                    <em>Javascript:</em>
                    <span>1348</span>
                  </li>
                  <li>
                    <em>Python:</em>
                    <span>746</span>
                  </li>
                  <li>
                    <em>Ruby:</em>
                    <span>51</span>
                  </li>
                </ul>
            </div>
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
    <section class="bg-white">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-heading text-black text-center"><?php pll_e('Ace any job interview or code for your self'); ?></h2>
            <p class='section-message pb-1'>
              <?php pll_e('We know how typical coding interviews are, and what they will ask you to code (testing your skills). We\'ve created and improved a series of in-class exercises and projects tailored to ace those tests. Here you can have a taste of the projects built by some of our students:'); ?>
            </p>
          </div>
        </div>
        <div class="row student-projects">
          <ul class="list-inline h-scroll">
            <li class="list-inline-item">
              <div class="card card-block card-primary card-inverse">
                <?php wpas_get_inline_svg('assets/icons/inline','airbnb.svg'); ?>
                <p class="text-center mt-2"><?php pll_e('Airbnb Clone'); ?></p>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card card-block card-primary card-inverse">
                <?php wpas_get_inline_svg('assets/icons/inline','instagram.svg'); ?>
                <p class="text-center mt-2"><?php pll_e('Instagram Clone'); ?></p>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card card-block card-primary card-inverse">
                <?php wpas_get_inline_svg('assets/icons/inline','slack.svg'); ?>
                <p  class="text-center mt-2"><?php pll_e('Slack.com Clone'); ?></p>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card card-block card-primary card-inverse">
                <?php wpas_get_inline_svg('assets/icons/inline','coursera.svg'); ?>
                <p class="text-center mt-2"><?php pll_e('Coursera Clone'); ?></p>
              </div>
            </li>
          </ul>
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
                      <h4 class="card-text">From $240/month</h4>
                      <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('pricing') ) ); ?>">*<?php pll_e('Learn more about our extended plan'); ?></a>
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