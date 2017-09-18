<?php

namespace TF;

use \WPAS\Settings\WPASThemeSettingsBuilder;

use TF\Types\CoursePostType;

class ThemeAdminSettings {
	
	private $wpts;
	function __construct() {
	    /*
				[
				    'type' => 'select', 
				    'label' => 'Full Stack Premium Course',
				    'name' => 'whatever-slug' ,
					'description' => 'What is the parent course for the rest of whole fullstack?',
					'options' => []
				]
		*/
		$generalFields = [
				[
				    'type' => 'text', 
				    'label' => 'Company Legal Name',
				    'name' => 'company-name',
					'description' => 'For copywrite purposes'
				],
				[
				    'type' => 'text', 
				    'label' => 'Company Email',
				    'name' => 'company-email',
					'description' => 'This will be displayed on the footer of the website'
				],
				[
				    'type' => 'text', 
				    'label' => 'Company Phone',
				    'name' => 'company-phone-number',
					'description' => 'This will be displayed on the footer of the website'
				],
				[
				    'type' => 'text', 
				    'label' => 'Twitter URL',
				    'name' => 'company-twitter',
					'description' => 'Full URL: https://twitter.com/username'
				],
				[
				    'type' => 'text', 
				    'label' => 'Instagram URL',
				    'name' => 'company-instagram',
					'description' => 'Full URL: https://www.instagram.com/username'
				],
				[
				    'type' => 'text', 
				    'label' => 'Facebook URL',
				    'name' => 'company-facebook',
					'description' => 'Full URL'
				],
				[
				    'type' => 'text', 
				    'label' => 'Github URL',
				    'name' => 'company-github',
					'description' => 'Full URL'
				],
				[
				    'type' => 'text', 
				    'label' => 'Youtube Account',
				    'name' => 'company-youtube',
					'description' => 'Full URL'
				]
			];
			
		$activeCampaignFields = [
				[
				    'type' => 'text', 
				    'label' => 'API URL',
				    'name' => 'activecampaign-api-url',
					'description' => 'Used for requests with the API v2'
				],
				[
				    'type' => 'text', 
				    'label' => 'API Key',
				    'name' => 'activecampaign-api-key',
					'description' => 'Used for all the API requests <a href="https://help.activecampaign.com/hc/en-us/articles/207317590-Getting-started-with-the-API">read more</a>'
				],
				[
				    'type' => 'text', 
				    'label' => 'API v3 URL',
				    'name' => 'activecampaign-api-new-url',
					'description' => 'Used for requests using the API v3'
				],
				[
				    'type' => 'text', 
				    'label' => 'Newletter Signup List',
				    'name' => 'activecampaign-newsletter-list-id',
					'description' => 'What is the list you use for the newsletter'
				]
			];
		
		$apiFields = [
				[
				    'type' => 'button', 
				    'label' => 'Sync Upcoming Cohots',
				    'id' => 'sync-bc-cohorts-api',
				    'name' => 'sync-bc-cohorts-api',
					'description' => function(){
					    
					    $cohorts = WPASThemeSettingsBuilder::getThemeOption('sync-bc-cohorts-api');
					    if(empty($cohorts)) echo 'No cohort sync';
					    else $this->printTableFromArray($cohorts,function($cohort){
					        return $cohort['date'] .' @ '.$cohort['bc_location_slug'].' ('.$cohort['name'].', '.$cohort['language'].')';
					    });
					}
				],
				[
				    'type' => 'button', 
				    'label' => 'Sync Profiles',
				    'id' => 'sync-bc-profiles-api',
				    'name' => 'sync-bc-profiles-api',
					'description' => function(){
					    $profiles = WPASThemeSettingsBuilder::getThemeOption('sync-bc-profiles-api');
					    
					    if(empty($profiles)) echo 'No profiles sync';
					    else $this->printTableFromArray($profiles,function($p){
					        return $p['name'] .' - ('.$p['slug'].')';
					    });
					}
				]
			];
			
		
		
		/*
		* WPTS
		*/
		$this->wpts = new WPASThemeSettingsBuilder(
			array(
				'general' => array(
					'description' => '4Geeks Academy Theme Options',
					'menu_slug' => 'tf_theme_options',
					'menu_title' => 'TF Theme Settings'
				),
				'settingsID' => 'wp_theme_settings',
				'settingFields' => array('wp_theme_settings_title'), 
				'tabs' => array(
					'general' => array('text' => 'General', 'dashicon' => 'dashicons-admin-page', 'tabFields' => $generalFields),
					'api' => array('text' => 'BreatheCode API', 'dashicon' => 'dashicons-admin-page', 'tabFields' => $apiFields),
					'activecampaign' => array('text' => 'ActiveCampaign API', 'dashicon' => 'dashicons-admin-page', 'tabFields' => $activeCampaignFields),
					'buttons' => array('text' => 'Buttons')
				),
			)
		);
		
		add_filter('wpas_settings_button_action',array($this,'sync_upcoming_cohorts'),1);
		
		//add_filter('wpts_tab_replit_before',array($this,'render_replit'));
		//add_action('wpts_tab_replit_table_after',array($this,'insert_another'));
	}
	
	function sync_upcoming_cohorts($inputId){
	    
	    switch($inputId)
	    {
            case 'sync-bc-cohorts-api': $this->syncCohorts($inputId); break;
            case 'sync-bc-profiles-api': $this->syncProfiles($inputId); break;
	    }
	}
	
	function printTableFromArray($rows, $renderRow){
	    
        echo "<table style='background: white; padding: 5px;'>" ;               
        foreach ($rows as $value){
            echo "<tr>";
                echo "<td style='padding: 0;'>".$renderRow($value)."</td>";
            echo "</tr>";
        }
        echo "</table>";
	}
	
	private function syncCohorts($inputId){
	    $cohortsJSON = file_get_contents(BREATHECODE_API.'/cohorts/');
        if($cohortsJSON)
        {
            $cohorts = json_decode($cohortsJSON);
            $upcoming = [];
            if($cohorts && $cohorts->code==200) foreach($cohorts->data as $c) $upcoming[] = CoursePostType::getDateInformation($c);

            WPASThemeSettingsBuilder::setThemeOption($inputId,$upcoming);
        }
	}
	
	private function syncProfiles($inputId){
	    $profilesJSON = file_get_contents(BREATHECODE_API.'/profiles/');
        if($profilesJSON)
        {
            $profiles = json_decode($profilesJSON);
            $upcoming = [];
            if($profiles && $profiles->code==200) foreach($profiles->data as $p) {
                $upcoming[] = (array) $p;
            }

            WPASThemeSettingsBuilder::setThemeOption($inputId,$upcoming);
        }
	}
	
}