

var Modal = (function(){
    
    var output = {};
    
    output.show = function(innerContent){
        
        $('body').append(createContent(innerContent));
        $('#temporalModal').modal('show');

    }
    
    function createContent(){
        
        var content = '<div id="temporalModal" class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">';
            content += '<div class="modal-dialog modal-sm">';
                content += '<div class="modal-content">';
                content += innerContent;
                content += '</div>';
            content += '</div>';
        content += '</div>';
        
        return content;
    }
    
    
    return output;
    
})();