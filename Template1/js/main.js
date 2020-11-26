$(document).ready(function() {
	$('.accordion').find('.accordion-toggle').click(function() {
		$(this).next().slideToggle('600');
		$(".accordion-content").not($(this).next()).slideUp('600');
	});
	$('.accordion-toggle').on('click', function() {
		$(this).toggleClass('active').siblings().removeClass('active');
	});
});

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


$(document).ready(function(){
	$(".timeCs1").click(function(){
		$(".timeCs1").removeClass("active-time1");
		$(this).addClass("active-time1");
			});
});

$(document).ready(function(){
	$(".timeCs2").click(function(){
		$(".timeCs2").removeClass("active-time2");
		$(this).addClass("active-time2");
			});
});

$(document).ready(function(){
	$(".timeCs3").click(function(){
		$(".timeCs3").removeClass("active-time3");
		$(this).addClass("active-time3");
			});
});

$(document).ready(function(){
	$(".timeCs4").click(function(){
		$(".timeCs4").removeClass("active-time4");
		$(this).addClass("active-time4");
			});
});


$(document).ready(function(){
  $(document).on('click','.card1', function(e){
    $(".cardBtn01").show();
    $(".bestPriceShow1").show();
    $(".bestPrice1").hide();
    $(this).addClass("card01")
    $(this).removeClass("card1");
  });
  $(document).on('click','.card01', function(e){
    $(".cardBtn01").hide();
    $(".bestPriceShow1").hide();
    $(".bestPrice1").show();
    $(this).addClass("card1")
    $(this).removeClass("card01");
  });
});

$(document).ready(function(){
  $(document).on('click','.card2', function(e){
    $(".cardBtn02").show();
    $(".bestPriceShow2").show();
    $(".bestPrice2").hide();
    $(this).addClass("card02")
    $(this).removeClass("card2");
  });
  $(document).on('click','.card02', function(e){
    $(".cardBtn02").hide();
    $(".bestPriceShow2").hide();
    $(".bestPrice2").show();
    $(this).addClass("card2")
    $(this).removeClass("card02");
  });
});

$(document).ready(function(){
  $(document).on('click','.card3', function(e){
    $(".cardBtn03").show();
    $(".bestPriceShow3").show();
    $(".bestPrice3").hide();
    $(this).addClass("card03")
    $(this).removeClass("card3");
  });
  $(document).on('click','.card03', function(e){
    $(".cardBtn03").hide();
    $(".bestPriceShow3").hide();
    $(".bestPrice3").show();
    $(this).addClass("card3")
    $(this).removeClass("card03");
  });
});

$(document).ready(function(){
  $(document).on('click','.card4', function(e){
    $(".cardBtn04").show();
    $(".bestPriceShow4").show();
    $(".bestPrice4").hide();
    $(this).addClass("card04")
    $(this).removeClass("card4");
  });
  $(document).on('click','.card04', function(e){
    $(".cardBtn04").hide();
    $(".bestPriceShow4").hide();
    $(".bestPrice4").show();
    $(this).addClass("card4")
    $(this).removeClass("card04");
  });
});



$(document).ready(function(){
  $(".btn-ava").click(function(){
    $(".conHideCard").show();
  })
})