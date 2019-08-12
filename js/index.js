$(function(){
    $(".xplist").slideUp();
    $("#threelist").slideUp();

    $("#changping").click(function(){
        console.log($(window).width());
        if($(window).width()<=750){
            $(".xplist").slideToggle();
        }
    });

    $(".yingjiancp").click(function(){
        console.log($(window).width());
        if($(window).width()<=750){
            $("#threelist").slideToggle();
        }
    });
})