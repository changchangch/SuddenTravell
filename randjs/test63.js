var imgnumber = Math.floor(Math.random()*11);
var imgurl = ['./海邊/26.JPG', './海邊/10.jpg', './海邊/28.jpg', './海邊/29.jpg', './海邊/30.jpg', './海邊/05.jpg',
			  './海邊/25.jpg', './海邊/33.jpg', './海邊/34.jpg', './海邊/03.jpg', './海邊/36.jpg'];
var imgurlind = ['./海邊html/YinyangSea.html', './海邊html/Fenniaolin.html', './海邊html/HsinchuHaishanFishingPort.html', './海邊html/ChiayiDongshihFishingPort.html', './海邊html/ChanghuaWangongFishingPort.html', './海邊html/Gaomei.html',
				 './海邊html/JinshanSecretBeach.html', './海邊html/PenghuQimeiTwin-HeartsStoneWeir.html', './海邊html/KentingBeach.html', './海邊html/NeipiBeach.html', './海邊html/KentingSouthBeach.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');