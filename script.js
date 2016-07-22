$(document).ready(function () {
	createjs.Sound.addEventListener("fileload", handleFileLoad);
	// Browsers with MP3 support will load "music.mp3"
	// Firefox and Opera will load "music.ogg"
	createjs.Sound.registerSound({id:"soundId", src:"images/music.mp3|images/music.ogg"});
	function handleFileLoad(event) {
	// A sound has been preloaded. This will fire TWICE
	console.log("Preloaded:", event.id, event.src);
	$('#anim-hide').fadeIn('slow');
	}
	$('#start').click(function () {
	$('#scene7').css('display', 'none');
	$('.restaurant-name').css('display', 'block');
	createjs.Sound.play("soundId");
	$('.anim-start').fadeOut('fast');
	$('.anim-start').css('display', 'none');
	$('#scene1 .total').addClass('walk-in');
	$('#scene1 .head').addClass('walking-head');
	$('#scene1 .hand1').addClass('movement2');
	$('#scene1 .hand2').addClass('movement1');
	$('#scene1 .leg1').addClass('movement1');
	$('#scene1 .leg2').addClass('movement2');
	$('#1').css('display', 'block');
	setTimeout(function(){stop();$('#1').css('display', 'none');},6000);
	setTimeout(function(){look();$('#2').css('display', 'block');},7000);
	setTimeout(function(){
		$('#scene1').css('display','none');
		$('#scene2').css('display','block');
		littleFurther();
		kick();
	},13000);
	setTimeout(function(){
		$('#scene2').css('display','none');
		$('#scene3').css('display','block');
		stopkick();
		walkAway();
	},14000);
	setTimeout(function(){
		$('#scene3').css('display','none');
		$('#scene4').css('display','block');
	},20000);
	setTimeout(function () {
		$('#2').css('display', 'none');
		$('#scene4').css('display','none');
		$('.restaurant-name').css('display','none');
		$('#3').css('display', 'block');
		$('#scene5').css('display','block');
	},22000);
	setTimeout(function () {
		$('#3').css('display', 'none');
		$('#scene5').css('display','none');
		$('#4').css('display', 'block');
		$('.restaurant-name').css('display','block');
		$('#scene4').css('display','block');		
	},28000);
	setTimeout(function () {
		$('#4').css('display', 'none');
		$('.restaurant-name').css('display','none');
		$('#scene4').css('display','none');
		$('#scene5').css('display','block');
		$('#3').css('display', 'block');
	},32000);
	
	setTimeout(function () {
		$('#3').css('display', 'none');
		$('#scene5').css('display','none');
		$('.restaurant-name').css('display','block');
		$('#scene6').css('display','block');
		$('#scene6 .superman-total').addClass('fly-in');
		setTimeout(function () {
			$('#scene6 .superman-total').css('display','none');
			$('#scene6 .door .smash-area').addClass('hulk-smash');
			$('#scene6 .signs').addClass('drop');
			$('#5').css('display', 'block');
		},4000)
	},35000);
	//setTimeout(function(){littleFurther(),13000})
	//setTimeout(function(){kick()},13000);
	setTimeout(function(){
		$('.restaurant-name').css('display', 'none');
		$('#scene6').css('display','none');
		$('#5').css('display', 'none');
		$('#scene7').fadeIn('slow');
	}, 53000);
	});
	
});

function walkIntro (argument) {
	$('.leg1').addClass('movement1');
	$('.leg2').addClass('movement2');
	$('.head').addClass('walking-head');
	setTimeout(function(){stop()},3000);

}

	function ajaxShit() {
		var x = document.getElementById('email').value;
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  		{
  			document.getElementById('msg').innerHTML = "<span style='color:red;'>Oops!! wrong email id format<span>";
  			return false;
  		} else {
  			var mypostrequest=new ajaxRequest()
			mypostrequest.onreadystatechange=function(){
			 if (mypostrequest.readyState==4){
			  if (mypostrequest.status==200 || window.location.href.indexOf("http")==-1){
			   document.getElementById("msg").innerHTML=mypostrequest.responseText;
                           document.getElementById("email").value = "";

			  }
			  else{
			   alert("An error has occured making the request");
			  }
			 }
		}
		var parameters="email="+x;
		mypostrequest.open("POST", "http://www.40tables.com/submit.php", true)
		mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
		mypostrequest.send(parameters)
  		}
	}

function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"] //activeX versions to check for in IE
 if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
  for (var i=0; i<activexmodes.length; i++){
   try{
    return new ActiveXObject(activexmodes[i])
   }
   catch(e){
    //suppress error
   }
  }
 }
 else if (window.XMLHttpRequest) // if Mozilla, Safari etc
  return new XMLHttpRequest()
 else
  return false
}


function walkAway () {
	$('#scene3 .total').addClass('walk-away');
	$('#scene3 .leg1').addClass('movement1');
	$('#scene3 .leg2').addClass('movement2');
	$('#scene3 .hand1').addClass('movement2');
	$('#scene3 .hand2').addClass('movement1');
	$('#scene3 .head').addClass('walking-head');
}

function littleFurther () {
	$('#scene2 .total').addClass('little-further');
	$('#scene2 .leg1').addClass('movement1');
	$('#scene2 .leg2').addClass('movement2');
	$('#scene2 .hand1').addClass('movement2');
	$('#scene2 .hand2').addClass('movement1');
	$('#scene2 .head').addClass('walking-head');
	
}

function look () {
	$('#scene1 .head').addClass('heads-up');
}

function kick () {
	$('#scene3 .leg2').addClass('kick-trash');
	$('#scene3 .trash').addClass('spin');
}

function stopkick () {
	$('#scene3 .leg2').removeClass('kick-trash');
}

function stop () {
	$('.leg1').removeClass('movement1');
	$('.leg2').removeClass('movement2');
	$('.hand1').removeClass('movement2');
	$('.hand2').removeClass('movement1');
	$('.head').removeClass('walking-head');
	$('.total').removeClass('walk-in');
}