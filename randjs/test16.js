var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./山/縮小/13.jpg', './山/縮小/14.jpg', './山/縮小/15.jpg'];
var imgurlind = ['./山html/TaitungJingong.html', './山html/Alanyi.html', './山html/LiyuLake.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');