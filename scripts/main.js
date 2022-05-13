// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


// Get the modal
var modal = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}



//Get the button
var mybutton = document.getElementById("myBtntop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var clickmessage="ไม่อนุญาต save ภาพนี้ หรือนำภาพไปใช้"

function disableclick(e) {
if (document.all) {
if (event.button==2||event.button==3) {
if (event.srcElement.tagName=="IMG"){
alert(clickmessage);
return false;
}
}
}
else if (document.layers) {
if (e.which == 3) {
alert(clickmessage);
return false;
}
}
else if (document.getElementById){
if (e.which==3&&e.target.tagName=="IMG"){
alert(clickmessage)
return false
}
}
}

function associateimages(){
for(i=0;i<document.images.length;i++)
document.images[i].onmousedown=disableclick;
}

if (document.all)
document.onmousedown=disableclick
else if (document.getElementById)
document.onmouseup=disableclick
else if (document.layers)
associateimages();


// Get the modal
var modalit = document.getElementById("myModalit");

// Get the button that opens the modal
var btnit = document.getElementById("myBtnit");

// Get the <span> element that closes the modal
var spanit = document.getElementsByClassName("closeit")[0];

// When the user clicks on the button, open the modal
btnit.onclick = function() {
  modalit.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanit.onclick = function() {
  modalit.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalit) {
    modalit.style.display = "none";
  }
}

//element ที่จะให้แสดง fullscreen
var elem = document.getElementById("content_fullscreen");
function openFullscreen() {
  	
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
	
/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}
	
document.addEventListener('fullscreenchange', function() {
	var full_screen_element = document.fullscreenElement;

	if(full_screen_element !== null){
		//$("#openfullscreen").hide();
		//$("#exitfullscreen").show();
		document.getElementById("openfullscreen").style.display = "none";
		document.getElementById("exitfullscreen").style.display = "";
		//console.log('Page has entered fullscreen mode');
	}else{
		//$("#openfullscreen").show();
		//$("#exitfullscreen").hide();
		document.getElementById("openfullscreen").style.display = "";
		document.getElementById("exitfullscreen").style.display = "none";
		//console.log('Page has exited fullscreen mode');
	}	
});


