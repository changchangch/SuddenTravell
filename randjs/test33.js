var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/縮小/19.jpg', './花海/縮小/20.jpg', './花海/縮小/21.jpg'];
var imgurlind = ['./花海html/PingtungXinpi.html', './花海html/MiaoliTongluo.html', './花海html/TaShee.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');