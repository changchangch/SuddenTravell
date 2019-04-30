var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/縮小/13.jpg', './小火車/縮小/14.jpg', './小火車/縮小/15.jpg'];
var imgurlind = ['./小火車html/SummerFormosa.html', './小火車html/SummerFormosa.html', './小火車html/Dongshi.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');