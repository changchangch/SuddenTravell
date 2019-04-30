var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./人造建築物/縮小/01.jpg', './人造建築物/縮小/02.jpg', './人造建築物/縮小/03.jpg'];
var imgurlind = ['./人造建築物html/LiloBaseBallCreativePark.html', './人造建築物html/LiloBaseBallCreativePark.html', './人造建築物html/taichung.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');