var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./摩天輪/01.jpg', './摩天輪/04.jpg', './摩天輪/07.jpg', './摩天輪/10.jpg', './摩天輪/13.jpg', './摩天輪/16.jpg',
			  './摩天輪/19.jpg', './摩天輪/22.jpg', './摩天輪/25.jpg'];
var imgurlind = ['./摩天輪html/skydream.html', './摩天輪html/JanfusunFancyworld.html', './摩天輪html/Miramar.html', './摩天輪html/EDAWorld.html', './摩天輪html/TCAP.html', './摩天輪html/WindowonChina.html',
				 './摩天輪html/DreamMall.html', './摩天輪html/TAROKOPARK.html', './摩天輪html/MitsuiOutletPark.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');