var imgnumber = Math.floor(Math.random()*4);
var imgurl = ['./海邊/縮小/26.jpg', './海邊/縮小/10.jpg', './海邊/縮小/28.jpg', './海邊/縮小/29.jpg'];
var imgurlind = ['./海邊html/YinyangSea.html', './海邊html/Fenniaolin.html', './海邊html/HsinchuHaishanFishingPort.html', './海邊html/ChiayiDongshihFishingPort.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');