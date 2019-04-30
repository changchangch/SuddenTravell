var imgnumber = Math.floor(Math.random()*4);
var imgurl = ['./海邊/縮小/31.jpg', './海邊/縮小/06.jpg','./海邊/縮小/07.jpg', './海邊/縮小/08.jpg'];
var imgurlind = ['./海邊html/PenghuShanshuiBeach.html', './海邊html/Torik(Duli).html','./海邊html/TaitungJinzun.html', './海邊html/Fenniaolin.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');