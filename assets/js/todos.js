// Check off specific Todos by clicking

$('ul').on('click', 'li', function () {
   $(this).toggleClass('completed');
});


// click on X to delete ToDo

$('ul').on('click', 'span', function(e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

//add a keypress to input 

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        // grabbing new todo text from input
        let todoText = $(this).val();
        // clearing input
        $(this).val('');
        // create a new li and add to ul
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i> </span> ' + todoText + '</li>');
    }
})

$('.fa-plus').click(function () {
    $("input[type='text']").fadeIn();
})

$('.fa-minus').click(function () {
    $("input[type='text']").fadeOut();
})