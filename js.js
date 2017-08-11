$(function(){

$('body').append('<button class="btn_up" />');






$('.btn_up').click(function(){
   $('body').animate({'scrollTop': 0}, 500);
   $('html').animate({'scrollTop': 0}, 500);
});

$(window).scroll(function(){
if($(window).scrollTop() > 200){
	$('.btn_up').addClass('active');

}
else{
	$('.btn_up').removeClass('active');
         }
     });
});