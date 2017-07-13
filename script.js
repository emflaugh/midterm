$(document).ready(function(){
console.log('hi');

//select a seat, on click change to the green colored seat
  $('img').click(function(){
      $(this).attr('src','selectseat.png');
  });

//slide down/up panel from codeAcademy
  $('.pull-me').click(function(){
   $('.panel').slideToggle('slow');
      });




});
