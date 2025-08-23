 let edad = parseInt(prompt("digite la edad"));
if (edad>0 && edad<=12){
    alert("infantil")
}
if (edad>=13 && edad <=17){
    alert("adolecente")
}
if(edad>=18 && edad<=59){
    alert("adulto")
}
if(edad>=60){
    alert("adulto mayor")
}
//operadores ternarios
let opera =(edad>0 && edad<=12)? alert("infantil"): (edad>=13 && edad<=17)?  alert("adolecente"):
(edad>=18 && edad<=59)? alert("adulto"):(edad>=60)? alert("adulto mayor") : alert ("no escribir numeros negativos")