var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./人造建築物/縮小/16.jpg', './人造建築物/縮小/17.jpg', './人造建築物/縮小/18.jpg'];
var imgurlind = ['./人造建築物html/TainanBeimen.html', './人造建築物html/TaijiangNationalPark.html', './人造建築物html/TainanCoffee.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="height: 30%; width: 30%;">'+'</a>');