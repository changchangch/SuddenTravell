var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./山/19.jpg', './山/20.jpg', './山/21.jpg', './山/22.jpg', './山/23.jpg', './山/24.jpg',
			  './山/25.jpg', './山/26.jpg', './山/27.jpg'];
var imgurlind = ['./山html/AOWANDA.html', './山html/Huoyanshan.html', './山html/zoglan.html', './山html/zoglan.html', './山html/HutouMountain.html', './山html/TaoyuanGuanyin.html',
				 './山html/Smangus.html', './山html/TaipingSuspensionBridge.html', './山html/LongpanPark.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');