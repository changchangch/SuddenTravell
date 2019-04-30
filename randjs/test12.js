var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./山/10.JPG', './山/11.jpg', './山/12.JPG', './山/13.jpg', './山/14.jpg', './山/15.jpg',
			  './山/16.jpeg', './山/17.jpg', './山/18.jpg'];
var imgurlind = ['./山html/Taipingshan.html', './山html/TaoyuanValley.html', './山html/CaolingHistoricTrail.html', './山html/TaitungJingong.html', './山html/Alanyi.html', './山html/LiyuLake.html',
				 './山html/BaishihMountain.html', './山html/HehuanMountain.html', './山html/ChingjingFarm.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');