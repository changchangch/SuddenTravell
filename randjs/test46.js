var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./人造建築物/縮小/13.jpg', './人造建築物/縮小/14.jpg', './人造建築物/縮小/15.jpg'];
var imgurlind = ['./人造建築物html/DharmaDrumMountainNungChanMonastery.html', './人造建築物html/TaitungLibrary.html', './人造建築物html/TainanCrystalChurch.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 95%; margin: auto;">'+'</a>');