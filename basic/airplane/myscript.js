
$(document).mousemove(function(e) {
    $('.box').offset({
        left: e.pageX - 100,
        top: e.pageY -120
    });
    $("span").text(e.pageX + ", " + e.pageY);

    
});
myclick('.box');
function myclick(a){
$(a).on("click",function(){
	$(this).fadeOut().fadeIn()
});
};




