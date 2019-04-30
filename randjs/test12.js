var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./山/縮小/10.jpg', './山/縮小/11.jpg', './山/縮小/12.jpg'];
var imgurlind = ['./山html/Taipingshan.html', './山html/TaoyuanValley.html', './山html/CaolingHistoricTrail.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');