var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/縮小/04.jpg', './小火車/縮小/05.jpg', './小火車/縮小/06.jpg'];
var imgurlind = ['./小火車html/NeiwanLine.html', './小火車html/NeiwanLine.html', './小火車html/TaipingshanBongBongTrain.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');