var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/縮小/10.jpg', './小火車/縮小/11.jpg', './小火車/縮小/12.jpg'];
var imgurlind = ['./小火車html/PingxiLine.html', './小火車html/PingxiLine.html', './小火車html/PingxiLine.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');