var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./小火車/縮小/01.jpg', './小火車/縮小/02.jpg', './小火車/縮小/03.jpg', './小火車/縮小/04.jpg', './小火車/縮小/05.jpg', './小火車/縮小/06.jpg',
			  './小火車/縮小/07.jpg', './小火車/縮小/08.jpg', './小火車/縮小/09.jpg'];
var imgurlind = ['./小火車html/TaipeiMetropolitanPark.html', './小火車html/TaipeiMetropolitanPark.html', './小火車html/NeiwanLine.html', './小火車html/NeiwanLine.html', './小火車html/NeiwanLine.html', './小火車html/TaipingshanBongBongTrain.html',
				 './小火車html/TaipingshanBongBongTrain.html', './小火車html/HotelCOZZI.html', './小火車html/HotelCOZZI.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');