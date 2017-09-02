    <?php use TF\WPASAsyncLoader; ?>
    <section class="bg-primary text-center email-newsletter" id="about">
        <div class="container">
            <h4>Subscribe to our Newsletter!</h4>
            <form class="form-inline">
                <div class="form-group">
                    <label for="staticEmail2" class='text-right'>Get updates right in your inbox. <br/>We promise to not you spam.</label>
                    <input type="text" readonly class="form-control" id="staticEmail2" value="email@example.com">
                    <button type="submit" class="btn btn-default">Sign Up</button>
                </div>
            </form>
        </div>
    </section>
    <footer>
        <div class='container'>
            <div class='row'>
                <div class='col-md-3 footer-pad address-section'>
                    <h3>Contact</h3>
                    <hr />
                    <ul class="list-unstyled">
                        <li>
                            We are available Monday to Friday: 
                            09:00am - 06:30pm
                        </li>
                        <li>
                            <address>
                            <a href="#">Starthub</a><br />
                            66 W Flagler Street, #900<br />
                            Miami, FL 33130<br />
                            P: +1 (786) 888.2491<br />
                            info@4GeeksAcademy.com<br />
                            </address> 
                        </li>
                    </ul>
                </div>
                <div class='col-md-3'>
                    <h3>Company</h3>
                    <hr />
                    <ul class="list-unstyled company-section">
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class='col-md-3'>
                    <h3>Locations</h3>
                    <hr />
                    <ul class="list-unstyled">
                        <li>Downtown Miami, USA</li>
                        <li>Miami Dade College, USA</li>
                        <li>El Nacional, Caracas</li>
                        <li>Impact Hub, Caracas</li>
                        <li>Maracaibo, Vzla</li>
                    </ul>
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
                    Copyright © 4Geeks Academy LLC 2017. <br/> All rights reserved.
                </div>
                <div class='col-10 col-sm-6 text-right order-3'>
                    <ul class="list-unstyled list-inline social-media">
                        <li class='list-inline-item'><a href="#"><span class="imoon icon-github"></span></a></li>
                        <li class='list-inline-item'><a href="#"><span class="imoon icon-facebook2"></span></a></li>
                        <li class='list-inline-item'><a href="#"><span class="imoon icon-instagram"></span></a></li>
                        <li class='list-inline-item'><a href="#"><span class="imoon icon-twitter"></span></a></li>
                        <li class='list-inline-item'><a href="#"><span class="imoon icon-youtube2"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
    <?php echo WPASAsyncLoader::loadScripts(); ?>
    </body>
</html>