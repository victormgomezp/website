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