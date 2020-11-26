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
  $(document).on('click','.bookBtn1', function(e){
    $(".hideS1").show();
    $(".expandHide1").show();
    $(".expandPrice1").hide();
    $(this).css("background-color", "#00E600");
    $(this).addClass("bookBtn2")
    $(this).removeClass("bookBtn1");
  });
  $(document).on('click','.bookBtn2', function(e){
    $(".hideS1").hide();
    $(".expandHide1").hide();
    $(".expandPrice1").show();
    $(this).css("background-color", "#6C757D");
    $(this).addClass("bookBtn1")
    $(this).removeClass("bookBtn2");
  });
});

$(document).ready(function(){
  $(document).on('click','.bookBtn3', function(e){
    $(".hideS2").show();
    $(".expandHide2").show();
    $(".expandPrice2").hide();
    $(this).css("background-color", "#00E600");
    $(this).addClass("bookBtn4")
    $(this).removeClass("bookBtn3");
  });
  $(document).on('click','.bookBtn4', function(e){
    $(".hideS2").hide();
    $(".expandHide2").hide();
    $(".expandPrice2").show();
    $(this).css("background-color", "#6C757D");
    $(this).addClass("bookBtn3")
    $(this).removeClass("bookBtn4");
  });
});

$(document).ready(function(){
  $(document).on('click','.bookBtn5', function(e){
    $(".hideS3").show();
    $(".expandHide3").show();
    $(".expandPrice3").hide();
    $(this).css("background-color", "#00E600");
    $(this).addClass("bookBtn6")
    $(this).removeClass("bookBtn5");
  });
  $(document).on('click','.bookBtn6', function(e){
    $(".hideS3").hide();
    $(".expandHide3").hide();
    $(".expandPrice3").show();
    $(this).css("background-color", "#6C757D");
    $(this).addClass("bookBtn5")
    $(this).removeClass("bookBtn6");
  });
});

$(document).ready(function(){
  $(document).on('click','.bookBtn7', function(e){
    $(".hideS4").show();
    $(".expandHide4").show();
    $(".expandPrice4").hide();
    $(this).css("background-color", "#00E600");
    $(this).addClass("bookBtn8")
    $(this).removeClass("bookBtn7");
  });
  $(document).on('click','.bookBtn8', function(e){
    $(".hideS4").hide();
    $(".expandHide4").hide();
    $(".expandPrice4").show();
    $(this).css("background-color", "#6C757D");
    $(this).addClass("bookBtn7")
    $(this).removeClass("bookBtn8");
  });
});