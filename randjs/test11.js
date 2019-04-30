var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./山/01.jpg', './山/02.jpg', './山/03.jpg', './山/04.jpg', './山/05.jpg', './山/06.jpg',
			  './山/07.jpg', './山/08.jpg', './山/09.jpg'];
var imgurlind = ['./山html/TaichungWaipu.html', './山html/wulingfarm.html', './山html/TatunVolcano.html', './山html/CingtiangangGrassland.html', './山html/BiTouCape.html', './山html/SiaoguanyinMountain.html',
				 './山html/MenghuanPond.html', './山html/mongmonggu.html', './山html/KeeLungMountain.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');