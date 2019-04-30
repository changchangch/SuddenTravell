var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/縮小/01.jpg', './小火車/縮小/02.jpg', './小火車/縮小/03.jpg'];
var imgurlind = ['./小火車html/TaipeiMetropolitanPark.html', './小火車html/TaipeiMetropolitanPark.html', './小火車html/NeiwanLine.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');