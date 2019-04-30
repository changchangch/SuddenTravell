var imgnumber = Math.floor(Math.random()*4);
var imgurl = ['./海邊/縮小/14.jpg', './海邊/縮小/15.jpg', './海邊/縮小/16.jpg', './海邊/縮小/17.jpg'];
var imgurlind = ['./海邊html/HualienCiwidianBeach.html', './海邊html/HualienCingshueiCliff.html', './海邊html/KinmenCihLake.html', './海邊html/HengchunXingShaWan.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');