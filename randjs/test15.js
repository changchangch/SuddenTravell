var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./山/縮小/07.jpg', './山/縮小/08.jpg', './山/縮小/09.jpg'];
var imgurlind = ['./山html/MenghuanPond.html', './山html/mongmonggu.html', './山html/KeeLungMountain.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');