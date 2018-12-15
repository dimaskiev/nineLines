import './vendor';


$(".skills__item").click(function(e) {
    $(this).children('.checkbox__fake').toggleClass('checked');
})


$(".slider-img").mousemove(function(e) {
    
    var pos = $(this).offset();
    var elem_left = pos.left;
    var elem_top = pos.top;
    // положение курсора внутри элемента
    var Xinner = e.pageX - elem_left;
    var Yinner = e.pageY - elem_top;
    console.log(Xinner + " " + Yinner);
})
