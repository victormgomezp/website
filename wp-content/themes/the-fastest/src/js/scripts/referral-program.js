window.onload = function(){
    jQuery(document).ready(function(){
        
        var urlVars = getUrlVars();
        
        if(typeof urlVars['h'] != 'undefined')
        {
            var message = "Hey ________! \n\n";
            message += "Use this invite link to enroll to 4Geeks Academy and it will credit you with $300 over the tuition price: \n\n";
            message += "https://www.4geeksacademy.com/apply?referral_key="+urlVars['h'];
            
            jQuery('.referral_message textarea').val(message);
        }
        else
        {
            var errorMessage = 'There seems to be a problem with your referral link';
            jQuery('.referral-form').parent().html("<div class='alert alert-danger text-center'>"+errorMessage+"</div>");
            alert(errorMessage);
        }
        
    });
}

function getUrlVars(){
    
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}