var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./人造建築物/縮小/19.jpg', './人造建築物/縮小/20.jpg', './人造建築物/縮小/21.jpg', './人造建築物/縮小/22.jpg', './人造建築物/縮小/23.jpg', './人造建築物/縮小/24.jpg',
			  './人造建築物/縮小/25.jpg', './人造建築物/縮小/26.jpg', './人造建築物/縮小/27.jpg'];
var imgurlind = ['./人造建築物html/TainanChimeiMuseum.html', './人造建築物html/TainanImmigration.html', './人造建築物html/TainanHolland.html', './人造建築物html/YilanLanyangMuseum.html', './人造建築物html/TheLuceChapel.html', './人造建築物html/ChiayiCrystalHighHeelShapedChurch.html',
				 './人造建築物html/NantouConasChocolateCastle.html', './人造建築物html/paperdome.html', './人造建築物html/KaohsiungRainbowArch.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');