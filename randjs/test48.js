var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./人造建築物/縮小/22.jpg', './人造建築物/縮小/23.jpg', './人造建築物/縮小/24.jpg'];
var imgurlind = ['./人造建築物html/YilanLanyangMuseum.html', './人造建築物html/TheLuceChapel.html', './人造建築物html/ChiayiCrystalHighHeelShapedChurch.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');