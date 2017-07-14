$(document).ready(function(){

//form slide down from the top
// $('body').click(function(){
//   $('.reservationForm').slide('slowest');
// });


$('.wrapper').on('click', function(){
  $(this).find('.selected').toggleClass('is-active');


  //$('.selected').toggleClass('is-active');
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


var users = [];

  var reservation = {

	};
$('.wrapper').on('click', function(){
  $(this).toggleClass('beenClicked');
});
  $("#button").on("click", function() {
       reservation.name = $("#name").val();
       reservation.phone = $("#phone_number").val();
       reservation.email = $("#email").val();
       reservation.yourSeat = $('.wrapper').attr('id');
       $('.beenClicked').html('<div><img src="images/takenseat.png" class="unavailable"></div');
       users.push(reservation);
       console.log(users);


      //  $('.wrapper').find('is-active');
      //    $('.selected').removeClass('is-active');
       //
      //    $(this).find('.reserved').addClass('is-active');

});
        //  $(this).find('.reserved').addClass('is-active');


      //  $('.selected').removeClass('is-active');
      //  $('.wrapper').find('.reserved').addClass('is-active');


        //  $('.reserved').addClass('is-active');
       // reservation.yourSeat = $(".yourSeat").text();
console.log(reservation);

		// $("#formArea").html("<p>Thank you for your reservation!</p>");
    //
		// $(selectedSeat).css("background-color" , "#909090")
    //
		// 	.html("<p id = 'reservedSeat'></p>");
    //
		// $("#reservedSeat").text("seat #" + seatNumber + " " + reservation.name);
	// });

// var name;
//
// $('.seat').mouseover(function(){
//   if ($(this).hasClass('reserved')) {
//      name = $(this).attr('#name');
//      $(this).children('p').text('#name');
//   }
// });
//
// //return to reserved when mouse out
// $('.seat').mouseout(function() {
//   if ( $(this).hasClass('reserved') ) {
//     $(this).children('p').text('Reserved');
//   }
// });














});
