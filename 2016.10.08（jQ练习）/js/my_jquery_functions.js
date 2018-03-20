
$(document).ready(function(){
    $(".text").click(function(){
        $("p").toggle();
    });


    $(".hide").click(function(){
        $("p").hide("slow");
    });

    $("#show").click(function(){
        $("p").show("slow");
    });

    $(".ex .hd").click(function(){
        $(this).parents(".ex").hide("slow");   //this代表button
    });
  
    $(".fadeout").click(function(){    //渐渐淡出用fadeIn
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);    
    });

    $(".fadeto").click(function(){
        $("#div4").fadeTo("slow",0.15);
        $("#div5").fadeTo("slow",0.4);
        $("#div6").fadeTo("slow",0.7);
    });

    $(".animate-1").click(function(){
        $(".div7").animate({
            left:'250px',
            height:'+=150px',
            width:'+=150px'
        });
    });

    $(".animate-2").click(function(){
        var div=$(".div8");  
        div.animate({left:'100px'},"slow");
        div.animate({fontSize:'3em'},"slow");
    });

    $("#stop").click(function(){
        $(".div8").stop();
    });

    $(".callback").click(function(){
        $(".callback-1").hide(1000,function(){
            alert("The paragraph is now hidden");
        });
    });

    $("#btn1").click(function(){
        $(".test1").text(function(i,origText){
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
        });
    });//被选元素列表中当前元素的下标，以及原始（旧的）值。在此用origText表示

   $("#btn2").click(function(){
        $("#test2").html(function(i,origText){
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
        });
    });

   $(".btn3").click(function(){
        $("#w3s").attr("href", function(i,origValue){
            return origValue + "/jquery"; 
        });
    });

   $(".btn4").click(function(){
        var txt="";
        txt+="Width of div: " + $("#div9").width() + "</br>";
        /*txt=txt+"Width of div: " + $("#div1").width() + "</br>";
        x=x+...实现字符串的拼接,如果用x=...，每次循环都会覆盖原有x的值*/
        txt+="Height of div: " + $("#div9").height();
        $("#div9").html(txt);
    });

   $(document).ready(function(){
   	    $("span").parent().css({"color":"red","border":"2px solid red"});
    });

});