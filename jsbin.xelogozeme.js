$(document).ready(function(){
    $('#close_help').click(function(){
        $('.help').hide();
    });
});



$(document).ready(function(){
    $("#close_menu").click(function(){
        $('.nav').animate({
            left: '-15%',
        },400)
    })
})

$(document).ready(function(){
    $("#menubutton").click(function(){
        $('.nav').animate({
            left: '0%',
        },400)
    })
})