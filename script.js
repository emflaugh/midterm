
$(document).ready(function(){

$('.wrapper').on('click', function(){
  $(this).find('.selected').toggleClass('is-active');

});

	var seatNumber;
	var selectedSeat;


	$(".available").on("click", function() {
		$("form").addClass('is-active');


	});

	var reservation = {

	};
$('.wrapper').on('click', function(){
  $(this).toggleClass('beenClicked');
});
  $("#button").on("click", function() {
       reservation.name = $("#name").val();
       reservation.phone = $("#phone_number").val();
       reservation.email = $("#email").val();
       reservation.yourSeat = $('.beenClicked').attr('id');
       $('.beenClicked').html('<div><img src="images/takenseat.png" class="unavailable"></div');
       $('.beenClicked').data(reservation);
        // console.log($('.beenClicked').data());
       $('.wrapper').removeClass('beenClicked');


// console.log(reservation.yourSeat);
// console.log(reservation);

});

//When hovering on wrapper...we have to do a method that displays data tied to the wrapper
var seat = null;
$('.wrapper').mouseenter(function(){
  var name = $(this).data('name');
  seat = $(this).data('yourSeat');
  console.log(name + " "+ seat);
  $('#' + seat).html('<span class="hoverInfo">' + name + ' has reserved this seat</span>');
  // $(this).append(name + ' ' + seat);
}).mouseleave(function() {
  $('#' + seat).html('<div><img src="images/takenseat.png" class="unavailable"></div');
});















});
