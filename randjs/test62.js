var imgnumber = Math.floor(Math.random()*11);
var imgurl = ['./海邊/14.jpg', './海邊/15.jpg', './海邊/16.jpg', './海邊/17.jpg', './海邊/19.jpg', './海邊/20.jpg',
			  './海邊/09.jpg', './海邊/22.jpg', './海邊/12.jpg', './海邊/24.jpg', './海邊/32.jpg'];
var imgurlind = ['./海邊html/HualienCiwidianBeach.html', './海邊html/HualienCingshueiCliff.html', './海邊html/KinmenCihLake.html', './海邊html/HengchunXingShaWan.html', './海邊html/MatsuSeaofStars.html', './海邊html/KaohsiungSizihwan.html',
				 './海邊html/Fenniaolin.html', './海邊html/TamshuiFishermansWharf.html', './海邊html/HualienChihsingtanBeach.html', './海邊html/JinshanSecretBeach.html', './海邊html/PenghuJibeiyu(Shawei).html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');