var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./摩天輪/縮小/02.jpg', './摩天輪/縮小/05.jpg', './摩天輪/縮小/08.jpg', './摩天輪/縮小/11.jpg', './摩天輪/縮小/14.jpg', './摩天輪/縮小/17.jpg',
			  './摩天輪/縮小/20.jpg', './摩天輪/縮小/23.jpg', './摩天輪/縮小/26.jpg'];
var imgurlind = ['./摩天輪html/skydream.html', './摩天輪html/JanfusunFancyworld.html', './摩天輪html/Miramar.html', './摩天輪html/EDAWorld.html', './摩天輪html/TCAP.html', './摩天輪html/WindowonChina.html',
				 './摩天輪html/TAROKOPARK.html', './摩天輪html/HualienFargloryOceanPark.html', './摩天輪html/MitsuiOutletPark.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');