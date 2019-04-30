var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./摩天輪/03.jpg', './摩天輪/06.jpg', './摩天輪/09.jpg', './摩天輪/12.jpg', './摩天輪/15.jpg', './摩天輪/18.jpg',
			  './摩天輪/21.jpg', './摩天輪/24.jpg', './摩天輪/27.jpg'];
var imgurlind = ['./摩天輪html/skydream.html', './摩天輪html/JanfusunFancyworld.html', './摩天輪html/Miramar.html', './摩天輪html/EDAWorld.html', './摩天輪html/TCAP.html', './摩天輪html/DreamMall.html',
				 './摩天輪html/TAROKOPARK.html', './摩天輪html/HualienFargloryOceanPark.html', './摩天輪html/MitsuiOutletPark.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');