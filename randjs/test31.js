var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./花海/01.jpg', './花海/02.jpg', './花海/03.jpg', './花海/04.jpg', './花海/05.jpg', './花海/06.jpg',
			  './花海/07.jpg', './花海/08.jpg', './花海/09.jpg'];
var imgurlind = ['./花海html/wulingfarm.html', './花海html/wulingfarm.html', './花海html/wulingfarm.html', './花海html/Xinshe.html', './花海html/Xinshe.html', './花海html/Xinshe.html',
				 './花海html/Xinshe.html', './花海html/FushoushanFarm.html', './花海html/FushoushanFarm.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');