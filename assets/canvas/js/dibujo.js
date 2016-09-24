var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;

while()
{
  
}

console.log(lienzo);

dibujarLinea("#AAF", 0, 0 , 10, 300);
dibujarLinea("#AAF", 0, 10, 20, 300);
dibujarLinea("#AAF", 0, 20, 30, 300);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
