$(document).ready(function(){
$('.seat').on('click', function(){
  $('.selected').toggleClass('is-active');
});

	var seatNumber;
	var selectedSeat;

	//$("form").hide();
	$(".available").on("click", function() {
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
       reservation.yourSeat = $('.selected.is-active').attr('id');
       $('.selected').removeClass('is-active');
         $('.reserved').addClass('is-active');
       // reservation.yourSeat = $(".yourSeat").text();
console.log(reservation);;

		// $("#formArea").html("<p>Thank you for your reservation!</p>");
    //
		// $(selectedSeat).css("background-color" , "#909090")
    //
		// 	.html("<p id = 'reservedSeat'></p>");
    //
		// $("#reservedSeat").text("seat #" + seatNumber + " " + reservation.name);
	});

});
