var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/縮小/16.jpg', './小火車/縮小/17.jpg', './小火車/縮小/18.jpg'];
var imgurlind = ['./小火車html/AlishanForestRailway.html', './小火車html/AlishanForestRailway.html', './小火車html/Taoyuan.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');