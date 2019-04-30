var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./摩天輪/縮小/01.jpg', './摩天輪/縮小/04.jpg', './摩天輪/縮小/07.jpg'];
var imgurlind = ['./摩天輪html/skydream.html', './摩天輪html/JanfusunFancyworld.html', './摩天輪html/Miramar.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');