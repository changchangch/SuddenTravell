var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/縮小/25.jpg', './花海/縮小/26.jpg', './花海/縮小/27.jpg'];
var imgurlind = ['./花海html/ChanghuaErlin.html', './花海html/ChanghuaBeidou.html', './花海html/HsinchuXiuhu.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');