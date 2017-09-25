
$('.syllabus-download').submit(function(event){
    console.log('syllabus requested');
    dataLayer.push({'event': 'syllabus_download'});
});

$('.newsletter-signup').submit(function(event){
    dataLayer.push({'event': 'newsletter_signup'});
    console.log('newletter requested');
});

$('.apply-btn').click(function(event){
    dataLayer.push({'event': 'application_rendered'});
    console.log('application_rendered');
});