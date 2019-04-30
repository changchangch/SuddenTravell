var imgnumber = Math.floor(Math.random()*4);
var imgurl = ['./海邊/縮小/30.jpg', './海邊/縮小/05.jpg', './海邊/縮小/25.jpg', './海邊/縮小/33.jpg'];
var imgurlind = ['./海邊html/ChanghuaWangongFishingPort.html', './海邊html/Gaomei.html', './海邊html/JinshanSecretBeach.html', './海邊html/PenghuQimeiTwin-HeartsStoneWeir.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');