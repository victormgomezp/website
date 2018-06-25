<?php 
/* Template Name: Landing Maker 1 */
/* Template Post Type: landing, page */
get_header('visualcomposer'); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="header-content">
        <div class="row heading-row pt-2 pb-2">
          <div class="col-sm-10 col-md-10 col-lg-9 col-xl-7 mx-auto">
            <h1 id="homeHeading" class="text-white "><?php echo $args['page']['heading1']; ?></h1>
            <h3 class='text-white'><span class="text-orange">[ </span><span class="text-blue"><?php echo $args['page']['heading2']; ?></span> <span class="text-orange">] </span></h3>
          </div>
        </div>
        <div class="row certified">
          <div class="col-sm-12 col-md-5 col-lg-4 col-xl-3 ml-auto florida">
            <?php pll_e('licensed by'); ?> 
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
        <?php echo $args['page']['call-to-action']; ?>
      </div>
    </section>
    <?php get_template_part('partials/common','parttime'); ?>
    <section class="bg-white text-black text-center">
      <div class="container">
        <div class="row">
          <div class="col-12 ">
            <h2 class="section-heading text-black"><?php pll_e('Gamified training focused on'); ?> <br/><?php pll_e('skills & modern technologies'); ?></h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p class='section-message pb-1'>
              <p><?php pll_e('Complete challenges, projects and quizes to gain all the skills from our'); ?> <a href="#"><?php pll_e('Talent Tree'); ?></a>.</p>
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
            <div class='section-message' style="font-size: 80%;">
              <h3><?php pll_e('Why do we teach this technologies?'); ?></h3>
              <p class='text-left'>
              <?php pll_e('<strong>Javascript</strong> has <a target="_blank" href="https://www.linkedin.com/jobs/search?keywords=javascript&location=florida&trk=jobs_jserp_search_button_execute&orig=JSERP&applyLogin=&locationId=">26x more job vacancies</a> than <strong>Ruby On Rails</strong>. Javascript is the <a href="https://www.linkedin.com/pulse/rip-ruby-rails-thanks-everything-alejandro-s%C3%A1nchez/" target="_blank">King of the internet</a> and the only language web browsers understand'); ?>.
              </p>
              <p class='text-left'>
              <?php pll_e('<strong>Python</strong> is <a href="https://stackoverflow.blog/2017/09/06/incredible-growth-python/" target="_blank">the fastest growing language</a> in the latest measurement by Stack Overflow, it has <a target="_blank" href="https://www.linkedin.com/jobs/search?keywords=python&location=florida&trk=jobs_jserp_search_button_execute&orig=JSERP&applyLogin=&locationId=">14x more vacancies than Ruby and 8x more vacancies than Node.js</a>. Learning Python/django will make you be comfortable with similar frameworks like Ruby/Rails, PHP/Laravel, etc'); ?>.
              </p>
              <div class="col-10 mx-auto">
                <a href="#syllabusModal" data-toggle="modal" data-target="#syllabusModal" class="btn btn-secondary">Download our syllabus</a> 
                <p><small>And read more about the technology stack.</small></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mr-auto">
            <div class='chart-wrapper'>
              <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/tech-chart.png">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-yellow text-black text-center">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 mx-auto call-to-action mb-0">
            <h4><?php pll_e('Download our Syllabus (PDF) and get all the details'); ?></h4>
             <form class="form-inline text-center syllabus-download mx-auto">
              <div class="form-group mx-auto">
                <div class="alert alert-danger" style=" width: 100%; display: none;" role="alert"></div>
                <input type="email" class="form-control" name="" placeholder="Your email" required/>
                <button class="btn btn-secondary form-control mt-3 ml-0 ml-sm-3 mt-sm-0"><?php pll_e('Download'); ?></button>
              </div>
            </form>
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
          <ul class="list-inline h-scroll mx-auto">
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
    <?php echo (isset($args['page']['script'])) ? '<script type="text/javascript" src="'.$args['page']['script'].'"></script>' : ''; ?>
  <?php get_footer(); ?>