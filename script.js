$(document).ready(function(){
$('.seat').on('click', function(){
  $('.selected').toggleClass('is-active');
});

$(function() {


	var seatNumber;
	var selectedSeat;

	//$("form").hide();
	$(".available").on("click", function() {
		console.log('hello');
		$("form").addClass('is-active');
		//$("form").show();
		// selectedSeat = $(this);
		// seatNumber = $(this).attr("id");
		// $(".yourSeat").text("seat #" + seatNumber + ":");

	});

	var reservation = {

	};

	$("#button").on("click", function() {
		reservation.name = $("#name").val();
		reservation.phone = $("#phone_number").val();
		reservation.email = $("#email").val();
		reservation.yourSeat = $(".yourSeat").text();

		$("#formArea").html("<p>Thank you for your reservation!</p>");

		$(selectedSeat).css("background-color" , "#909090")

			.html("<p id = 'reservedSeat'></p>");

		$("#reservedSeat").text("seat #" + seatNumber + " " + reservation.name);
	});

});



});
