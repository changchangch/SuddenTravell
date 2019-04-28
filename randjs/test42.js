var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./人造建築物/縮小/10.jpg', './人造建築物/縮小/11.jpg', './人造建築物/縮小/12.jpg', './人造建築物/縮小/13.jpg', './人造建築物/縮小/14.jpg', './人造建築物/縮小/15.jpg',
			  './人造建築物/縮小/16.jpg', './人造建築物/縮小/17.jpg', './人造建築物/縮小/18.jpg'];
var imgurlind = ['./人造建築物html/Taipei101.html', './人造建築物html/Taipei101.html', './人造建築物html/SongshanCulturalandCreativePark.html', './人造建築物html/DharmaDrumMountainNungChanMonastery.html', './人造建築物html/TaitungLibrary.html', './人造建築物html/TainanCrystalChurch.html',
				 './人造建築物html/TainanBeimen.html', './人造建築物html/TaijiangNationalPark.html', './人造建築物html/TainanCaffe.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');