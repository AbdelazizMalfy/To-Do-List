$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
   
});


$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input").on("keypress", function(e){
    if (e.which === 13){
        //grab the value of the input box
        var NewTodo = $(this).val();
        //add the value as a new li in the todo list
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + NewTodo + "</li>")
        //clear the input textbox
        $(this).val("");
    }
});