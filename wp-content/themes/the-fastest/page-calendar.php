<?php 
/* Template Name: Calendar */
get_header(); 
$args = wpas_get_view_data();
?>
    <header class="masthead">
      <div class="container">
        <div class="row">
          <div class="col-md-10 mx-auto">
            <?php echo the_content(); ?>
          </div>
        </div>
      </div>
    </header>
    <section class="bg-white text-black filters pt-0 pb-0">
      <div class="row filters">
        <div class="col-12 col-sm-10 col-lg-8 col-xl-6 mx-auto">
          <p class="filter-label d-none d-md-inline"><?php pll_e('Show'); ?></p>
          <div class="dropdown type">
            <button id="typeSelector" data-key="type" class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <?php pll_e('courses'); ?>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item type-option" data-value="events" href="#"> <?php pll_e('events'); ?></a>
              <a class="dropdown-item type-option" data-value="course" href="#"> <?php pll_e('courses'); ?></a>
            </div>
          </div>
          <div class="dropdown languages">
            <button id="langSelector" data-key="lang" class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class='d-inline d-lg-none'><?php pll_e('in all langs'); ?></span>
                <span class='d-none d-lg-inline'><?php pll_e('in all languages'); ?></span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
          <div class="dropdown cities">
            <button id="locationSelector" data-key="l" class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class='d-inline d-lg-none'><?php pll_e('& locations'); ?></span>
              <span class='d-none d-lg-inline'><?php pll_e('at all locations'); ?></span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item location-option" href="#" data-value="all">
                <span class='d-inline d-lg-none'><?php pll_e('& locations'); ?></span>
                <span class='d-none d-lg-inline'><?php pll_e('at all locations'); ?></span>
              </a>
              <?php if(!isset($_GET['type']) || $_GET['type']!='events') foreach($args['locations'] as $l){ ?>
              <a class="dropdown-item location-option" href="#" data-value="<?php echo $l['bc_location_slug']; ?>">
                <?php echo $l['short-title']; ?>
                <?php wpas_get_inline_svg('assets/icons/flags/inline',$l['flag'].'.svg'); ?>
              </a>
              <?php } ?>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black courses pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-10 col-xl-8 mx-auto">
            <?php if(empty($args['courses']) and empty($args['events'])) 
              echo '<div class="alert alert-warning" role="alert">There are no courses or events with this requierments.</div>';
            ?>
            <div class='loading-animation'>
              <?php wpas_get_inline_svg('assets/icons/inline','loading.svg'); ?>
            </div>
            <ul class="list-group">
              <?php if(count($args['courses'])>0) foreach ($args['courses'] as $course){ ?>
              <li class="list-group-item">
                <div class="media">
                  <div class="media-left">
                    <p class='event-date'><?php echo $course['day']; ?></p>
                    <p class='event-month'><?php echo $course['month']; ?></p>
                    <p class='event-year'><?php echo $course['year']; ?></p>
                  </div>
                  <div class="media-body text-left pb-0 course-body">
                    <h3 class="media-heading mt-0"><a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('the-program') ) ); ?>"><?php echo $course['name']; ?></a></h3>
                    <div class="row additional-details">
                      <div class="col-9 col-sm-6"><span class="imoon icon-location"></span> <?php echo $course['location']; ?></div>
                      <div class="col-3  col-sm-4 col-md-3 d-none d-sm-block">
                        <span class='d-md-none'><?php pll_e('from'); ?> $240 p/m</span>
                        <span class='d-none d-md-block'><?php pll_e('from'); ?> $240 p/m</span>
                      </div>
                      <div class="col-3 col-sm-2 col-lg-3">
                        <?php wpas_get_inline_svg('assets/icons/flags/inline',$course['icon'].'.svg'); ?>
                        <span class='language d-none d-md-block d-lg-none'><?php echo substr($course['language'],0,3); ?></span>
                        <span class='language d-none d-lg-block'><?php echo $course['language']; ?></span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <?php } ?>
              <?php if(!empty($args['events'])) foreach ($args['events'] as $event){ ?>
              <li class="list-group-item">
                <div class="media">
                  <div class="media-left">
                    <p class='event-date'><?php echo $event['day']; ?></p>
                    <p class='event-month'><?php echo $event['month']; ?></p>
                    <p class='event-year'><?php echo $event['year']; ?></p>
                  </div>
                  <div class="media-body text-left pb-0">
                    <div class="row">
                      <div class="col-12 col-sm-8">
                        <h3 class="media-heading mt-0"><a href="<?php echo $event['ticket_url']; ?>"><?php echo $event['post_title']; ?></a></h3>
                        <p class='d-block d-sm-inline mb-0'><strong>Starts: <?php echo $event['event_start_time']; ?></strong></p>
                        <p class='d-block d-sm-inline mt-0'><strong>at <span class="imoon icon-location"></span> <?php echo $event['address']; ?></strong></p> 
                        <p><?php echo $event['post_content']; ?></p>
                      </div>
                      <div class="col-12 col-sm-4 text-right-sm text-center">
                          <a href="<?php echo $event['ticket_url']; ?>" class="btn btn-secondary mt-3 mb-3 text-white">Learn more</a>
                      </div>
                    </div>
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