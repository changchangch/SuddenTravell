var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/縮小/25.jpg', './小火車/縮小/26.jpg', './小火車/縮小/27.jpg'];
var imgurlind = ['./小火車html/PIER-2.html', './小火車html/HsinchuKangLang.html', './小火車html/OldMountainLineRailBike.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');