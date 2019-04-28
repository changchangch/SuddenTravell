var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./花海/縮小/10.jpg', './花海/縮小/11.jpg', './花海/縮小/12.jpg', './花海/縮小/13.jpg', './花海/縮小/14.jpg', './花海/縮小/15.jpg',
			  './花海/縮小/16.jpg', './花海/縮小/17.jpg', './花海/縮小/18.jpg'];
var imgurlind = ['./花海html/FushoushanFarm.html', './花海html/ShilinResidence.html', './花海html/ShilinResidence.html', './花海html/Yangmingshan.html', './花海html/Yangmingshan.html', './花海html/Guandu.html',
				 './花海html/Guandu.html', './花海html/TheCoastalRange.html', './花海html/SunMoonLake.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');