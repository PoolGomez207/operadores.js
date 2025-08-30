function notas()
{
  let notas=[];
   for (let i=0 ; i<=4 ; i++)
        {      
    let not=parseFloat(prompt("ingrese sus notas" + 1));
    notas[i]=not
    alert("Tus notas son:" + notas)
}
}
notas()