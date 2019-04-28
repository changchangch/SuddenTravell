var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./山/縮小/10.jpg', './山/縮小/11.jpg', './山/縮小/12.jpg', './山/縮小/13.jpg', './山/縮小/14.jpg', './山/縮小/15.jpg',
			  './山/縮小/16.jpg', './山/縮小/17.jpg', './山/縮小/18.jpg'];
var imgurlind = ['./山html/Taipingshan.html', './山html/TaoyuanValley.html', './山html/CaolingHistoricTrail.html', './山html/TaitungJingong.html', './山html/Alanyi.html', './山html/LiyuLake.html',
				 './山html/BaishihMountain.html', './山html/HehuanMountain.html', './山html/ChingjingFarm.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');