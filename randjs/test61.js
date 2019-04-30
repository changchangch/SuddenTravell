var imgnumber = Math.floor(Math.random()*12);
var imgurl = ['./海邊/01.jpg', './海邊/02.jpg', './海邊/35.jpg', './海邊/04.jpg', './海邊/31.jpg', './海邊/06.jpg',
			  './海邊/07.jpg', './海邊/08.jpg', './海邊/21.jpg', './海邊/27.jpg', './海邊/11.jpg', './海邊/23.jpg'];
var imgurlind = ['./海邊html/Liuqiu.html', './海邊html/NeipiBeach.html', './海邊html/KentingBaishawan.html', './海邊html/Gaomei.html', './海邊html/PenghuShanshuiBeach.html', './海邊html/Torik(Duli).html',
				 './海邊html/TaitungJinzun.html', './海邊html/Fenniaolin.html', './海邊html/KaohsiungSizihwan.html', './海邊html/HsinchuNanliaoHarbor.html', './海邊html/HualienChihsingtanBeach.html', './海邊html/TamshuiFishermansWharf.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');