var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/縮小/01.jpg', './花海/縮小/02.jpg', './花海/縮小/03.jpg'];
var imgurlind = ['./花海html/wulingfarm.html', './花海html/wulingfarm.html', './花海html/wulingfarm.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');