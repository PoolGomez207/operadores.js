let peso = parseFloat(prompt("ingrese el peso en kilogramos"));
var estatura = parseFloat(prompt("ingrese la estatura en metros"));
let IMC = peso/(estatura*estatura);
console.log(IMC);
(IMC<18.5)? alert(" Bajo peso"):(18.5<=IMC && IMC<25)? alert(" peso normal"):(25<=IMC && IMC<30)? alert("Sobrepeso"): (30>IMC)? alert("obesidad"): 
alert("Resultados del diagnostico")
