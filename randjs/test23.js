var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/縮小/19.jpg', './小火車/縮小/20.jpg', './小火車/縮小/21.jpg'];
var imgurlind = ['./小火車html/Wulai.html', './小火車html/ShenaoLine.html', './小火車html/Jiji.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');