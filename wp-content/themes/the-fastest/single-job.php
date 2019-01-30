<?php 
    /* Template Name: Single Job */
    get_header('visualcomposer'); 
    $args = wpas_get_view_data();
?>
  <div class="container">
    <div class="row mt-5 mb-5 job-header">
      <div class="col-sm-8">
        <h1 class="mb-0 text-left"><span>Looking for:</span> <?php echo $args['wp_query']->post_title; ?></h1>
        <h4>
          Cities:
          <?php foreach($args['locations'] as $l){ ?>
            <span class='badge bg-light'><?php echo $l['post_title']; ?></span>
          <?php } ?>
        </h4>
      </div>
      <div class="col-sm-4 text-center p-3 ">
        <a href="#" class='job-apply btn btn-lg btn-danger w-100' >Apply to the Job</a>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-white mb-0">
    <section class="container pt-3 pb-3">
      <div class="row">
        <div class="col-12">
          <?php echo do_shortcode($args['wp_query']->post_content); ?>
        </div>
      </div>
    </section>
    <section class="bg-light pt-3 pb-3">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="text-center">More about 4Geeks Academy</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6">
            <p>4Geeks Academy was founded in 2015. What started as an internal project to train more developers has now become our full-time passion.</p>
            <p>4Geeks is today a USA based Coding Bootcamp pursuing to build a new framework for Coding Education, because coding is becoming an essential part of our society.</p>
            <p>4Geeks Academy has now Locations in 3 cities, 5 on-going campuses, and more than 200 graduates.</p>
          </div>
          <div class="col-12 col-sm-6">
            <div style="width: 100%; height: 200px; border-radius: 10px; background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/img/team.png'); backgorund-position: center center; background-size: cover;"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
<?php get_footer(); ?>