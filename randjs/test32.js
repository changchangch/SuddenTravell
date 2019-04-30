var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./花海/10.jpg', './花海/11.jpg', './花海/12.jpg', './花海/13.jpg', './花海/14.jpg', './花海/15.jpg',
			  './花海/16.jpg', './花海/17.jpg', './花海/18.jpg'];
var imgurlind = ['./花海html/FushoushanFarm.html', './花海html/ShilinResidence.html', './花海html/ShilinResidence.html', './花海html/Yangmingshan.html', './花海html/Yangmingshan.html', './花海html/Guandu.html',
				 './花海html/Guandu.html', './花海html/TheCoastalRange.html', './花海html/SunMoonLake.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');