<?php

namespace TF\VCComponents;

class VCAboutTheProgram{
    
    const BASE_NAME = 'about-the-program';
    
    function __construct(){
        add_action( 'vc_before_init', array($this,'register'));
        add_shortcode( self::BASE_NAME, array($this,'render'));
    }
    
    function register()
    {
	   vc_map( array(
	      "name" => "About The Program",
	      "base" => self::BASE_NAME,
	      "category" => "BreatheCode",
	      "params" => array(
                array(
                    "type" => "textfield",
                    "holder" => "div",
                    "heading" => "Extra Classes",
                    "param_name" => "classnames",
                    "value" => "",
                    "description" => "Extra Classes"
                ),
            )
	   ) );
    }
    
	function render( $atts , $content = null) {
	    extract( shortcode_atts( array(
	      'classnames' => '',
	   ), $atts ) );
	   return '
        <div class="row about-the-program">
          <div class="col-md-9 col-sm-12 ml-auto multi-phase">
              <div class="row">
                  <div class="col-sm-4 p-0">
                      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                          <a class="nav-link active" id="v-pills-w1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-w1" aria-selected="true">
                            <span class="week-description">
                                '.pll__('Prework & Learn to Code').'
                                <small>2 '.pll__('weeks').'</small>
                                '.file_get_contents(get_template_directory_uri().'/assets/icons/inline-right.svg.php').'
                            </span>
                          </a>
                          <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="true">
                            <span>
                                '.pll__('Coding intensive').'
                                <small>8 '.pll__('weeks').'</small>
                                '.file_get_contents(get_template_directory_uri().'/assets/icons/inline-right.svg.php').'
                                <span class="sub-pills">
                                  <a class="nav-link pl-3 sub-pills" id="v-pills-21-tab" data-toggle="pill" href="#v-pills-21" role="tab" aria-controls="v-pills-21" aria-selected="true">
                                    <span class="week-subdescription">'.pll__('Javascript & Coding Fundamentals').'</span>
                                    '.file_get_contents(get_template_directory_uri().'/assets/icons/inline-right.svg.php').'
                                  </a>
                                  <a class="nav-link pl-3 sub-pills" id="v-pills-22-tab" data-toggle="pill" href="#v-pills-22" role="tab" aria-controls="v-pills-22" aria-selected="true">
                                    <span class="week-subdescription">'.pll__('Learn and master React.js').'</span>
                                    '.file_get_contents(get_template_directory_uri().'/assets/icons/inline-right.svg.php').'
                                  </a>
                                  <a class="nav-link pl-3 sub-pills" id="v-pills-23-tab" data-toggle="pill" href="#v-pills-23" role="tab" aria-controls="v-pills-23" aria-selected="true">
                                    <span class="week-subdescription">'.pll__("API's, Databases and Python").'</span>
                                    '.file_get_contents(get_template_directory_uri().'/assets/icons/inline-right.svg.php').'
                                  </a>
                                  <a class="nav-link pl-3 sub-pills" id="v-pills-24-tab" data-toggle="pill" href="#v-pills-24" role="tab" aria-controls="v-pills-24" aria-selected="true">
                                    <span class="week-subdescription">'.pll__('Build a Real-Life Application').'</span>
                                    '.file_get_contents(get_template_directory_uri().'/assets/icons/inline-right.svg.php').'
                                  </a>
                                </span>
                            </span>
                          </a>
                          <a class="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="true">
                            <span class="week-description">
                                '.pll__('Build your profile').'
                                <small>1 '.pll__('weeks').'</small>
                                '.file_get_contents(get_template_directory_uri().'/assets/icons/inline-right.svg.php').'
                            </span>
                          </a>
                          <a class="nav-link" id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected="true">
                              <span class="week-description">
                                  '.pll__('Career Support').'
                                  <small>12 '.pll__('weeks').'</small>
                                  '.file_get_contents(get_template_directory_uri().'/assets/icons/inline-right.svg.php').'
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
                            '.pll__("We have designed a small pre-work to get you prepared before starting the in-site phase").'.
                          </p>
                          <p class="mt-3 mb-0">
                            '.pll__("During this prework you will learn about software development fundamentals, coding fundamentals and first steps in web development with HTML, CSS and Javascript").' <br /> <br />
                          </p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-w3-tab">
                          <p>'.pll__("Our courses are being featured in the world's top teaching websites like").' <a href="https://repl.it/community">Repl.it</a> '.pll__("and have been taken by more than 2,500 students").'</p>
                          <p>'.pll__("You will get hundreds of exercises to practice, interactive tutorials, videos and master clasess to become the developer the market is looking for").'.</p>
                          <p>'.pll__("Click on any of the 4 phases to learn more about it").'.</p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-21" role="tabpanel" aria-labelledby="v-pills-21-tab">
                          <p>'.pll__("This is the most important phase of the course divided in 4 phases that will make you go from nothing to professional coding").'.</p>
                          <p>'.pll__("It does not matter what type of developer you want to be, you always use: Loops, Conditionals, Working with Arrays, Object Oriented Programing, Mapping, Filtering, Ordering, etc").'.</p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-22" role="tabpanel" aria-labelledby="v-pills-22-tab">
                          <p>'.pll__("React has become the new jQuery for a lot of companies, products like Office 360, AirBnB, Facebook and many others are build in on top of it").'.</p>
                          <p>'.pll__("During two weeks you will code several apps in React with the help of our mentors that have taken part in the development of the React.js ecosystem and code").'.</p>
                          <p class="p-0 m-0 text-center">
                            <em style="font-size: 50px" class="techico icon-react mx-auto col-6" data-toggle="tooltip" data-placement="top" title="HTML5"></em>
                            <em style="font-size: 50px" class="techico icon-nodejs mx-auto col-6" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                          </p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-23" role="tabpanel" aria-labelledby="v-pills-23-tab">
                          '.pll__("Python is the fastes growing language in the developed word. The King of the back-end. Learn how to create your own API's, connect to databases like Postgree, MySQL or Mongo and publish them online").'.
                          <p class="p-0 m-0 text-center">
                            <em style="font-size: 50px" class="techico icon-python mx-auto col-3" data-toggle="tooltip" data-placement="top" title="HTML5"></em>
                            <em style="font-size: 50px" class="techico icon-mysql mx-auto col-3" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                            <em style="font-size: 50px" class="techico icon-mongodb mx-auto col-3" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                            <em style="font-size: 50px" class="techico icon-database mx-auto col-3" data-toggle="tooltip" data-placement="top" title="Javascript"></em>
                          </p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-24" role="tabpanel" aria-labelledby="v-pills-24-tab">
                          '.pll__("Focus your entire attention into developing a real life web application, you will define, conceptualize and pect your project out as it will become the cornerstone of your future profile and project portfolio.").'
                        </div>
                        <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                          
                          <p>'.pll__("Together with our team, and based on your skills, we will build the best possible resume and online profile you can have").'</p>
                          <p>'.pll__("You will publish online everything you have build in a professional way, we will teach you how to start publicly contributing and help you join open source projects and other initiatives").'.</p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-w7-tab">
                          <p>'.pll__("During this last phase you will have mock interviews, introduce you to potential employers and help you get started in your job hunting").'.</p>
                          <p>'.pll__("If you are interested in getting hired, our team will actively support you very close during your job hunting. Helping you prepare for specific interviews, presenting you with oportunities, etc").'.</p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
	   ';
	}
}