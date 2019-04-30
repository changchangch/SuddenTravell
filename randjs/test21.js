var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./小火車/01.jpg', './小火車/02.jpg', './小火車/03.jpg', './小火車/04.jpg', './小火車/05.jpg', './小火車/06.jpg',
			  './小火車/07.jpg', './小火車/08.jpg', './小火車/09.jpg'];
var imgurlind = ['./小火車html/TaipeiMetropolitanPark.html', './小火車html/TaipeiMetropolitanPark.html', './小火車html/NeiwanLine.html', './小火車html/NeiwanLine.html', './小火車html/NeiwanLine.html', './小火車html/TaipingshanBongBongTrain.html',
				 './小火車html/TaipingshanBongBongTrain.html', './小火車html/HotelCOZZI.html', './小火車html/HotelCOZZI.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');