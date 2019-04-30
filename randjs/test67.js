var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./海邊/縮小/12.jpg', './海邊/縮小/24.jpg', './海邊/縮小/32.jpg'];
var imgurlind = ['./海邊html/HualienChihsingtanBeach.html', './海邊html/JinshanSecretBeach.html', './海邊html/PenghuJibeiyu(Shawei).html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');