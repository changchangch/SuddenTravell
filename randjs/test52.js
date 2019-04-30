var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./摩天輪/02.jpg', './摩天輪/05.jpg', './摩天輪/08.jpg', './摩天輪/11.jpg', './摩天輪/14.jpg', './摩天輪/17.jpg',
			  './摩天輪/20.jpg', './摩天輪/23.jpg', './摩天輪/26.jpg'];
var imgurlind = ['./摩天輪html/skydream.html', './摩天輪html/JanfusunFancyworld.html', './摩天輪html/Miramar.html', './摩天輪html/EDAWorld.html', './摩天輪html/TCAP.html', './摩天輪html/WindowonChina.html',
				 './摩天輪html/TAROKOPARK.html', './摩天輪html/HualienFargloryOceanPark.html', './摩天輪html/MitsuiOutletPark.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');