<?php $args = wpas_get_view_data(); ?>
    <section class="bg-primary text-center email-newsletter" id="about">
        <div class="container">
            <h4><?php pll_e('Subscribe to our Newsletter!'); ?></h4>
            <form class="form-inline newsletter-signup">
                <div class="form-group mx-auto">
                    <div class="alert alert-danger" style=" width: 100%; display: none;" role="alert"></div>
                    <label for="staticEmail2" class='text-right'><?php pll_e('Get updates right in your inbox. <br/>We promise to not spam you'); ?>.</label>
                    <input type="email" class="form-control newsletter-email" id="staticEmail2" placeholder="email@example.com" required>
                    <button type="submit" class="btn btn-secondary ml-0 ml-sm-3 mt-3 mt-sm-0 form-control"><?php pll_e('Subscribe'); ?></button>
                </div>
            </form>
        </div>
    </section>
    <?php if(!is_page('venezuela')){ ?>
        <footer>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-3 footer-pad address-section'>
                        <h3><?php pll_e('Contact'); ?></h3>
                        <hr />
                        <ul class="list-unstyled">
                            <li>
                                <?php pll_e('We are available Monday to Friday:'); ?><br/>
                                09:00am - 06:30pm
                            </li>
                            <li>
                                <address>
                                <a href="#">Starthub</a><br />
                                66 W Flagler Street, #900<br />
                                Miami, FL 33130<br />
                                P: <?php echo get_option('company-phone-number'); ?><br />
                                <?php echo get_option('company-email'); ?><br />
                                </address> 
                            </li>
                        </ul>
                    </div>
                    <div class='col-md-3'>
                        <h3><?php pll_e('Company'); ?></h3>
                        <hr />
                        <?php
                           wp_nav_menu([
                             'menu'            => 'Footer Company',
                             'theme_location'  => 'footer-company',
                             'container'       => false,
                             'menu_id'         => false,
                             'menu_class'      => 'list-unstyled company-section',
                             'depth'           => 2
                           ]);
                        ?>
                    </div>
                    <div class='col-md-3'>
                        <h3><?php pll_e('Locations'); ?></h3>
                        <hr />
                        <?php
                           wp_nav_menu([
                             'menu'            => 'Footer Locations',
                             'theme_location'  => 'footer-locations',
                             'container'       => false,
                             'menu_id'         => false,
                             'menu_class'      => 'list-unstyled company-section',
                             'depth'           => 2
                           ]);
                        ?>
                    </div>
                    <div class='col-md-3 text-center'>
                        <h5 class="mt-3 mb-3"><?php pll_e('licensed by'); ?> </h5>
                        <a target="_blank" rel="nofollow" href="http://www.fldoe.org/">
                          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/florida.png"></img>
                        </a>
                        <h5 class="mt-5 mb-3"><?php pll_e('We accept'); ?></h5>
                        <?php wpas_get_inline_svg('assets/icons/inline','bitcoin.svg'); ?>
                        <?php wpas_get_inline_svg('assets/icons/inline','ethereum.svg'); ?>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-12'>
                        <hr />
                    </div>
                </div>
                <div class='row'>
                    <div class='col-2 col-sm-1 text-left order-1'>
                        <img style="max-height: 40px;" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/icon-logo.png"></img>
                    </div>
                    <div class='col-12 col-sm-5 order-4 text-left order-sm-2'>
                        Copyright © <?php echo get_option('company-name'); ?> 2017. <br/> <?php pll_e('All rights reserved'); ?>.
                    </div>
                    <div class='col-10 col-sm-6 text-right order-3'>
                        <ul class="list-unstyled list-inline social-media">
                            <li class='list-inline-item'><a target="_blank" href="<?php echo get_option('company-github'); ?>"><span class="imoon icon-github"></span></a></li>
                            <li class='list-inline-item'><a target="_blank" href="<?php echo get_option('company-facebook'); ?>"><span class="imoon icon-facebook2"></span></a></li>
                            <li class='list-inline-item'><a target="_blank" href="<?php echo get_option('company-instagram'); ?>"><span class="imoon icon-instagram"></span></a></li>
                            <li class='list-inline-item'><a target="_blank" href="<?php echo get_option('company-twitter'); ?>"><span class="imoon icon-twitter"></span></a></li>
                            <li class='list-inline-item'><a target="_blank" href="<?php echo get_option('company-youtube'); ?>"><span class="imoon icon-youtube2"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div class="footer-bar fixed-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-10 col-md-12 col-lg-9 mx-auto">
                        <?php if(!empty($args['upcoming'])){ ?>
                        <div class="media">
                            <div class="media-left">
                                
                                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                	 viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 469.333 469.333;" xml:space="preserve">
                                <path style="fill:#303C42;" d="M469.333,85.333c0-23.531-19.146-42.667-42.667-42.667h-64v-32C362.667,4.771,357.896,0,352,0
                                	c-5.896,0-10.667,4.771-10.667,10.667v32h-192v-32C149.333,4.771,144.563,0,138.667,0S128,4.771,128,10.667v32H42.667
                                	C19.146,42.667,0,61.802,0,85.333v341.333c0,23.531,19.146,42.667,42.667,42.667h309.313v-0.004l0.021,0.004
                                	c2.771,0,5.5-1.083,7.542-3.125l106.667-106.667c2.034-2.042,2.708-4.767,2.711-7.542h0.414V85.333z"/>
                                <path style="fill:#D32F2F;" d="M42.667,64H128v21.333c-11.771,0-21.333,9.573-21.333,21.333S116.229,128,128,128
                                	c11.771,0,21.333-9.573,21.333-21.333V64h192v21.333c-11.771,0-21.333,9.573-21.333,21.333S329.563,128,341.333,128
                                	s21.333-9.573,21.333-21.333V64h64C438.438,64,448,73.573,448,85.333v64H21.333v-64C21.333,73.573,30.896,64,42.667,64z"/>
                                <g>
                                	<rect x="149.333" y="64" style="opacity:0.2;fill:#FFFFFF;enable-background:new    ;" width="192" height="10.667"/>
                                	<path style="opacity:0.2;fill:#FFFFFF;enable-background:new    ;" d="M42.667,74.667H128V64H42.667
                                		c-11.771,0-21.333,9.573-21.333,21.333V96C21.333,84.24,30.896,74.667,42.667,74.667z"/>
                                	<path style="opacity:0.2;fill:#FFFFFF;enable-background:new    ;" d="M426.667,64h-64v10.667h64C438.438,74.667,448,84.24,448,96
                                		V85.333C448,73.573,438.438,64,426.667,64z"/>
                                	<path style="fill:#FFFFFF;" d="M341.333,384v64H42.667c-11.771,0-21.333-9.573-21.333-21.333v-256H448v170.667h-64
                                		C360.479,341.333,341.333,360.469,341.333,384z"/>
                                </g>
                                <path style="fill:#E6E6E6;" d="M362.667,432.917V384c0-11.76,9.563-21.333,21.333-21.333h48.917L362.667,432.917z"/>
                                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-61.0365" y1="621.1511" x2="-47.0365" y2="607.1511" gradientTransform="matrix(21.3333 0 0 -21.3333 1430.1112 13315.2227)">
                                	<stop  offset="0" style="stop-color:#000000;stop-opacity:0.1"/>
                                	<stop  offset="1" style="stop-color:#000000;stop-opacity:0"/>
                                </linearGradient>
                                <g>
                                <text x="130" y="330" style="font-weight: bold; font-size: 200px;" fill="#303C42"><?php echo $args['upcoming']['day']; ?></text>
                                <text x="140" y="420" style="font-weight: bold; font-size: 95px;" fill="#303C42"><?php echo $args['upcoming']['month']; ?></text>
                                </g><path style="fill:url(#SVGID_2_);" d="M469.333,85.333c0-23.531-19.146-42.667-42.667-42.667h-64v-32C362.667,4.771,357.896,0,352,0
                                	c-5.896,0-10.667,4.771-10.667,10.667v32h-192v-32C149.333,4.771,144.563,0,138.667,0S128,4.771,128,10.667v32H42.667
                                	C19.146,42.667,0,61.802,0,85.333v341.333c0,23.531,19.146,42.667,42.667,42.667h309.313v-0.004l0.021,0.004
                                	c2.771,0,5.5-1.083,7.542-3.125l106.667-106.667c2.034-2.042,2.708-4.767,2.711-7.542h0.414V85.333z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
                                </g></svg>
                            </div>
                            <div class="media-body pl-0 pl-sm-2">
                                <h4 class='mt-0 mt-sm-2'><?php pll_e('Our next cohort starts on'); ?> <?php echo $args['upcoming']['date']; ?></h4>
                                <h5 class=""><?php echo $args['upcoming']['name']; ?></h5>
                            </div>
                            <div class="media-right">
                                <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('apply') ) ); ?>" class='btn btn-danger mb-1 apply-btn'><?php pll_e('Apply now'); ?></a>
                                <p>or <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('calendar') ) ); ?>?type=course"><?php pll_e('review other dates'); ?></a></p>
                            </div>
                        </div>
                        <?php } else { ?>
                        <div class="media">
                            <div class="media-body pl-0 pl-sm-2 mt-sm-1">
                                <h4 class='mt-0 mt-sm-2'><?php echo (!empty($args['upcoming-message']) && !empty($args['upcoming-message']["message"])) ? $args['upcoming-message']["message"] : 'No upcoming dates scheduled for this course'; ?></h4>
                            </div>
                            <div class="media-right">
                                <a href="<?php echo get_permalink( get_page_by_path( wpas_pll_get_slug('calendar') ) ); ?>?type=course" class='btn btn-danger mt-1 apply-btn'><?php echo (!empty($args['upcoming-message']) && !empty($args['upcoming-message']["btn-message"])) ? $args['upcoming-message']["btn-message"] : pll__('Review other courses'); ?></a>
                            </div>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    <?php } else { ?>
        <footer>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-3 footer-pad address-section'>
                        <ul class="list-unstyled">
                            <li>
                                <?php pll_e('We are available Monday to Friday:'); ?><br/>
                                09:00am - 06:30pm
                            </li>
                            <li>
                                <address>
                                Av Ppal de Los Cortijos<br />
                                Torre Bravasol, Oficina 1B<br />
                                P: <?php echo get_option('company-phone-number'); ?><br />
                                <?php echo get_option('company-email'); ?><br />
                                </address> 
                            </li>
                        </ul>
                    </div>
                    <div class='col-md-3'></div>
                    <div class='col-md-3'></div>
                    <div class='col-md-3'>
                        <h5 class="mt-5 mb-3"><?php pll_e('We accept'); ?></h5>
                        <?php wpas_get_inline_svg('assets/icons/inline','bitcoin.svg'); ?>
                        <?php wpas_get_inline_svg('assets/icons/inline','ethereum.svg'); ?>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-12'>
                        <hr />
                    </div>
                </div>
                <div class='row'>
                    <div class='col-2 col-sm-1 text-left order-1'>
                        <img style="max-height: 40px;" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/icon-logo.png"></img>
                    </div>
                    <div class='col-12 col-sm-5 order-4 text-left order-sm-2'>
                        Copyright © <?php echo get_option('company-name'); ?> 2017. <br/> <?php pll_e('All rights reserved'); ?>.
                    </div>
                    <div class='col-10 col-sm-6 text-right order-3'>
                        <ul class="list-unstyled list-inline social-media">
                            <li class='list-inline-item'><a target="_blank" href="<?php echo get_option('company-github'); ?>"><span class="imoon icon-github"></span></a></li>
                            <li class='list-inline-item'><a target="_blank" href="<?php echo get_option('company-facebook'); ?>"><span class="imoon icon-facebook2"></span></a></li>
                            <li class='list-inline-item'><a target="_blank" href="<?php echo get_option('company-instagram'); ?>"><span class="imoon icon-instagram"></span></a></li>
                            <li class='list-inline-item'><a target="_blank" href="<?php echo get_option('company-twitter'); ?>"><span class="imoon icon-twitter"></span></a></li>
                            <li class='list-inline-item'><a target="_blank" href="<?php echo get_option('company-youtube'); ?>"><span class="imoon icon-youtube2"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    <?php } ?>
        <?php get_template_part('partials/modal','free-coding-intro'); ?>
        <div id="syllabusModal" class="modal fade mt-5" tabindex="-1" role="dialog" aria-labelledby="syllabusModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content p-3 text-center">
                <h3><?php pll_e('Request syllabus'); ?></h3>
                <p><?php pll_e('Please fill out this form to receive our syllabus and program catalog'); ?>.</p>
                <div class="mb-4">
                    <form class="form-inline text-center syllabus-download d-inline">
                        <div class="alert alert-danger" style=" width: 100%; display: none;" role="alert"></div>
                        <input type="text" class="form-control mr-sm-3 mb-1 mb-sm-0" name="" placeholder="Your first name" required/>
                        <input type="email" class="form-control" name="" placeholder="Your email" required/>
                        <button class="btn btn-secondary form-control ml-md-3 ml-0 mt-3 mt-sm-0"><?php pll_e('Download'); ?></button>
                    </form>
                </div>
            </div>
          </div>
        </div>
        <div id="tourModal" class="modal fade mt-5" tabindex="-1" role="dialog" aria-labelledby="tourModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content p-3 text-center">
                <h4><?php pll_e('Please select the location you want to the tour'); ?>.</h4>
                <div class="dropdown cities dropdown-selector">
                    <button id="locationSelector" data-key="l" class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>Select a location</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <?php if(!empty($args['locations']) && is_array($args['locations'])) foreach($args['locations'] as $l){ ?>
                            <a class="dropdown-item location-option" href="<?php echo get_permalink($l['ID']); ?>" data-value="<?php echo $l['bc_location_slug']; ?>">
                            <?php echo $l['post_title']; ?>
                            <?php wpas_get_inline_svg('assets/icons/flags/inline',$l['flag'].'.svg'); ?>
                            </a>
                        <?php } ?>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div id="upcomingEvent" class="modal mt-5" tabindex="-1" role="dialog" aria-labelledby="upcomingEventModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-header">
                <h2 class="modal-title text-center text-white mt-0"><?php pll_e('Upcoming event'); ?></h2>
            </div>
            <div class="modal-content">
                <div class="row">
                    <div class="col-3 col-sm-3 col-lg-2 pr-0 pt-2">
                        <div class="event-date text-center m-1 m-sm-4">
                            <p class='day'></p>
                            <p class='month'></p>
                            <p class='year'></p>
                        </div>
                                            
                    </div>
                    <div class="col-9 col-lg-10">
                        <h3 class='event-title'>Loading...</h3>
                        <h5 class='event-details'></h5>
                        <p class='event-description pr-3'></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-right">
                    </div>
                </div>
            </div>
            <div class="modal-footer pr-0">
                <a href="#" class="btn btn-secondary btn-lg" data-dismiss="modal"><?php pll_e('Close'); ?></a>
                <a target="_blank" href="#" class="btn btn-danger btn-lg"><?php pll_e('Learn more'); ?></a>
            </div>
          </div>
        </div>
    <?php wp_footer(); ?>
    <?php wpas_footer(); ?>
    </body>
</html>