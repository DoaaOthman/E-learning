
window.onload = function() {
//loader
var myVar;

function loader() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
loader();
//zoom
function zoomIn()
{
  var Page = document.getElementById('body');
  var zoom = parseInt(Page.style.zoom) + 10 +'%'
  Page.style.zoom = zoom;
  return false;
}

function zoomOut()
{
  var Page = document.getElementById('body');
  var zoom = parseInt(Page.style.zoom) - 10 +'%'
  Page.style.zoom = zoom;
  return false;
}

	// audio
	var audioAll = document.getElementById("audioAll");

	// Buttons
	var playButton = document.getElementById("play-pause");
    playButton.style.backgroundImage = "url('assets/images/play.png')";

	// Sliders
	var seekBar = document.getElementById("seek-bar");
	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (audioAll.paused == true) {
            stopAllAudio();
            // Play the audio
            
			audioAll.play();

			// Update the button text to 'Pause'
            //playButton.innerHTML = "Pause";
            playButton.style.backgroundImage = "url('assets/images/pause.png')"
         
        } else {
            // Pause the audio
            
			audioAll.pause();

			// Update the button text to 'Play'
            //playButton.innerHTML = "Play";
            
            playButton.style.backgroundImage = "url('../assets/images/play.png')"
          
        }
	});
	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = audioAll.duration * (seekBar.value / 100);

		// Update the audio time
		audioAll.currentTime = time;
	});

	
	// Update the seek bar as the audio plays
	audioAll.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / audioAll.duration) * audioAll.currentTime;

		// Update the slider value
		seekBar.value = value;
	});

    //listen audio
    
    var listen = document.getElementById('listen');
    var allAudios = document.querySelectorAll('audio');
    //stop all audio
    function stopAllAudio(){
        allAudios.forEach(function(audio1){
           audio1.pause();
        });
    }
 
    //listen to audio
    listen.addEventListener('click', function(){
            var audioListen=document.getElementById('audio-listen');
            stopAllAudio();
            playButton.style.backgroundImage = "url('../assets/images/play.png')";
            audioAll.currentTime=0;
            audioListen.currentTime=0;
            audioListen.play();
         
        });
    //div click include img &sound
        var img = document.getElementsByClassName('quiz-image');
        //sound want to play
           audioImg =document.getElementsByClassName('audio-qu');
           //loop of div 
            for (var i = 0 ; i < img.length; i++){
                img[i].addEventListener('click', function(){
                playButton.style.backgroundImage = "url('../assets/images/play.png')";
                var sound=this.lastElementChild;
                stopAllAudio();
                audioAll.currentTime=0;
                sound.pause();
                sound.currentTime=0;
                sound.play();
                });
            }
            //correct & inccorect 
            var correctaudio=document.getElementById('correct');
            var inccorectaudio=document.getElementById('incorrect');
            $('.selectpicker').change(function(){
               
                var classvalue= $(this).find("option:selected").val();
                var selectedvalue=$(this).find("option.right").val();
              
                   if(classvalue!==selectedvalue){
                       //if wrong
                        var pr = $(this).parent();
                        pr.addClass('wrong');
                        //var audio = new Audio('../assets/audio/incorrect.mp3');
                        inccorectaudio.play();
                        setTimeout(function() {
                        pr.removeClass('wrong');
                   }, 1000);
                   }else{
                       //if right
                       
                       $(this).parent().addClass('correct');
                      // var audio2 = new Audio('../assets/audio/correct.mp3');
                      correctaudio.play();
                        var imagedisabled= $(this).parents().eq(3).find('.quiz-image');
                        imagedisabled.addClass('disabledimage');
                   }

           });
           //disable and show answer
           var showans =document.getElementById('show-ans');
           showans.addEventListener("click", function() {
            var imagedisabled= $(this).parents().eq(4).find('.quiz-image');
            imagedisabled.addClass('disabledimage'); 
            
        // $('option:selected', $('.selectpicker').parent() ).prop("selected", false);
           $(".selectpicker option[class=right]").attr('selected', 'selected').val(); 
  
         
           $(this).addClass('disabledimage');
        
       $('.selectpicker').change();
       stopAllAudio()
           });
           //replay
           var replay =document.getElementById('replay');
           replay.addEventListener("click", function() {
           var rem= $(this).parents().eq(6);
            rem.find('.quiz-image').removeClass('disabledimage');
            rem.find('#show-ans').removeClass('disabledimage');
            rem.find('.select-selected').removeClass('correct');
       
        }); 
        
           
};

window.resize = function() {
    var newwidth = $(window).innerWidth();
    var newheight = $(window).innerHeight();      
    $("#body").height(newheight).width(newwidth);
      }
// $(document).ready(function(){
//     $('#body').css('min-height', '100%');

//     // var width = document.getElementById('body').offsetWidth;
//     //             var height = document.getElementById('body').offsetHeight;
//     //             var windowWidth = $(document).outerWidth();
//     //             var windowHeight = $(document).outerHeight();
//     //             var r = 1;
//     //             r = Math.min(windowWidth / width, windowHeight / height)
    
//     //             $('#body').css({
//     //                 '-webkit-transform': 'scale(' + r + ')',
//     //                 '-moz-transform': 'scale(' + r + ')',
//     //                 '-ms-transform': 'scale(' + r + ')',
//     //                 '-o-transform': 'scale(' + r + ')',
//     //                 'transform': 'scale(' + r + ')'
//     //             });
    
//     });
