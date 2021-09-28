let $input;
    //create event to add text input to variable
    $('#add-skill').on('click', function() {
        $input = $('#input-skill').val();
        
        const $newList = $(`<li><button class='box'>X</button> ${$input}</li>`);
        $('ul').append($newList);
        $('#input-skill').val('');
        
        $('.box').on('click', function() {
            $(this).closest('li').remove();
        });
        
    });
    
