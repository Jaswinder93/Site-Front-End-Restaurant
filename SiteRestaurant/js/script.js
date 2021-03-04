function changer(element){
	var elementnew = element.id;
	if(elementnew=="active1")
	{
		var elementSous=document.getElementById("un");
		elementSous.style.visibility="visible";
		var element_bis=document.getElementById("deux");
		var elemenet_bisdeux=document.getElementById("trois");
		element_bis.style.visibility="hidden";
		elemenet_bisdeux.style.visibility="hidden";
	}
	if(elementnew=="active2")
	{
		var elementSous=document.getElementById("deux");
		elementSous.style.visibility="visible";
		var element_bis=document.getElementById("un");
		var elemenet_bisdeux=document.getElementById("trois");
		element_bis.style.visibility="hidden";
		elemenet_bisdeux.style.visibility="hidden";

	}
	if(elementnew=="active3")
	{
		var elementSous=document.getElementById("trois");
		elementSous.style.visibility="visible";
		var element_bis=document.getElementById("un");
		var elemenet_bisdeux=document.getElementById("deux");
		element_bis.style.visibility="hidden";
		elemenet_bisdeux.style.visibility="hidden";
	}
}


function fermemenu(){
	var croix = document.getElementById("hamburgerferme");
	croix.style.display="none";
	var hamburger=document.getElementById("hamburger");
	hamburger.style.display="block";
}

$(document).ready(function(){

$('#hamburger').click(function(){
$('#menu').toggle('slow');
$('#hamburger').css('display', 'none');
$('#hamburgerferme').css('display', 'block');

});

$('#hamburgerferme').click(function(){
$('#menu').toggle('slow');
$('#test').css('height', '100%');
$('#hamburgerferme').css('display', 'none');
$('#hamburger').css('display', 'block');
});

});
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".top").offset().top},"1000");return false})});
