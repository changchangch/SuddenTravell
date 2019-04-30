var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./花海/19.jpg', './花海/20.jpg', './花海/21.jpg', './花海/22.jpg', './花海/23.jpg', './花海/24.jpg',
			  './花海/25.jpg', './花海/26.jpg', './花海/27.jpg'];
var imgurlind = ['./花海html/PingtungXinpi.html', './花海html/MiaoliTongluo.html', './花海html/TaShee.html', './花海html/KaohsiungQiaotou.html', './花海html/YunlinGukeng.html', './花海html/ChiayiTaibao.html',
				 './花海html/ChanghuaErlin.html', './花海html/ChanghuaBeidou.html', './花海html/HsinchuXiuhu.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');