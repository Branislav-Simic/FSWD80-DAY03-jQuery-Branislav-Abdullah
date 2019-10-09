// $(document).ready(function(){
//   $(document).mousemove(function(e){
//     $("span").text(e.pageX + ", " + e.pageY);
    
//   });
// });

$(document).mousemove(function(e) {
    $('.box').offset({
        left: e.pageX,
        top: e.pageY + 20

    

    });
    $("span").text(e.pageX + ", " + e.pageY);
});


