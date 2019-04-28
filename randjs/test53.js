var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./摩天輪/縮小/03.jpg', './摩天輪/縮小/06.jpg', './摩天輪/縮小/09.jpg', './摩天輪/縮小/12.jpg', './摩天輪/縮小/15.jpg', './摩天輪/縮小/18.jpg',
			  './摩天輪/縮小/21.jpg', './摩天輪/縮小/24.jpg', './摩天輪/縮小/27.jpg'];
var imgurlind = ['./摩天輪html/skydream.html', './摩天輪html/JanfusunFancyworld.html', './摩天輪html/Miramar.html', './摩天輪html/EDAWorld.html', './摩天輪html/TCAP.html', './摩天輪html/DreamMall.html',
				 './摩天輪html/TAROKOPARK.html', './摩天輪html/HualienFargloryOceanPark.html', './摩天輪html/MitsuiOutletPark.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');