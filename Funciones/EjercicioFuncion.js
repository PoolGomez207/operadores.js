function resta (num1,num2)
{
    let resultado =num1-num2;
    alert(resultado);
    console.log(resultado);
}
function suma (num1,num2)
{
    let resultado =num1 + num2;
    alert(resultado);
     console.log(resultado);
}
function mult (num1,num2)
{
    let resultado =num1*num2;
    alert(resultado);
     console.log(resultado);
}
function div (num1,num2)
{
    let resultado=num1/num2;
    alert(resultado);
     console.log(resultado);
}
function mood (num1,num2)
{
    let resultado=num1%num2;
    alert(resultado);
     console.log(resultado);
}

let n1 = parseInt (prompt ("digite num1"));
let n2 = parseInt (prompt ("digite num2"));
    resta(n1,n2);
    suma(n1,n2);
    mult(n1,n2);
    div(n1,n2);
    mood(n1,n2);