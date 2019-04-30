var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/縮小/04.jpg', './花海/縮小/05.jpg', './花海/縮小/06.jpg'];
var imgurlind = ['./花海html/Xinshe.html', './花海html/Xinshe.html', './花海html/Xinshe.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');