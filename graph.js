var cnvs = document.getElementById("gr"),
panel = cnvs.getContext('2d');
panel.strokeRect(0, 0, cnvs.width, cnvs.height);


var y0 = cnvs.height / 2;
var x0 = cnvs.width / 2;

// плоскость
panel.beginPath();
panel.moveTo(x0, 0);
panel.lineTo(x0, cnvs.height);
panel.moveTo(0, y0);
panel.lineTo(cnvs.width, y0);
panel.strokeStyle = "gray";
panel.stroke();


// точки на плоскости
for (var i = x0-cnvs.width; i <= cnvs.width; i+=15) {	
    panel.beginPath();
    panel.arc(i, y0, 1, 0, 2*Math.PI, false);
    panel.strokeStyle = "gray";
    panel.stroke();
}
for (var j = y0-cnvs.height; j <= cnvs.height; j+=15) {
	panel.beginPath();
    panel.arc(x0, j, 1, 0, 2*Math.PI, false);
    panel.strokeStyle = "gray";
    panel.stroke();
}

panel.fillText('O', x0-10, y0+10);

panel.strokeStyle = "black";
panel.stroke();


// график
panel.beginPath();
for (var x = x0-cnvs.width; x <= x0; x++) {
  var y = f(x);
  //console.log('x: '+x+'  '+'y: '+y);
  panel.lineTo(x*15+x0,y0-y*15);
}
panel.strokeStyle = "red";
panel.stroke();

//
function f(x) {
	x=x+3;
	return Math.pow(x,2);
}



/// рисуем
//cnvs.onclick = function() {
//	alert('onclick on canvas');
//}


