<?php

namespace TF;

use \WPAS\Settings\WPASThemeSettingsBuilder;

use TF\Types\CoursePostType;
use TF\Types\EventPostType;

class ThemeAdminSettings {
	
	private $wpts;
	function __construct() {

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
		
		$marketingFields = [
				[
				    'type' => 'textarea_html', 
				    'label' => 'Top Bar: Message',
				    'name' => 'top-bar-message',
					'description' => 'Message that will show on the top bar (leave blank to hide the bar)'
				],
				[
				    'type' => 'text', 
				    'label' => 'Top Bar: CSS Classes',
				    'name' => 'top-bar-classes',
					'description' => 'You can add several css classes separated by space'
				],
				[
				    'type' => 'select', 
				    'options' => [ "active" => "Active", "inactive" => "Inactive"],
				    'label' => 'Top Bar: Close button',
				    'name' => 'top-bar-close-btn',
					'description' => 'If the alert can be closed or not'
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
					'description' => 'What is the list you use for the newsletter?'
				],
				[
				    'type' => 'text', 
				    'label' => 'Soft Leads List',
				    'name' => 'activecampaign-soft-leads-list-id',
					'description' => 'What is the list you use for the soft leads?'
				],
				[
				    'type' => 'select', 
				    'label' => 'UTM_URL Field ID',
				    'name' => 'activecampaign-utm-url-field',
					'description' => 'What is the field for UTM_URL? This is the field used to store the URL were the lead was taken from',
					'options' => []
				],
				[
				    'type' => 'select', 
				    'label' => 'UTM_LOCATION Field ID',
				    'name' => 'activecampaign-utm-location-field',
					'description' => 'What is the field for UTM_LOCATION? This field represent the location to which the student is related',
					'options' => []
				],
				[
				    'type' => 'select', 
				    'label' => 'UTM_COURSE Field ID',
				    'name' => 'activecampaign-utm-course-field',
					'description' => 'What is the field for UTM_COURSE? This field represents the course to which the student is related',
					'options' => []
				],
				[
				    'type' => 'select', 
				    'label' => 'UTM_LANGUAGE Field ID',
				    'name' => 'activecampaign-utm-language-field',
					'description' => 'What is the field for UTM_LANGUAGE? This field represents the language related to the student',
					'options' => []
				],
				[
				    'type' => 'select', 
				    'label' => 'COUNTRY Field ID',
				    'name' => 'activecampaign-utm-country-field',
					'description' => 'What is the field for COUNTRY? This field represents the country related to the student (if any)',
					'options' => []
				],
				[
				    'type' => 'select', 
				    'label' => 'gclid Field ID',
				    'name' => 'activecampaign-gclid-field',
					'description' => 'Used for adwords offline convertions attribution',
					'options' => []
				],
				[
				    'type' => 'select', 
				    'label' => 'Referral key field',
				    'name' => 'activecampaign-referral-key-field',
					'description' => 'Used for the referral program',
					'options' => []
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
					    	$content = $cohort['date'];
					    	if(empty($cohort['location']) or $cohort['location']=='Uknowwn') $content .= '@ <span style="background: #ef7c7c; padding: 2px; color: white; font-size: 80%;">Uknown location: '.$cohort['bc_location_slug'].'</span>';
					        else  $content .= ' @ '.$cohort['location'];
					        
					        if(empty($cohort['slug']))  $content .= ' (<span style="background: #ef7c7c; padding: 2px; color: white; font-size: 80%;">Uknown course: '.$cohort['bc_profile_slug'].'</span>';
					        else  $content .= ' ('.$cohort['name'];
					        
					        $content .= ', '.$cohort['language'].')';
					        return $content;
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
					    
					    if(empty($profiles)) echo 'No profiles downloaded';
					    else $this->printTableFromArray($profiles,function($p){
					        return $p['name'] .' - ('.$p['slug'].')';
					    });
					}
				],
				[
				    'type' => 'button', 
				    'label' => 'Sync Events',
				    'id' => 'sync-bc-events-api',
				    'name' => 'sync-bc-events-api',
					'description' => function(){
					    $events = WPASThemeSettingsBuilder::getThemeOption('sync-bc-events-api');
					    
					    if(empty($events)) echo 'No events downloaded';
					    else $this->printTableFromArray($events,function($wkshp){
					    	if(empty($wkshp['type'])) return $wkshp['date'] .' : <span style="background: #ef7c7c; padding: 2px; color: white; font-size: 80%;">Missing Information: '.$wkshp['type'].'</span>';
					    	else return "- ".$wkshp['date'] .' : '.$wkshp['name'].' @ '.$wkshp['location'].' ('.$wkshp['language'].')';
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
					'menu_title' => '4Geeks Theme Settings'
				),
				'settingsID' => 'wp_theme_settings',
				'settingFields' => array('wp_theme_settings_title'), 
				'tabs' => array(
					'general' => array('text' => 'General', 'dashicon' => 'dashicons-admin-page', 'tabFields' => $generalFields),
					'api' => array('text' => 'BreatheCode API', 'dashicon' => 'dashicons-admin-page', 'tabFields' => $apiFields),
					'activecampaign' => array('text' => 'ActiveCampaign API', 'dashicon' => 'dashicons-admin-page', 'tabFields' => $activeCampaignFields),
					'marketing' => array('text' => 'Marketing Extras', 'dashicon' => 'dashicons-admin-page', 'tabFields' => $marketingFields)
				),
			)
		);
		
		add_filter('wpas_settings_button_action',array($this,'sync_upcoming_cohorts'),1);
		add_filter('wpts_tab_activecampaign_before',array($this,'render_activecampaign_tab'));
		
		//add_filter('wpts_tab_replit_before',array($this,'render_replit'));
		//add_action('wpts_tab_replit_table_after',array($this,'insert_another'));
	}
	
	function sync_upcoming_cohorts($inputId){
	    
	    switch($inputId)
	    {
            case 'sync-bc-cohorts-api': $this->syncCohorts($inputId); break;
            case 'sync-bc-events-api': $this->syncEvents($inputId); break;
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
        $upcoming = CoursePostType::getCohortsFromAPI();
		if($upcoming) WPASThemeSettingsBuilder::setThemeOption($inputId,$upcoming);
        WPASThemeSettingsBuilder::setThemeOption($inputId,$upcoming);
	}
	
	private function syncEvents($inputId){
        $upcoming = EventPostType::getEventsFromAPI();
		if($upcoming) WPASThemeSettingsBuilder::setThemeOption($inputId,$upcoming);
		else echo "Error when trying to sync the events";
	}
	
	private function syncProfiles($inputId){
        $upcoming = CoursePostType::getProfilesFromAPI();
		if($upcoming) WPASThemeSettingsBuilder::setThemeOption($inputId,$upcoming);
        WPASThemeSettingsBuilder::setThemeOption($inputId,$upcoming);
	}
	
	function render_activecampaign_tab($tab){
		
		$customFields = \TF\ActiveCampaign\ACAPI::getAllCustomFields();
		$auxFields = [];
	//	print_r($customFields);
		foreach($customFields as $cfield){
			if(isset($cfield->id)) $auxFields[$cfield->id] = $cfield->title;
		} 
		
		$newfields =	[
							[
								'name' => 'activecampaign-utm-url-field',
								'options' => $auxFields
							],
							[
								'name' => 'activecampaign-utm-location-field',
								'options' => $auxFields
							],
							[
								'name' => 'activecampaign-utm-course-field',
								'options' => $auxFields
							],
							[
								'name' => 'activecampaign-utm-language-field',
								'options' => $auxFields
							],
							[
								'name' => 'activecampaign-utm-country-field',
								'options' => $auxFields
							],
							[
								'name' => 'activecampaign-gclid-field',
								'options' => $auxFields
							],
							[
								'name' => 'activecampaign-referral-key-field',
								'options' => $auxFields
							]
						];
		
		foreach($newfields as $newfield)
		{
			for($i=0; $i<count($tab['tabFields']); $i++)
			{
				if($tab['tabFields'][$i]['name']==$newfield['name'])
				{
					foreach($newfield as $key => $value){
						$tab['tabFields'][$i][$key] = $value;
					}
				}
			}
		}
		//print_r($tab['tabFields']);
		//die();
		
		return $tab;
	}
	
}