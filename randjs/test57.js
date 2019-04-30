var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./摩天輪/縮小/20.jpg', './摩天輪/縮小/23.jpg', './摩天輪/縮小/26.jpg'];
var imgurlind = ['./摩天輪html/TAROKOPARK.html', './摩天輪html/HualienFargloryOceanPark.html', './摩天輪html/MitsuiOutletPark.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');