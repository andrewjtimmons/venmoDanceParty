//randomize it
//set bpm for song

$(window).load(function() { 
	console.log('loaded')
	var gifUrls = ['https://s3.amazonaws.com/venmo/j5team/kortina.gif', 'https://s3.amazonaws.com/venmo/j5team/iqram.gif', 'https://s3.amazonaws.com/venmo/j5team/mike.gif', 'https://s3.amazonaws.com/venmo/j5team/john.gif', 'https://s3.amazonaws.com/venmo/j5team/jesse.gif', 'https://s3.amazonaws.com/venmo/j5team/delano.gif', 'https://s3.amazonaws.com/venmo/j5team/adames.gif', 'https://s3.amazonaws.com/venmo/j5team/MatthewHamilton.gif', 'https://s3.amazonaws.com/venmo/j5team/BridgetteWeeks.gif', 'https://s3.amazonaws.com/venmo/j5team/BillBlystone.gif', 'https://s3.amazonaws.com/venmo/j5team/AyakaNonaka.gif', 'https://s3.amazonaws.com/venmo/j5team/CodyDeLaVara.gif', 'https://s3.amazonaws.com/venmo/j5team/yim.gif', 'https://s3.amazonaws.com/venmo/j5team/AndyEnkeboll.gif', 'https://s3.amazonaws.com/venmo/j5team/JTGlaze.gif', 'https://s3.amazonaws.com/venmo/j5team/TheresaReagan.gif', 'https://s3.amazonaws.com/venmo/j5team/KatieSimon.gif', 'https://s3.amazonaws.com/venmo/j5team/RobertCheung.gif', 'https://s3.amazonaws.com/venmo/j5team/LucasChi.gif', 'https://s3.amazonaws.com/venmo/j5team/LiliJiang.gif', 'https://s3.amazonaws.com/venmo/j5team/AmandaLi.gif', 'https://s3.amazonaws.com/venmo/j5team/AlexWilson.gif', 'https://s3.amazonaws.com/venmo/j5team/RyanBellanger.gif', 'https://s3.amazonaws.com/venmo/j5team/LeannaYee.gif', 'https://s3.amazonaws.com/venmo/j5team/CherieHamblin.gif', 'https://s3.amazonaws.com/venmo/j5team/WillyHuang.gif', 'https://s3.amazonaws.com/venmo/j5team/SimonWeber.gif', 'https://s3.amazonaws.com/venmo/j5team/JeremiahShirk.gif', 'https://s3.amazonaws.com/venmo/j5team/IffatKabeer.gif', 'https://s3.amazonaws.com/venmo/j5team/DasmerSingh.gif', 'https://s3.amazonaws.com/venmo/j5team/LiamGriffiths.gif', 'https://s3.amazonaws.com/venmo/j5team/JohnBarbuto.gif', 'https://s3.amazonaws.com/venmo/j5team/KeithAhn.gif', 'https://s3.amazonaws.com/venmo/j5team/RobinSpencer.gif', 'https://s3.amazonaws.com/venmo/j5team/PaulPadier.gif', 'https://s3.amazonaws.com/venmo/j5team/AdityaPasumarty.gif', 'https://s3.amazonaws.com/venmo/j5team/KatieSilverio.gif', 'https://s3.amazonaws.com/venmo/j5team/AmandaHill.gif', 'https://s3.amazonaws.com/venmo/j5team/TyeWang.gif', 'https://s3.amazonaws.com/venmo/j5team/SelenaNanthavong.gif', 'https://s3.amazonaws.com/venmo/j5team/SarahRansohoff.gif', 'https://s3.amazonaws.com/venmo/j5team/CassidyWilliams.gif', 'https://s3.amazonaws.com/venmo/j5team/JoelBixby.gif', 'https://s3.amazonaws.com/venmo/j5team/EstherJang.gif', 'https://s3.amazonaws.com/venmo/j5team/AmyHanlon.gif', 'https://s3.amazonaws.com/venmo/j5team/EdmundYan.gif', 'https://s3.amazonaws.com/venmo/j5team/MikeCohen.gif', 'https://s3.amazonaws.com/venmo/j5team/ChrisAdams.gif', 'https://s3.amazonaws.com/venmo/j5team/AlexKurihara.gif', 'https://s3.amazonaws.com/venmo/j5team/AmandaSchloss.gif', 'https://s3.amazonaws.com/venmo/j5team/NuseirYassin.gif', 'https://s3.amazonaws.com/venmo/j5team/KatieMulligan.gif', 'https://s3.amazonaws.com/venmo/j5team/KatieRyan.gif', 'https://s3.amazonaws.com/venmo/j5team/SavannahHankinson.gif', 'https://s3.amazonaws.com/venmo/j5team/MattFanelli.gif', 'https://s3.amazonaws.com/venmo/j5team/DustinShapiro.gif', 'https://s3.amazonaws.com/venmo/j5team/CynthiaMonarrez.gif', 'https://s3.amazonaws.com/venmo/j5team/NickGudauskas.gif', 'https://s3.amazonaws.com/venmo/j5team/ByronMelton.gif', 'https://s3.amazonaws.com/venmo/j5team/JamesRudolph.gif', 'https://s3.amazonaws.com/venmo/j5team/MichaelGovaere.gif', 'https://s3.amazonaws.com/venmo/j5team/EliPerkins.gif', 'https://s3.amazonaws.com/venmo/j5team/JamesThompson.gif', 'https://s3.amazonaws.com/venmo/j5team/SueChoe.gif', 'https://s3.amazonaws.com/venmo/j5team/ZihaoXia.gif', 'https://s3.amazonaws.com/venmo/j5team/StanShcherbakov.gif', 'https://s3.amazonaws.com/venmo/j5team/CraigStrauss.gif', 'https://s3.amazonaws.com/venmo/j5team/MollyFord.gif', 'https://s3.amazonaws.com/venmo/j5team/NavShergill.gif', 'https://s3.amazonaws.com/venmo/j5team/KevinEder.gif', 'https://s3.amazonaws.com/venmo/j5team/JorgeEscobar.gif', 'https://s3.amazonaws.com/venmo/j5team/TiemSong.gif', 'https://s3.amazonaws.com/venmo/j5team/EileenYau.gif', 'https://s3.amazonaws.com/venmo/j5team/LianeHajduch.gif', 'https://s3.amazonaws.com/venmo/j5team/AJ Jambu.gif']
  var gifDiv = document.getElementById('gifDiv');
  var id = 'gif'

  //if mobile make them use desktop
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          document.write("<h1>Please<br/>look<br/>at<br/>this<br/>on<br/>a<br/>desktop<br/>computer.</h1>")
  } else {
		initialize(id);
		loopGifs(id);
  }

	function setImageVisible(id, visible) {
		    var img = document.getElementById(id);
		    img.style.visibility = (visible ? 'visible' : 'hidden');
		}

		function initialize(id) {
	    //create the universe
	    $(document.body).append(
	  		'<img id="' + 
	  		id +
	  		'" style="background:url('+
	  		gifUrls[1] +
	  		')" src ="' +
	  		gifUrls[0] +
	  		'">'
	    	)
	  }

	function swapBackgroundToForeground(id) {
		//get bg image url
		var img = document.getElementById(id);
		style = img.currentStyle || window.getComputedStyle(img, false);
		bg_img_url = style.backgroundImage.slice(4, -1);

		//set bg as foreground
		document.getElementById(id).src = bg_img_url;
	}

	function setNewBackgroundImage(id, index) {
		nextImage = gifUrls[index]
		document.getElementById(id).style.backgroundImage = "url(" + nextImage + ")";
	}

	function loopGifs() {
		//start index at two because we already used the first two images
		var index = 2
		setInterval(function() {
			if (index == gifUrls.length){
				index = 0
			}
			swapBackgroundToForeground(id)
			setNewBackgroundImage(id, index)
			index += 1
	  }, 2977);
	}
})