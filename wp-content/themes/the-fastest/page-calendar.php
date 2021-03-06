<?php 
/* Template Name: Calendar */
get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead masthead-white">
      <div class="container">
        <div class="row">
          <div class="col-md-10 mx-auto">
            <h1 class="mb-5 text-black"><?php pll_e('Upcoming programs workshops and events'); ?></h1>
            <h3>
              Select a location: 
              <div class="dropdown cities dropdown-selector ml-sm-3">
                <button id="locationSelector" data-key="l" class="dropdown-toggle btn-primary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span><?php pll_e('all locations'); ?></span>
                </button>
                <div class="dropdown-menu dropdown-filter" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item location-option" href="#" data-value="all">
                    <span><?php pll_e('all locations'); ?></span>
                  </a>
                  <?php if(!isset($_GET['type']) || $_GET['type']!='events') foreach($args['locations'] as $l){ ?>
                  <a class="dropdown-item location-option" href="#" data-value="<?php echo $l['bc_location_slug']; ?>">
                    <?php echo $l['post_title']; ?>
                    <?php wpas_get_inline_svg('assets/icons/flags/inline',$l['flag'].'.svg'); ?>
                  </a>
                  <?php } ?>
                </div>
              </div>
            </h3>
            <h3><?php pll_e('to discover our available courses, workshops and events'); ?>.</h3>
          </div>
        </div>
      </div>
    </header>
    <section class="bg-white text-black filters pt-0 pb-0" data-toggle="sticky-onscroll">
      <div class="row filters">
        <div class="col-12 col-sm-10 col-lg-8 col-xl-6 mx-auto">
          <p class="filter-label d-none d-md-inline"><?php pll_e('Discover'); ?></p>
          <div class="dropdown type dropdown-selector">
            <button id="typeSelector" data-key="type" class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <?php pll_e('courses'); ?>
            </button>
            <div class="dropdown-menu dropdown-filter" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item type-option" data-value="event" href="#"> <?php pll_e('events'); ?></a>
              <a class="dropdown-item type-option" data-value="course" href="#"> <?php pll_e('courses'); ?></a>
              <a class="dropdown-item type-option" data-value="workshop" href="#"> <?php pll_e('workshops'); ?></a>
            </div>
          </div>
          <div class="dropdown languages dropdown-selector">
            <button id="langSelector" data-key="lang" class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class='d-inline d-lg-none'><?php pll_e('in all langs'); ?></span>
                <span class='d-none d-lg-inline'><?php pll_e('in all languages'); ?></span>
            </button>
            <div class="dropdown-menu dropdown-filter" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item lang-option" href="#" data-value="all">
                <span class='d-inline d-lg-none'><?php pll_e('in all langs'); ?></span>
                <span class='d-none d-lg-inline'><?php pll_e('in all languages'); ?></span>
              </a>
              <?php if(!isset($_GET['type']) || $_GET['type']!='events'){ ?>
              <a class="dropdown-item lang-option" data-value="en" href="#">in english <?php wpas_get_inline_svg('assets/icons/flags/inline','unitedstates.svg'); ?></a>
              <a class="dropdown-item lang-option" data-value="es" href="#">en español <?php wpas_get_inline_svg('assets/icons/flags/inline','spain.svg'); ?></a>
              <?php } ?>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black courses pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-10 col-xl-10 mx-auto">
            <?php if(empty($args['courses']) and empty($args['events']) and empty($args['workshops'])) 
              echo '<div class="alert alert-warning" role="alert">It seems we could not found any results.</div>';
            ?>
            <div class='loading-animation'>
              <?php wpas_get_inline_svg('assets/icons/inline','loading.svg'); ?>
            </div>
            <ul class="list-group">
              <?php 
              /**
               * Render the courses
               **/
              if($args['selected_type']=='course' && !empty($args['courses'])) foreach($args['courses'] as $course){ ?>
              <li class="list-group-item course-body text-left">
                <div class="row mb-4 mb-md-0">
                  <div class="col-md-8">
                    <h3 class="media-heading mt-0"><a href="<?php echo get_permalink($course['id']); ?>"><?php echo $course['name']; ?></a></h3>
                    <p><?php echo $course['short_description']; ?></p>
                  </div>
                  <div class="col-md-4 text-left">
                    <h5><?php pll_e('Additional Info'); ?></h5>
                    <ul>
                      <li>
                          <?php pll_e('Duration'); ?>: <?php echo $course['hr_duration']; ?> hrs (<?php echo $course['week_duration']; ?> wks)
                      </li>
                      <li>
                        <?php wpas_get_inline_svg('assets/icons/flags/inline',$course['icon'].'.svg'); ?>
                        <span class='language'><?php echo $course['language']; ?></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row course-info">
                  <div class="col-5 col-md-3">
                    <span class="course-date">
                      <?php wpas_get_inline_svg('assets/icons/inline','calendarstroke.svg'); ?> 
                      <?php echo $course['day']; ?> <?php echo $course['month']; ?>, <?php echo $course['year']; ?>
                    </span>
                  </div>
                  <div class="col-7 col-md-9">
                      <span class="imoon icon-location"></span>
                      <a href="<?php echo get_permalink($course['location_id']); ?>"><?php echo $course['location']; ?></a>
                  </div>
                </div>
              </li>
              <?php } ?>
              <?php 
              /**
               * Render the events
               **/
              if(!empty($args['events'])) foreach ($args['events'] as $event){ ?>
              <li class="list-group-item event-body">
                <div class="text-left pb-0">
                  <div class="row">
                    <div class="col-12 col-sm-8">
                      <h3 class="media-heading mt-0"><a href="<?php echo $event['url']; ?>"><?php echo $event['name']; ?></a></h3>
                      <!--<p class='d-block d-sm-inline mb-0'><strong>Starts: <?php echo $event['event_start_time']; ?></strong></p>-->
                      <p class='d-block d-sm-inline mt-0'>
                          <strong>
                            at <span class="imoon icon-location"></span> 
                            <a href="<?php echo get_permalink($course['location_id']); ?>"><?php echo $event['address']; ?></a>
                          </strong>
                      </p> 
                      <p><?php echo $event['excerpt']; ?></p>
                    </div>
                    <div class="col-12 col-sm-4 text-right-sm text-center">
                        <span class="course-date">
                          <?php wpas_get_inline_svg('assets/icons/inline','calendarstroke.svg'); ?> 
                          <?php echo $event['day']; ?> <?php echo $event['month']; ?>, <?php echo $event['year']; ?>
                        </span>
                        <a href="<?php echo $event['url']; ?>" class="btn btn-secondary mt-3 mb-3 text-white">Learn more</a>
                    </div>
                  </div>
                </div>
              </li>
              <?php } ?>
              <?php 
              /**
               * Render the whorshops
               **/
              if(!empty($args['workshops'])) foreach ($args['workshops'] as $workshop){ ?>
              <li class="list-group-item course-body text-left">
                <div class="row">
                  <div class="col-8">
                    <h3 class="media-heading mt-0"><a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('the-program') ) ); ?>"><?php echo $workshop['name']; ?></a></h3>
                    <p><?php echo $workshop['tagline']; ?></p>
                    <p class='course-info'>
                      <span class="course-date">
                        <?php wpas_get_inline_svg('assets/icons/inline','calendarstroke.svg'); ?> 
                        <?php echo $workshop['day']; ?> <?php echo $workshop['month']; ?>, <?php echo $workshop['year']; ?>
                      </span>
                      <span class="imoon icon-location"></span>
                      <a href="<?php echo get_permalink($course['location_id']); ?>"><?php echo $workshop['location']; ?></a>
                    </p>
                  </div>
                  <div class="col-4 text-left">
                    <h5>Additional Info</h5>
                    <ul>
                      <li>
                          <?php echo $workshop['duration']; ?> duration
                      </li>
                      <li>
                        <?php wpas_get_inline_svg('assets/icons/flags/inline',$workshop['icon'].'.svg'); ?>
                        <span class='language'><?php echo $workshop['language']; ?></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <?php } ?>
            </ul>
          </div>
        </div>
      </div>
    </section>
  <?php get_footer(); ?>