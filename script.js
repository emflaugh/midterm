$(document).ready(function(){
console.log('hi');

//select a seat, on click change to the green colored seat
  $('img').click(function(){
      $(this).attr('src','images/selectseat.png');
  });

//slide down/up panel from codeAcademy
  $('.pull-me').click(function(){
   $('.panel').slideToggle('slow');
      });






// $(function() {
//
//
// 	var seatNumber;
// 	var selectedSeat;

	//$("form").hide();
	$(".available").on("click", function() {
		console.log('hello');
		$("form").toggleClass('is-active');
		//$("form").show();
		// selectedSeat = $(this);
		// seatNumber = $(this).attr("id");
		// $(".yourSeat").text("seat #" + seatNumber + ":");

	});

// 	var reservation = {
//
// 	};
//
// 	$("#button").on("click", function() {
// 		reservation.name = $("#name").val();
// 		reservation.phone = $("#phone_number").val();
// 		reservation.email = $("#email").val();
// 		reservation.yourSeat = $(".yourSeat").text();
//
// 		$("#formArea").html("<p>Thank you for your reservation!</p>");
//
// 		$(selectedSeat).css("background-color" , "#909090")
//
// 			.html("<p id = 'reservedSeat'></p>");
//
// 		$("#reservedSeat").text("seat #" + seatNumber + " " + reservation.name);
// 	});
//
// });





});
