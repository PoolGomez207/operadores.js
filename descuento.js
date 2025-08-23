let com=parseInt(prompt("ingrese el valor de su compra"));
var des=com -(com*0.10)
let des2=com -(com*0.20)
if (com>=100 && com<=199){
    alert("obtienes un descuento del 10%, el valor a pagar es: " + des)
}
else if (com>200){
    alert("obtienes un descuento del 20%, el valor a pagar es: " + des2)
}
else if (com){
    alert("Paga el valor completo")
}
//ternario
(com>=100 && com<=199)?  alert("obtienes un descuento del 10%, el valor a pagar es: " + des):
(com>200)?  alert("obtienes un descuento del 20%, el valor a pagar es: " + des2):(com)?  alert("Paga el valor completo"): 
alert("ingrese el valor de su compra, no dar un valor negativo")