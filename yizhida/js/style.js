$(function(){
		var i=$('nav').find('.active').index();
	$('.more').click(function(){
		$('.expand').show();
		$('.aside').animate({left:'0%'})
	})
	$('.expand').click(function(){
		$('.expand').hide();
		$('.aside').animate({left:'-60%'})
	})
	 $("nav a").mouseenter(function(){
   		$(this).addClass('active').siblings().removeClass('active');
  });
  $("nav a").mouseleave(function(){
    $(this).removeClass('active');
    $("nav a").eq(i).addClass('active')
  });
})