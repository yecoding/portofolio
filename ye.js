

$(document).ready(function(){

   $('#togglediv').click(function(){
   	$("nav").slideToggle(600);
   	$("p.openBtn").toggle();
   	$("p.closeBtn").toggle();
   });

});