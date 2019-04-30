var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/縮小/22.jpg', './小火車/縮小/23.jpg', './小火車/縮小/24.jpg'];
var imgurlind = ['./小火車html/HsinchuHexingStation.html', './小火車html/KaohsiungXinyingSugarRefinery.html', './小火車html/ChanghuaXihuSugarRefinery.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');