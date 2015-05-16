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

	var video = document.querySelector('video');
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext('2d');
	var localMediaStream = null;

	function hasGetUserMedia() {
	  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
	            navigator.mozGetUserMedia || navigator.msGetUserMedia);
	}

	function snapshot() {
		if(!video.paused) {
			if(localMediaStream) {
			  ctx.drawImage(video, 0, 0, 640, 480);
			  video.pause();
			  var dataUrl = canvas.toDataURL("image/png", 0.85);
			  $.ajax({
			    type: "POST",
			    url: "save_photo.php",
			    data: { 
			       imgBase64: dataUrl
			    }
			  }).done(function(msg) {
			      $('#photo-url').html(msg).show("blind");
			  });


			}
		}
		else {
			video.play();
		}
	}

	var errorCallback = function(e) {
	  console.log('Reeeejected!', e);
	};

	if (hasGetUserMedia()) {
	  // Good to go!
	} else {
	  alert('getUserMedia() is not supported in your browser');
	}

	$("#video").click(snapshot);


	navigator.getUserMedia  = navigator.getUserMedia ||
	                          navigator.webkitGetUserMedia ||
	                          navigator.mozGetUserMedia ||
	                          navigator.msGetUserMedia;

	// Not showing vendor prefixes or code that works cross-browser.
	navigator.getUserMedia({video: true}, function(stream) {
	  video.src = window.URL.createObjectURL(stream);
	  localMediaStream = stream;
	}, errorCallback);
});