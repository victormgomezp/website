<?php get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="header-content">
        <div class="row">
          <div class="col-sm-10 col-md-10 col-lg-9 col-xl-7 mx-auto">
            <h1 id="homeHeading"><?php echo $args['event']['post_title'];  ?></h1>
            <h3><?php echo $args['event']['start_time'];  ?></h3>
            <span class="text-orange">[ </span><span class="text-blue">coding education</span>, <span class="text-blue">affordale</span>, <span class="text-blue"> part time.</span> <span class="text-orange">] </span>
          </div>
        </div>
        <div class="row certified">
          <div class="col-sm-12 col-md-5 col-lg-4 col-xl-3 ml-auto florida">
            licensed by 
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/florida.png"></img>
          </div>
          <div class="col-sm-12 col-md-5 col-lg-4 col-xl-3 mr-auto">
              <span class="imoon icon-star-full"></span>
              <span class="imoon icon-star-full"></span>
              <span class="imoon icon-star-full"></span>
              <span class="imoon icon-star-full"></span>
              <span class="imoon icon-star-full"></span><br />
              4.8 Rated on Course Report
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
            <h4 class="section-heading text-black">Finally an affordable & premium course in Miami</h4>
            <p class="text-faded">We never stopped trying until we mastered a real premium but affordable program, talk to one of our student advisors to make sure you are a fit to our program.</p>
            <form class="form-inline">
              <label class="sr-only" for="inlineFormInput">Your Name</label>
              <input type="phone" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Phone number">
              <label class="sr-only" for="inlineFormInput">Your email</label>
              <input type="email" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Your email. Ex: hello@world.com">
              <button type="submit" class="btn btn-primary">Request call</button>
            </form>
            <a id="request-call" class="btn btn-default btn-primary js-scroll-trigger" href="#services">Request a call</a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black text-center part-time" id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-heading text-black">Specialized in part-time</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-4 col-md-3 ml-auto align-vertical pt-3">
            <img style="max-height: 150px;" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/part-time.png"></img>
          </div>
          <div class="col-8 col-md-6 mr-auto">
            <p class='section-message'>
              Part-time is more than a schedule, re-thinking our methodology and contents for part-time has made us more flexible and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light text-black text-center pb-0" id="about">
      <div class="container">
        <div class="row">
          <div class="col-12 ">
            <h2 class="section-heading text-black">Gamified training based on skills & modern technology</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p class='section-message pb-1'>
              Complete challenges, projects, quizes to develop all skills from the <a href="#">Talent Tree</a>.
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
              Learn a really advanced stack of technologies, what companies are looking for.
              <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/stack.png"></img>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 ml-auto">
            <p class='section-message'>
              <h3>What Florida companies are looking for...</h3>
              <p class='text-left'>
              For every Florida job opening you can find on LinkedIn or Indeed about <strong>Ruby On Rails</strong>, there are 13x times more job openings related to <strong>PHP</strong> and 26x times more job openings related to <strong>Javascript</strong>,
              <a target="_blank" href="https://www.linkedin.com/jobs/search?keywords=javascript&location=florida&trk=jobs_jserp_search_button_execute&orig=JSERP&applyLogin=&locationId=">search for yourself and prove it.</a>
              </p>
              
            </p>
          </div>
          <div class="col-md-4 mr-auto">
            <div class='chart-wrapper'>
              <canvas class="pie-chart" width="100" height="100"></canvas>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="bg-success col-sm-10 mx-auto call-to-action mb-0">
            <h4>Download our syllabus PDF to understand all the details</h4>
             <form class="form-inline text-center">
              <input type="email" class="form-control" name="" placeholder="Your email"/>
              <a class="btn btn-default btn-secondary form-control" href="#services">Download</a>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black text-center" id="about">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-heading text-black">Ace any job interview or code for your self</h2>
            <p class='section-message pb-1'>
              We know how tipical interviews are and what they will make you code, this are only some of the projects our students have built.
            </p>
          </div>
        </div>
        <div class="row student-projects">
          <ul class="list-inline h-scroll">
            <li class="list-inline-item">
              <div class="card card-block card-primary card-inverse">
                <span class="oi oi-globe"></span>
                <a href="#">Airbnb Clone</a>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card card-block card-primary card-inverse">
                <span class="oi oi-globe"></span>
                <a href="#">Airbnb Clone</a>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card card-block card-primary card-inverse">
                <span class="oi oi-globe"></span>
                <a href="#">Airbnb Clone</a>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card card-block card-primary card-inverse">
                <span class="oi oi-globe"></span>
                <a href="#">Airbnb Clone</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="bg-light text-black text-center pricing-section" id="about">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-heading text-black">Pricing & Financing</h2>
              <div class='row'>
                <div class='col-6 ml-auto upfront'>
                  <div class="card card-block card-primary card-inverse">
                    <div class="card-body">
                      <h2 class="card-title m-0"><?php pll_e('Up-Front'); ?></h2>
                      <h3 class="card-text">$6,000</h3>
                    </div>
                  </div>
                </div>
                <div class='col-6 mr-auto'>
                  <div class="card card-block card-primary card-inverse">
                    <div class="card-body">
                      <h2 class="card-title m-0">Financed</h2>
                      <h3 class="card-text">From $300/month</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-10 mx-auto text-center'>
                  <p class='section-message'>This was the most challenging part, our program was designed from the ground up aming to make coding education universal.</p>
                  <a href="#" class="btn btn-success btn-lg">Apply to the program</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black testimonials">
      <div class="container">
        <h2 class="text-black text-center">Over 500 students graduated</h2>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class='row'>
                <div class='col-11 col-sm-10 mx-auto'>
                  <blockquote class="blockquote">
                    <div class='circle-img float-left mr-3' style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/img/marlon.png');"></div>
                    <p>
                      "The instructors and students were the lifeblood of this course, well beyond the actual programming and studying. They made everything easy to digest and quite fun to take in.
                    </p>
                    <p class="mb-0">
                      Give this course a go and I would assure you that you won't regret it as long as you put in the work!"
                    </p>
                    <footer class="blockquote-footer">
                      Marlon - August 24th 2016 via <cite title="Source Title">Course Report</cite>
                      <p class="ml-4">
                        <span class="imoon icon-star-full"></span>
                        <span class="imoon icon-star-full"></span>
                        <span class="imoon icon-star-full"></span>
                        <span class="imoon icon-star-full"></span>
                        <span class="imoon icon-star-full"></span>
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class='row'>
                <div class='col-sm-3 mr-auto'>
                  <div class='circle-img float-right' style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/img/marlon.png');"></div>

                </div>
                <div class='col-sm-8 mr-auto'>
                  <blockquote class="blockquote">
                    <p>
                      The instructors and students were the lifeblood of this course, well beyond the actual programming and studying. They made everything easy to digest and quite fun to take in.
                    </p>
                    <p class="mb-0">
                      Give this course a go and I would assure you that you won't regret it as long as you put in the work!
                    </p>
                    <footer class="blockquote-footer">Marlon - August 24th 2016 via <cite title="Source Title">Course Report</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class='row'>
                <div class='col-sm-3'>
                  <div class='circle-img float-right' style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/img/marlon.png');"></div>
                </div>
                <div class='col-sm-8'>
                  <blockquote class="blockquote">
                    <p>
                      The instructors and students were the lifeblood of this course, well beyond the actual programming and studying. They made everything easy to digest and quite fun to take in.
                    </p>
                    <p class="mb-0">
                      Give this course a go and I would assure you that you won't regret it as long as you put in the work!
                    </p>
                    <footer class="blockquote-footer">Marlon - August 24th 2016 via <cite title="Source Title">Course Report</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <?php get_footer(); ?>