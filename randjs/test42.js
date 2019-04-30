var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./人造建築物/縮小/10.jpg', './人造建築物/縮小/11.jpg', './人造建築物/縮小/12.jpg'];
var imgurlind = ['./人造建築物html/Taipei101.html', './人造建築物html/Taipei101.html', './人造建築物html/SongshanCulturalandCreativePark.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');