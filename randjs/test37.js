var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/縮小/16.jpg', './花海/縮小/17.jpg', './花海/縮小/18.jpg'];
var imgurlind = ['./花海html/Guandu.html', './花海html/TheCoastalRange.html', './花海html/SunMoonLake.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');