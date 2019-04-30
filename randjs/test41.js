var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./人造建築物/01.jpg', './人造建築物/02.jpg', './人造建築物/03.jpg', './人造建築物/04.jpg', './人造建築物/05.jpg', './人造建築物/06.jpg',
			  './人造建築物/07.jpg', './人造建築物/08.jpg', './人造建築物/09.jpg'];
var imgurlind = ['./人造建築物html/LiloBaseBallCreativePark.html', './人造建築物html/LiloBaseBallCreativePark.html', './人造建築物html/taichung.html', './人造建築物html/taichungsea.html', './人造建築物html/NationalTaichungTheater.html', './人造建築物html/RainbowVillage.html',
				 './人造建築物html/TaichungQingshui.html', './人造建築物html/TaichungTourism.html', './人造建築物html/TaichungPandingChurch.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 95%; margin: auto;">'+'</a>');