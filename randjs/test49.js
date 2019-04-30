var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./人造建築物/縮小/25.jpg', './人造建築物/縮小/26.jpg', './人造建築物/縮小/27.jpg'];
var imgurlind = ['./人造建築物html/NantouConasChocolateCastle.html', './人造建築物html/paperdome.html', './人造建築物html/KaohsiungRainbowArch.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');