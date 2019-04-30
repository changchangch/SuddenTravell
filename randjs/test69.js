var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./海邊/縮小/34.jpg', './海邊/縮小/03.jpg', './海邊/縮小/36.jpg'];
var imgurlind = ['./海邊html/KentingBeach.html', './海邊html/NeipiBeach.html', './海邊html/KentingSouthBeach.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');