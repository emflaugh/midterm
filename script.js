$(document).ready(function(){
console.log('hi');

//select a seat, on click change to the green colored seat
  // $('img').click(function(){
  //     $(this).attr('src','images/selectseat.png');
  // });

//slide down/up panel from codeAcademy
  // $('.pull-me').click(function(){
  //  $('.panel').slideToggle('slow');
  //     });

// $('.available').on('click', function(){
//   $(this).toggleClass('reserved');


// $('.available').click(function(){
// if ($(this).getAttribute('src == images/openseat.png')) {
//   $(this).attr('src','images/selectseat.png');
// } else if ($(this).getAttribute('src == images/selectseat.png')) {
//   $(this).attr('src','images/openseat.png');
// };
//   console.log('works');
// // };
// });
// // if (this).html() == "<img src='images/openseat.png' class='open-seat' style='width:100%' alt='Image'>" {
// //   $(this).html("<img src='images/selectseat.png' class='open-seat' style='width:100%'' alt='Image'>");
// // } else if ((this).html() == "<img src="images/selectseat.png" class="open-seat" style="width:100%" alt="Image">") {
// // } $(this).html("<img src='images/openseat.png' class='open-seat' style='width:100%'' alt='Image'>");


$('.seat').click(function(){
  $(this).toggleClass('is-active');
});

$('.available').on('click', function(){
  $(this).toggleClass('selected').toggleClass('available');
});
$('.selected').on('click', function(){
  $(this).toggleClass('selected').toggleClass('available');
});

// $('.reserved').on('click', function(){
//   $(this).toggleClass('available').toggleClass('reserved');
//   $('.available').html("<div class='col-sm-2'><img src='images/openseat.png'></div>");
// });



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
