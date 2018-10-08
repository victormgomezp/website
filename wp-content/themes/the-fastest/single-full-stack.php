<?php
/*
Template Name: Full Stack Development (Full-Time)
Template Post Type: course
*/
get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="header-content">
        <div class="row heading-row">
          <div class="col-sm-10 mx-auto text-left">
            <h1 class="text-white mb-0">
              <?php pll_e('Become a'); ?> <br />
              <?php pll_e('Full-Stack Software Developer'); ?> <br />
            </h1>
            <h2 class="text-white mt-0">
              8 <?php pll_e('weeks'); ?> (full-time)
            </h2>
            <div id=flip>
              <div><div><?php pll_e('and increase your income significantly'); ?></div></div>
              <div><div><?php pll_e('and join the workforce of the future'); ?></div></div>
              <div><div><?php pll_e('and re-launch your career'); ?></div></div>
              <div><div><?php pll_e('and join the Tech community'); ?></div></div>
              <div><div><?php pll_e('or build your own Tech Startup'); ?></div></div>
            </div>
            <form class="form-inline mt-3 mt-sm-0">
              <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class='btn btn-lg btn-danger mr-3'><?php pll_e('Apply Now'); ?></a>
              <a href="#syllabusModal"  data-toggle="modal" data-target="#syllabusModal" class='btn btn-lg btn-secondary'><?php pll_e('Request Syllabus'); ?></a>
            </form>
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
                <a class="nav-link" href="#program-details"><?php pll_e('Program details'); ?></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#course-modules"><?php pll_e('Course Structure'); ?></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#day-at-academy"><?php pll_e('A Day At The Academy'); ?></a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#skills"><?php pll_e('Skills'); ?></a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#pricing"><?php pll_e('Pricing & Financing'); ?></a>
              </li>
              <li class="nav-item">
                <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class='btn btn-danger'><?php pll_e('Apply Now'); ?></a>
              </li>
            </ul>
          </div>
          <div id="program-details" class="col-md-9 ml-auto">
            <h2 class="section-heading text-black mb-2"><?php pll_e('8 weeks to launch your'); ?><br /> <?php pll_e('web development career'); ?></h2>
            <h5 class="mb-4">
              <span class="text-orange">[ </span><span class="text-blue"><?php pll_e('380+ hrs of lessons, 5 times a week during 8 weeks'); ?>.</span> <span class="text-orange">]</span>
            </h5>
            <div class="row">
              <div class='col-sm-8 mb-3'>
                <h4>1) <?php pll_e('Learn the skills'); ?></h4>
                <?php pll_e('At first, you will focus on learning the technologies and skills that will make you succeed in your new career.'); ?>.
              </div>
              <div class='col-sm-8 mb-3'>
                <h4>2) <?php pll_e('Build your profile'); ?></h4>
                <?php pll_e('Everything you during the course will become a part of your professional profile. With our help and our methodology, you will end up having a great resume, portfolio, and online presence.'); ?>.
              </div>
              <div class='col-sm-8 mb-3'>
                <h4>3) <?php pll_e('Get hired'); ?></h4>
                <?php pll_e('Get introduced into the job opportunities available in our '); ?> 
                <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('partners') ) ); ?>"><?php pll_e('network of hiring partners'); ?></a>, 
                <?php pll_e('get involed in the tech ecosystem and land your first coding job'); ?>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="course-modules" class="steps-section bg-white d-none d-sm-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 ml-auto">
            <h2 class="steps-header text-center"><?php pll_e('Course Structure'); ?></h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-9 col-sm-12 ml-auto multi-phase">
              <div class="row">
                  <div class="col-sm-4 p-0">
                      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                          <a class="nav-link active" id="v-pills-w1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-w1" aria-selected="true">
                            <span class="week-description">
                                <?php pll_e('Prework & Learn to Code'); ?>
                                <small>2 <?php pll_e('weeks'); ?></small>
                                <?php wpas_get_inline_svg('assets/icons/inline','right.svg'); ?>
                            </span>
                          </a>
                          <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="true">
                            <span>
                                <?php pll_e('Coding intensive'); ?>
                                <small>8 <?php pll_e('weeks'); ?></small>
                                <?php wpas_get_inline_svg('assets/icons/inline','right.svg'); ?>
                                <span class="sub-pills">
                                  <a class="nav-link pl-3 sub-pills" id="v-pills-21-tab" data-toggle="pill" href="#v-pills-21" role="tab" aria-controls="v-pills-21" aria-selected="true">
                                    <span class="week-subdescription"><?php pll_e('Javascript & Coding Fundamentals'); ?></span>
                                    <?php wpas_get_inline_svg('assets/icons/inline','right.svg'); ?>
                                  </a>
                                  <a class="nav-link pl-3 sub-pills" id="v-pills-22-tab" data-toggle="pill" href="#v-pills-22" role="tab" aria-controls="v-pills-22" aria-selected="true">
                                    <span class="week-subdescription"><?php pll_e('Learn and master React.js'); ?></span>
                                    <?php wpas_get_inline_svg('assets/icons/inline','right.svg'); ?>
                                  </a>
                                  <a class="nav-link pl-3 sub-pills" id="v-pills-23-tab" data-toggle="pill" href="#v-pills-23" role="tab" aria-controls="v-pills-23" aria-selected="true">
                                    <span class="week-subdescription"><?php pll_e("API's, Databases and Python"); ?></span>
                                    <?php wpas_get_inline_svg('assets/icons/inline','right.svg'); ?>
                                  </a>
                                  <a class="nav-link pl-3 sub-pills" id="v-pills-24-tab" data-toggle="pill" href="#v-pills-24" role="tab" aria-controls="v-pills-24" aria-selected="true">
                                    <span class="week-subdescription"><?php pll_e('Build a Real-Life Application'); ?></span>
                                    <?php wpas_get_inline_svg('assets/icons/inline','right.svg'); ?>
                                  </a>
                                </span>
                            </span>
                          </a>
                          <a class="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="true">
                            <span class="week-description">
                                <?php pll_e('Build your profile'); ?>
                                <small>1 <?php pll_e('weeks'); ?></small>
                                <?php wpas_get_inline_svg('assets/icons/inline','right.svg'); ?>
                            </span>
                          </a>
                          <a class="nav-link" id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected="true">
                              <span class="week-description">
                                  <?php pll_e('Career Support'); ?>
                                  <small>12 <?php pll_e('weeks'); ?></small>
                                  <?php wpas_get_inline_svg('assets/icons/inline','right.svg'); ?>
                              </span>
                          </a>
                      </div>
                  </div>
                  <div class="col-sm-8 ml-auto w-shadow">
                      <div class="tab-content pt-2">
                        <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-w1-tab">
                          <p class="p-0 m-0 mb-4 text-center">
                            <em style="font-size: 50px" class="techico icon-html5 mx-auto col-4" data-toggle="tooltip" data-placement="top" title="HTML5"></em>
                            <em style="font-size: 50px" class="techico icon-nodejs mx-auto col-4" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                            <em style="font-size: 50px" class="techico icon-css3 mx-auto col-4" data-toggle="tooltip" data-placement="top" title="CSS3"></em>
                          </p>
                          <p class="p-0 m-0">
                            <?php pll_e("We have designed a small pre-work to get you prepared before starting the in-site phase"); ?>.
                          </p>
                          <p class="mt-3 mb-0">
                            <?php pll_e("During this prework you will learn about software development fundamentals, coding fundamentals and first steps in web development with HTML, CSS and Javascript"); ?> <br /> <br />
                          </p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-w3-tab">
                          <p><?php pll_e("Our courses are being featured in the world's top teaching websites like"); ?> <a href="https://repl.it/community">Repl.it</a> <?php pll_e("and have been taken by more than 2,500 students"); ?></p>
                          <p><?php pll_e("You will get hundreds of exercises to practice, interactive tutorials, videos and master clasess to become the developer the market is looking for"); ?>.</p>
                          <p><?php pll_e("Click on any of the 4 phases to learn more about it"); ?>.</p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-21" role="tabpanel" aria-labelledby="v-pills-21-tab">
                          <p><?php pll_e("This is the most important phase of the course divided in 4 phases that will make you go from nothing to professional coding"); ?>.</p>
                          <p><?php pll_e("It does not matter what type of developer you want to be, you always use: Loops, Conditionals, Working with Arrays, Object Oriented Programing, Mapping, Filtering, Ordering, etc"); ?>.</p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-22" role="tabpanel" aria-labelledby="v-pills-22-tab">
                          <p><?php pll_e("React has become the new jQuery for a lot of companies, products like Office 360, AirBnB, Facebook and many others are build in on top of it"); ?>.</p>
                          <p><?php pll_e("During two weeks you will code several apps in React with the help of our mentors that have taken part in the development of the React.js ecosystem and code"); ?>.</p>
                          <p class="p-0 m-0 text-center">
                            <em style="font-size: 50px" class="techico icon-react mx-auto col-6" data-toggle="tooltip" data-placement="top" title="HTML5"></em>
                            <em style="font-size: 50px" class="techico icon-nodejs mx-auto col-6" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                          </p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-23" role="tabpanel" aria-labelledby="v-pills-23-tab">
                          <?php pll_e("Python is the fastes growing language in the developed word. The King of the back-end. Learn how to create your own API's, connect to databases like Postgree, MySQL or Mongo and publish them online"); ?>.
                          <p class="p-0 m-0 text-center">
                            <em style="font-size: 50px" class="techico icon-python mx-auto col-3" data-toggle="tooltip" data-placement="top" title="HTML5"></em>
                            <em style="font-size: 50px" class="techico icon-mysql mx-auto col-3" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                            <em style="font-size: 50px" class="techico icon-mongodb mx-auto col-3" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                            <em style="font-size: 50px" class="techico icon-database mx-auto col-3" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                          </p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-24" role="tabpanel" aria-labelledby="v-pills-24-tab">
                          <?php pll_e("Focus your entire attention into developing a real life web application, you will define, conceptualize and pect your project out as it will become the cornerstone of your future profile and project portfolio."); ?>
                        </div>
                        <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                          
                          <p><?php pll_e("Together with our team, and based on your skills, we will build the best possible resume and online profile you can have"); ?></p>
                          <p><?php pll_e("You will publish online everything you have build in a professional way, we will teach you how to start publicly contributing and help you join open source projects and other initiatives"); ?>.</p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-w7-tab">
                          <p><?php pll_e("During this last phase you will have mock interviews, introduce you to potential employers and help you get started in your job hunting"); ?>.</p>
                          <p><?php pll_e("If you are interested in getting hired, our team will actively support you very close during your job hunting. Helping you prepare for specific interviews, presenting you with oportunities, etc"); ?>.</p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div><!-- /.steps-timeline -->
    </section>
    <section id="course-modules-mobile" class="bg-white d-sm-none">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 ml-auto">
            <h2 class="steps-header text-center"><?php pll_e('Course Structure'); ?></h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-11 mx-auto multi-phase">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0 text-center">
                    <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <?php pll_e("Prework & Learn to Code"); ?>
                      <small>2 <?php pll_e("weeks"); ?></small>
                    </button>
                  </h5>
                </div>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <p class="p-0 m-0 mb-4 text-center">
                      <em style="font-size: 50px" class="techico icon-html5 mx-auto col-4" data-toggle="tooltip" data-placement="top" title="HTML5"></em>
                      <em style="font-size: 50px" class="techico icon-nodejs mx-auto col-4" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                      <em style="font-size: 50px" class="techico icon-css3 mx-auto col-4" data-toggle="tooltip" data-placement="top" title="CSS3"></em>
                    </p>
                    <p class="p-0 m-0">
                      We have designed a small pre-work to get you prepared before starting the in-site phase.
                    </p>
                    <p class="mt-3 mb-0">
                      During this prework you will learn about software development fundamentals, coding fundamentals and first steps in web development with HTML, CSS and Javascript. <br /> <br />
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0 text-center">
                    <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <?php pll_e("Coding intensive"); ?>
                      <small>8 <?php pll_e("weeks"); ?></small>
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">
                    <p class="mb-2 text-center">
                      <em style="font-size: 50px" class="techico icon-react mx-auto col-3" data-toggle="tooltip" data-placement="top" title="HTML5"></em>
                      <em style="font-size: 50px" class="techico icon-nodejs mx-auto col-3" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                      <em style="font-size: 50px" class="techico icon-python mx-auto col-3" data-toggle="tooltip" data-placement="top" title="HTML5"></em>
                      <em style="font-size: 50px" class="techico icon-database mx-auto col-3" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                    </p>
                    <p>Our courses are being featured in the world's top teaching websites like <a href="https://repl.it/community">Repl.it</a> and have been taken by more than 2,500 students</p>
                    <p>You will get hundreds of exercises to practice, interactive tutorials, videos and master clasess to become the developer the market is looking for.</p>
                    <p>Focus your entire attention into developing a real life web application, you will define, conceptualize and pect your project out as it will become the cornerstone of your future profile and project</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0 text-center">
                    <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <?php pll_e("Build your profile"); ?>
                      <small>1 <?php pll_e("weeks"); ?></small>
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Together with our team, and based on your skills, we will build the best possible resume and online profile you can have.</p>
                    <p>You will publish online everything you have build in a professional way, we will teach you how to start publicly contributing and help you join open source projects and other initiatives.</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h5 class="mb-0 text-center">
                    <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                      <?php pll_e("Career Support"); ?>
                      <small>12 <?php pll_e("weeks"); ?></small>
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>During this last phase you will have mock interviews, introduce you to potential employers and help you get started in your job hunting</p>
                    <p>If you are interested in getting hired, our team will actively support you very close during your job hunting. Helping you prepare for specific interviews, presenting you with oportunities, etc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /.steps-timeline -->
    </section>
    
<!-- SYLLABUS -->
    <section class="bg-yellow text-black">
      <div class="container">
        <div class="row">
          <div class="col-md-9 ml-auto call-to-action mb-0">
              <?php get_template_part( 'partials/common', 'syllabus-download' ); ?>
          </div>
        </div>
      </div>
    </section>
<!-- END SYLLABUS -->
    <section id="day-at-academy" class="bg-white full-section-background" style="background-image: url('https://academy-web-alesanchezr.c9users.io/wp-content/themes/the-fastest/assets/img/day-at-academy/yoga.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-md-9 ml-auto">
            <h2 class="steps-header text-center text-white"><?php pll_e('A typical day at the academy'); ?></h2>
            <ul class="timeline text-white">
            
            	<!-- Item 1 -->
            	<li>
            		<div class="direction-r">
            			<div class="flag-wrapper">
            				<span class="flag text-black"><?php pll_e("Meditation"); ?></span>
            				<span class="time-wrapper"><span class="time">8:00 am</span></span>
            			</div>
            			<div class="desc"><?php pll_e("You will spend hundreds of hours coding; your body needs to relax, stretch and get ready for a thrilling day"); ?>!</div>
            		</div>
            	</li>
              
            	<!-- Item 2 -->
            	<li>
            		<div class="direction-l">
            			<div class="flag-wrapper">
            				<span class="flag text-black"><?php pll_e("Setup and coffee"); ?></span>
            				<span class="time-wrapper"><span class="time">8:45 am</span></span>
            			</div>
            			<div class="desc"><?php pll_e("The bootcamp starts at 9 am, take some coffee to recharge your energies and get ready to learn"); ?>!</div>
            		</div>
            	</li>
            
            	<!-- Item 3 -->
            	<li>
            		<div class="direction-r">
            			<div class="flag-wrapper">
            				<span class="flag text-black"><?php pll_e("Review last day"); ?></span>
            				<span class="time-wrapper"><span class="time">9 am</span></span>
            			</div>
            			<div class="desc"><?php pll_e("Review last day & weekend activities, Q&A. And brief overall of what we have addressed"); ?>.</div>
            		</div>
            	</li>
              
            	<!-- Item 2 -->
            	<li>
            		<div class="direction-l">
            			<div class="flag-wrapper">
            			  
            				<span class="flag text-black"><?php pll_e("Lesson time"); ?></span>
            				<span class="time-wrapper"><span class="time">10:00 am</span></span>
            			</div>
            			<div class="desc"><?php pll_e("Incremental: Each morning mentors will introduce a small set of new concepts and techniques that will help you along the way"); ?>.</div>
            		</div>
            	</li>
            	
            	<!-- Item 3 -->
            	<li>
            		<div class="direction-r">
            			<div class="flag-wrapper">
            			  
            				<span class="flag text-black"><?php pll_e("Lunch Time"); ?></span>
            				<span class="time-wrapper"><span class="time">12:40pm 1:50pm</span></span>
            			</div>
            			<div class="desc"><?php pll_e("Recharge your batteries, get ready to spend the rest of the day practicing, solving challenges and projects"); ?>.</div>
            		</div>
            	</li>
            	
            	<!-- Item 2 -->
            	<li>
            		<div class="direction-l">
            			<div class="flag-wrapper">
            				<span class="flag text-black"><?php pll_e("Projects & exercises"); ?></span>
            				<span class="time-wrapper"><span class="time">2pm - 4pm</span></span>
            			</div>
            			<div class="desc"><?php pll_e("You will be continuously challenged with real-life projects and exercises to deliver"); ?>.</div>
            		</div>
            	</li>
            	
            	
            	<!-- Item 3 -->
            	<li>
            		<div class="direction-r">
            			<div class="flag-wrapper">
            				<span class="flag text-black"><?php pll_e("Collaborative coding"); ?></span>
            				<span class="time-wrapper"><span class="time">5pm - 6pm</span></span>
            			</div>
            			<div class="desc"><?php pll_e("All students will code in a single screen, discuss approaches, strategies and deliver the projects"); ?>.</div>
            		</div>
            	</li>
            	
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="get-hired" class="bg-light text-black text-left instructors pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-9 ml-auto">
            <div class="row">
              <div class='col-sm-12'>
                <?php foreach($args['students'] as $memb){ ?>
                   <div class="circle-img" style="background-image: url('<?php echo $memb['student_thumb']['url'];  ?>');"></div>
                <?php } ?>
              </div>
              <div class='col-sm-12'>
                <h2 class="section-heading text-black mb-3 mt-1"><?php pll_e('Get hired'); ?></h2>
              </div>
              <div class='col-sm-12 col-md-10 mb-3'>
                <h4><?php pll_e('87% of our students have been hired by the top companies in Miami\'s local ecosystem'); ?>.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black text-left skills">
      <div class="container">
        <div id="skills" class="row">
          <div class="col-md-9 ml-auto">
            <h2 class="section-heading text-black mb-3"><?php pll_e('Skills: Be prepared for the next decade'); ?></h2>
            <div class="row">
              <div class='col-sm-8 mb-3'>
                <h5>
                  <?php pll_e('Develop the skills senior developers need to be successfull like the following'); ?>.
                </h5>
                <ul class="list-group">
                  <li class="list-group-item">
                    <div class="media">
                      <div class="media-left">
                        <?php wpas_get_inline_svg('assets/icons/inline','webarchitect.svg'); ?>
                      </div>
                      <div class="media-body">
                        <h5 class="media-heading"><?php pll_e(''); ?>Web Architect</h5>
                        <?php pll_e('When people search for Senior Developers they are really looking for Web Architects: Understand HTTP properly, AJAX, APIs, POST, GET, HTTPS, Client vs Server, etc'); ?>.
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="media">
                      <div class="media-left">
                        <?php wpas_get_inline_svg('assets/icons/inline','dynamicwebsites.svg'); ?>
                      </div>
                      <div class="media-body">
                        <h5 class="media-heading"><?php pll_e('Dynamic Websties'); ?></h5>
                        <?php pll_e('HTML5 and CSS are only the top of the iceberg, todays websites use JS, React, Webpack, Python, django, Mongo and hundreds of technologies'); ?>.
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="media">
                      <div class="media-left">
                        <?php wpas_get_inline_svg('assets/icons/inline','datamaster.svg'); ?>
                      </div>
                      <div class="media-body">
                        <h5 class="media-heading"><?php pll_e('Data Master'); ?></h5>
                        <?php pll_e('There is more data and information every day, being able to manipulate that data its mandatory to create today\'s products.'); ?>.
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
                        <?php pll_e('Think like a computer and create top-quality algorithms: Loops, conditionals, functions, variables, etc'); ?>.
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="media">
                      <div class="media-left">
                        <?php wpas_get_inline_svg('assets/icons/inline','research.svg'); ?>
                      </div>
                      <div class="media-body">
                        <span id="bar-breakpoint"></span>
                        <h5 id="search-and-research" class="media-heading"><?php pll_e('Search and Research'); ?></h5>
                        <?php pll_e('Most of the specs are poor and lack details. Sometimes the best developers are those that find examples faster than anyone. Learning to search key to success!'); ?>
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
    <section id="pricing" class="pricing-calculator bg-white text-black pt-md-5 pb-5">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-6 mx-auto">
            <h2 class="text-center"><?php pll_e('Pricing & Financing'); ?></h2>
            <h4 class='text-center'><?php pll_e('Pick your payment plan, no extra fees or hidden costs, everything is included'); ?></h4>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-6 upfront'>
            <div class='row mb-3'>
              <div class='col-12'>
                <div class="card card-block card-primary card-inverse bg-yellow mb-3">
                  <div class="card-body p-4 mb-3 mt-2">
                    <h4 class="card-title text-center"><?php pll_e('Pay Up-Front'); ?></h4>
                    <h3 class="card-text text-center">$8,999</h3>
                  </div>
                </div>
              </div>
              <div class='col-12 d-none d-md-block'>
                <div class='row mb-3'>
                  <div class='col-sm-12'>
                    <div class="card card-block card-primary bg-light mb-3">
                      <div class="card-body text-center">
                        <p><?php pll_e('Enjoy the best price in town'); echo '<br />'; pll_e('Pay up-front now with no extra or hidden fees'); ?></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-sm-12 text-center'>
                  <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class="btn btn-danger btn-lg"><?php pll_e('Apply to 4Geeks Academy'); ?></a>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-6 text-center'>
            <div class='row'>
              <div class='col-12'>
                <div class="card card-block card-primary card-inverse bg-yellow payment-plan">
                  <div class="card-body">
                    <h5 class="card-title m-0 text-center"><?php pll_e('Or Extended Payment Plan'); ?></h5>
                    <h4 id="price-label" class="card-text text-center">$1000 deposit + $384 / month</h4>
                  </div>
                  <div class="card-footer">
                    <input class="pricing-slider" data-slider-value="2" data-slider-id='pricing-slider-instance' data-slider-ticks-snap-bounds="100" type="text" data-slider-ticks="[0, 1, 2]" data-slider-ticks-labels='["6 months", "12 mo.", "24 mo."]' ticks_positions="[0, 50, 100]" />
                  </div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row'>
                  <div class='col-12 mt-2'>
                    <div class="card card-block card-primary bg-light mb-3">
                  <div class="card-body">
                    <p id="financing-details"><?php pll_e('Thanks to our partnership with Skillfund we have managed to create a new special payment plant <strong>starting at $135/mo</strong>'); ?></p>
                  </div>
                </div>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-sm-6'>
                      <img class="card-img-top financing-logo" data-templateurl="<?php echo get_stylesheet_directory_uri(); ?>" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/skillsfund.png">
                  </div>
                  <div class='col-sm-6'>
                      <a data-applylink="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" href="http://4geeksacademy.skills.fund" class="financing-btn btn btn-danger btn-lg"><?php pll_e('Apply to Financing'); ?></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <?php include(locate_template('partials/common-testimonials.php')); ?>
  <?php get_footer(); ?>