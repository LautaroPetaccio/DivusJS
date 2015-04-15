$(document).ready(function() {

  $(document).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        	}
      	}
    });

    $("#copied-dialog").dialog({
      modal: true,
      show: false,
      autoOpen: false,
      draggable: false,
      resizable: false,
      minWidth: 450,
      buttons: {
        Ok: function() {
          $(this).dialog("close");
        }
      }
    });

	$("#inicio_button").click(function() {
		$('html, body').animate({
		    scrollTop: $("#entry-inicio").offset().top
		}, 1000);
	});
	$("#manos_button").click(function() {
		$('html, body').animate({
		    scrollTop: $("#entry-howto").offset().top
		}, 1000);
	});
	$("#empezar_button").click(function() {
		$('html, body').animate({
		    scrollTop: $("#entry-volador").offset().top
		}, 1000);
	});
	$("#footer-volador").click(function() {
		$('html, body').animate({
		    scrollTop: $("#entry-noticias").offset().top
		}, 1000);
	});
	$("#footer-noticias").click(function() {
		$('html, body').animate({
		    scrollTop: $("#entry-facebook").offset().top
		}, 1000);
	});
	$("#footer-facebook").click(function() {
		$('html, body').animate({
		    scrollTop: $("#entry-facebookfotos").offset().top
		}, 1000);
	});
	$("#footer-facebookfotos").click(function() {
		$('html, body').animate({
		    scrollTop: $("#entry-gravity").offset().top
		}, 1000);
	});
	$("#footer-gravity").click(function() {
		$('html, body').animate({
		    scrollTop: $("#entry-twitter").offset().top
		}, 1000);
	});
	$("#footer-twitter").click(function() {
		$('html, body').animate({
		    scrollTop: $("#entry-fart").offset().top
		}, 1000);
	});
	$("#footer-fart").click(function() {
		$('html, body').animate({
		    scrollTop: $("#entry-extras").offset().top
		}, 1000);
	});
});

function show_copied_dialog() {
	$("#copied-dialog").dialog('open');
}