"use strict";
    $(document).ready(function(){ 
        $("img").click(function(){
            var imgid = $(this).attr("id")
            $("Li.imgid").css("border","none")
            $(this).fadeOut();
        });        
        $("#restorebutton").click(function(){
            $("img").show();
        });        
    });    
