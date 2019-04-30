var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/縮小/22.jpg', './花海/縮小/23.jpg', './花海/縮小/24.jpg'];
var imgurlind = ['./花海html/KaohsiungQiaotou.html', './花海html/YunlinGukeng.html', './花海html/ChiayiTaibao.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');