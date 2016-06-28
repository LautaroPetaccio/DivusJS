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

  	function scrollTo(selector) {
  		return function() {
	  		$('html, body').animate({
	  		    scrollTop: $(selector).offset().top
	  		}, 1000);
  		}
  	}

	$("#inicio_button").click(scrollTo("#entry-inicio"));
	$("#manos_button").click(scrollTo("#entry-howto"));
	$("#empezar_button").click(scrollTo("#entry-volador"));
	$("#footer-volador").click(scrollTo("#entry-noticias"));
	$("#footer-noticias").click(scrollTo("#entry-facebook"));
	$("#footer-facebook").click(scrollTo("#entry-facebookfotos"));
	$("#footer-facebookfotos").click(scrollTo("#entry-twitter"));
	//$("#footer-gravity").click(scrollTo("#entry-twitter"));
	$("#footer-twitter").click(scrollTo("#entry-fart"));
	$("#footer-fart").click(scrollTo("#entry-extras"));

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
			    url: "save_photo",
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