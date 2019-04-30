var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./小火車/19.jpg', './小火車/20.jpg', './小火車/21.jpg', './小火車/22.jpg', './小火車/23.jpg', './小火車/24.jpg',
			  './小火車/25.jpg', './小火車/26.jpg', './小火車/27.jpg'];
var imgurlind = ['./小火車html/Wulai.html', './小火車html/ShenaoLine.html', './小火車html/Jiji.html', './小火車html/HsinchuHexingStation.html', './小火車html/KaohsiungXinyingSugarRefinery.html', './小火車html/ChanghuaXihuSugarRefinery.html',
				 './小火車html/PIER-2.html', './小火車html/HsinchuKangLang.html', './小火車html/OldMountainLineRailBike.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');