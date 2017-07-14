$(document).ready(function(){


	var seatNumber;
	var selectedSeat;

  var $container = $("<div class='seatContainer'></div>");
for(var i = 0; i < 4; i++) {
    for (var j = 0; j < 6; j++){
      //place all elements here.  Play with id if needed
      //check the .attr at the end of this long code block
        $("<div class='wrapper'> <div class='col-xs-2 seat'  id = i + ''+ j'> <div class='reserved' <img src='images/takenseat.png' class = 'open-seat'  alt='Image'> </div> <p> Seat A1 </p> </div> <div class = 'col-xs-2 seat' id='+ i + i + '' + j'> <div class='selected'> <img src='images/selectseat.png' class='open-seat' alt = 'Image'> </div> <p> Seat A1 </p> </div> <div class='col-xs-2 seat' id='+ i + i + i + '' + j'> <div class='available'> <img src='images/openseat.png' class='open-seat' alt = 'Image'> </div> <p> Seat 1 </p>                 </div> </div>").addClass("box").appendTo($container).attr('id', i + "" +j);
    }
// add class .open-seat width:100% in css file
//didnt add id=a1 on class "selected" div since not on any other in selected class.  check with Elyse on this.
// check if seat id's are being created correctly and may need "" between the i's for aa1, etc

/// check if remove middle "" in id
    $("<div class='row'></div>").css("clear", "both").appendTo($container);
}
$container.appendTo($("body"));
///looping through through to create a new id for each div
//$("<div></div) creates a div element

$('.box').on('click', function(){
  $(this).toggleClass('is-active');
});

/// may not even need to stack images with this method.  Then can replace html with a reserved image by $('#button').on('click', fucntion(){$(this).html("<img src='images/takenseat'")})

// $('.wrapper').on('click', function(){
//   $(this).html("<div><img src='images/openseat.png'</div>");
// });

	//$("form").hide();
	$(".seat").on("click", function() {
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
