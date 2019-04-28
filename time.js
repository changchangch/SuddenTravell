var NowDate=new Date();
var h=NowDate.getHours();
if (h <= 9) h = "0" + h; 
var m=NowDate.getMinutes();
if (m <= 9) m = "0" + m; 
var s=NowDate.getSeconds();
if (s <= 9) s = "0" + s; 
document.write(NowDate.getFullYear()+ "年" + (NowDate.getMonth()+1) + "月" + NowDate.getDate() + "日 " + h + ":" + m + ":" + s);