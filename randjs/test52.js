var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./摩天輪/縮小/02.jpg', './摩天輪/縮小/05.jpg', './摩天輪/縮小/08.jpg'];
var imgurlind = ['./摩天輪html/skydream.html', './摩天輪html/JanfusunFancyworld.html', './摩天輪html/Miramar.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');