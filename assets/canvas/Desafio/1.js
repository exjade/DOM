var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yf, xi;
var colorcito = "#CE3E3E";

for(l=0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorcito, 300 , yi, xf, 0);
  console.log("linea " + 1);
}

  dibujarLinea(colorcito, 300, 300, 300, 1);
  dibujarLinea(colorcito, 1, 300, 300, 300);
  dibujarLinea(colorcito, 1, 1, 1, 300);
  dibujarLinea(colorcito, 300, 1, 1, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
