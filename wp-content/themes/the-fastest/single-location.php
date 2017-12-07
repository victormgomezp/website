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
            <h1>
              Learn the skills of the future in &nbsp;
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
            </h1>
            <form class="form-inline mt-3 mt-sm-4">
              <a href="#tourModal"  data-toggle="modal" data-target="#tourModal" class='btn btn-lg btn-light mr-3'><?php pll_e('Request a tour'); ?></a>
              <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class='btn btn-lg btn-danger'><?php pll_e('Apply Now'); ?></a>
            </form>
          </div>
        </div>
        <div class="row certified">
          <div class="col-sm-12 col-md-5 col-lg-4 col-xl-3 ml-auto florida">
            Certified by 
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
    <section class="bg-white text-black contact pt-0 pb-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6 pt-md-5">
            <address>
              <h4 class="section-heading text-black">Find us in <?php echo $args['current-location']['post_title']; ?></h4>
              <p><?php echo $args['current-location']['post_content']; ?></p>
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
          <div class="col-12">
            <?php if(!empty($args['upcoming-cohorts'])) { ?>
              <h4 class="section-heading text-black text-center mb-4 mt-2">Upcoming Courses at this location</h4>
            <?php } else { ?>
              <h4 class="section-heading text-black text-center mb-4 mt-2">No upcoming courses at this location</h4>
            <?php } ?>
              <div class="row">
                <?php if(!empty($args['upcoming-cohorts'])) foreach($args['upcoming-cohorts'] as $course){ ?>
  							<div class="col-12 col-md-6 mx-auto">
  							  <div class="media">
                      <img class="media-left" alt="Image" src="<?php echo $course['featured_image']; ?>">
                      <div class="media-body text-left">
                        <h4 class="card-title">
                          <a href="<?php echo get_permalink($course['id']); ?>">
                            <?php echo $course['name']; ?>
                          </a>
                        </h4>
                        <p class="card-text"><?php wpas_get_inline_svg('assets/icons/inline','calendarstroke.svg'); ?> <?php echo $course['day']; ?> <?php echo $course['month']; ?>, <?php echo $course['year']; ?></p>
                        <p class="card-text"><span class="imoon icon-location"></span> <?php echo $course['location']; ?></p>
                      </div>
                  </div>
  							</div>
                <?php } ?>
  						</div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black location-showcase pt-5 pb-5">
      <div class="container">
        <div class="col-10 mx-auto p-5 center-box" style="background-image: url('<?php echo $args['current-location']['office_image']; ?>');">
          <div class="row">
            <div class=" col-md-8 mx-auto location-description">
                <h4 class="section-heading text-black text-center">The best enviroment to learn</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                in futurum.</p>
            </div>
        </div>
        </div>
      </div>
    </section>
    <section class="bg-light text-black upcoming-events pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <?php if(!empty($args['events'])) { ?>
              <h4 class="section-heading text-black text-center">Upcoming Events at this location</h4>
            <?php } else { ?>
              <h4 class="section-heading text-black text-center">No upcoming Events at this location</h4>
            <?php } ?>
              <div class="row">
                <?php if(!empty($args['events'])) foreach($args['events'] as $event){ ?>
  							<div class="col-12 col-md-6 mx-auto">
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
  							</div>
                <?php } ?>
  						</div>
          </div>
        </div>
      </div>
    </section>
    <?php include(locate_template('partials/common-testimonials.php')); ?>
  <?php get_footer(); ?>