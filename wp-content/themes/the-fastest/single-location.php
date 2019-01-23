<?php
/*
Template Name: Single Location
Template Post Type: location
*/
get_header('visualcomposer'); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="header-content">
        <div class="row">
          <div class="col-sm-10 col-md-10 col-lg-9 col-xl-7 mx-auto">
            <h1>4Geeks Academy <?php echo $args['current-location']['post_title']; ?></h1>
            <h2 class="text-center mt-5 mb-5">
              <?php pll_e('4Geeks Academy in'); ?>&nbsp;
              <div class="dropdown cities dropdown-selector">
                <button id="locationSelector" data-key="l" class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span><?php echo $args['current-location']['post_title']; ?></span>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <?php foreach($args['locations'] as $l){ ?>
                  <a class="dropdown-item location-option" href="<?php echo get_permalink($l['ID']); ?>" data-value="<?php echo $l['bc_location_slug']; ?>">
                    <?php echo $l['post_title']; ?>
                    <?php wpas_get_inline_svg('assets/icons/flags/inline',$l['flag'].'.svg'); ?>
                  </a>
                  <?php } ?>
                </div>
              </div>
            </h2>
            <form class="mt-3 mt-sm-4 text-center">
              <!--<a href="#tourModal"  data-toggle="modal" data-target="#tourModal" class='btn btn-lg btn-light mr-3'><?php pll_e('Request a tour'); ?></a>-->
              <!--<a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class='btn btn-lg btn-danger'><?php pll_e('Apply Now'); ?></a>-->
            </form>
          </div>
        </div>
      </div>
      <!-- -->
      <div class="container d-none d-sm-block badges mt-5 mb-5 text-white text-center">
        <div class="card-deck">
          <div class="card">
            <a target="_black" rel="nofollow" href="https://www.switchup.org/bootcamps/4geeks-academy"><?php wpas_get_inline_svg('assets/icons/badges/inline','black1.1.svg'); ?></a>
          </div>
          <div class="card">
            <a target="_black" rel="nofollow" href="https://www.newsweek.com/insights/coding-career-and-you-top-coding-schools-2017/4geeks-academy"><?php wpas_get_inline_svg('assets/icons/badges/inline','black1.2.svg'); ?></a>
          </div>
          <div class="card d-none d-lg-block">
            <?php wpas_get_inline_svg('assets/icons/badges/inline','black1.3.svg'); ?>
          </div>
          <div class="card">
            <?php wpas_get_inline_svg('assets/icons/badges/inline','black1.4.svg'); ?>
          </div>
        </div>
      </div>
    </header>
    <!-- -->
    <!-- -->
    <section class="bg-white text-black contact pt-0 pb-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6 pt-md-5">
            <address>
              <h4 class="section-heading text-black">Find us in <?php echo $args['current-location']['post_title']; ?></h4>
              <p class="text-left"><?php echo $args['current-location']['post_content']; ?></p>
              <h4 class="section-heading text-black">Contact</h4>
              <p><?php echo $args['current-location']['phone']; ?></p>
              <p><?php echo $args['current-location']['email']; ?></p>
            </address>
          </div>
          <div class="col-md-6">
            <div class="google-maps">
              <?php echo $args['current-location']['map']; ?>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light text-black upcoming-courses pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 mx-auto">
            <?php if(!empty($args['upcoming-cohorts'])) { ?>
              <h4 class="section-heading text-black text-center mb-4 mt-2">Upcoming Courses at this location</h4>
            <?php } else { ?>
              <h4 class="section-heading text-black text-center mb-4 mt-2">No upcoming courses at this location</h4>
            <?php } ?>
            <?php if(!empty($args['upcoming-cohorts'])) foreach($args['upcoming-cohorts'] as $course){ ?>
				      <div class="card">
                <h4 class="card-title">
                  <a href="<?php echo get_permalink($course['id']); ?>">
                    <?php echo $course['name']; ?>
                  </a>
                </h4>
                <ul>
                  <li>
                    <?php wpas_get_inline_svg('assets/icons/inline','calendarstroke.svg'); ?> <?php echo $course['day']; ?> <?php echo $course['month']; ?>, <?php echo $course['year']; ?>
                  </li>
                  <li>
                    - <?php echo $course['hr_duration']; ?> hrs (<?php echo $course['week_duration']; ?> wks)
                  </li>
                  <li>
                    <?php wpas_get_inline_svg('assets/icons/flags/inline',$course['icon'].'.svg'); ?>
                    <span class='language'><?php echo $course['language']; ?></span>
                  </li>
                </ul>
              </div>
            <?php } ?>
          </div>
          <?php if(!empty($args['events'])) { ?>
          <div class="col-12 col-sm-6 mx-auto">
              <h4 class="section-heading text-black text-center"><?php pll_e('Upcoming Events at this location'); ?></h4>
            <?php foreach($args['events'] as $event){ ?>
						  <div class="media">
                  <img class="media-left" alt="Image" src="http://via.placeholder.com/160x100">
                  <div class="media-body text-left">
                    <h4 class="card-title"><?php echo $event['post_title']; ?></h4>
                    <p class="card-text">
                      <?php wpas_get_inline_svg('assets/icons/inline','calendarstroke.svg'); ?>
                      <?php echo $event['day']; ?> <?php echo $event['month']; ?>, <?php echo $event['year']; ?>
                    </p>
                    <p class="card-text">Starts: <?php echo $event['event_start_time']; ?></p>
                  </div>
              </div>
            <?php } ?>
          </div>
          <?php } ?>
        </div>
      </div>
    </section>
    <section class="bg-white text-black location-showcase p-0">
        <div class="row">
          <div class="col-md-6">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item">
                  <img class="d-block w-100 mb-0" alt="4Geeks Academy <?php echo $args['current-location']['post_title']; ?> Location 1" src="<?php echo $args['current-location']['office_image'];  ?>" data-holder-rendered="true">
                </div>
                <?php if($args['current-location']['office_image2']){ ?>
                <div class="carousel-item active">
                  <img class="d-block w-100 mb-0" alt="4Geeks Academy <?php echo $args['current-location']['post_title']; ?> Location 2" src="<?php echo $args['current-location']['office_image2'];  ?>" data-holder-rendered="true">
                </div>
                <?php } ?>
                <?php if($args['current-location']['office_image3']){ ?>
                <div class="carousel-item">
                  <img class="d-block w-100 mb-0" alt="4Geeks Academy <?php echo $args['current-location']['post_title']; ?> Location 3" src="<?php echo $args['current-location']['office_image3'];  ?>" data-holder-rendered="true">
                </div>
                <?php } ?>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="col-md-6 pt-md-5">
            <h4 class="section-heading text-black"><?php pll_e('What you should know about this location:'); ?></h4>
            <p class="text-left"><?php echo $args['current-location']['should_know']; ?></p>
          </div>
        </div>
    </section>
    <?php include(locate_template('partials/common-testimonials.php')); ?>
  <?php get_footer(); ?>