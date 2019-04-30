var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./山/縮小/25.jpg', './山/縮小/26.jpg', './山/縮小/27.jpg'];
var imgurlind = ['./山html/Smangus.html', './山html/TaipingSuspensionBridge.html', './山html/LongpanPark.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');