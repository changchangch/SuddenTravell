var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/縮小/10.jpg', './花海/縮小/11.jpg', './花海/縮小/12.jpg'];
var imgurlind = ['./花海html/FushoushanFarm.html', './花海html/ShilinResidence.html', './花海html/ShilinResidence.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');