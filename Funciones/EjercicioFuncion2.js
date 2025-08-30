function fizzbuzz(num1)
{
    if (num1>1 && num1<100){
    if (num1 %3===0){
         alert("fizz")
    console.log("fizz")
    }
   
    if (num1 %5===0){
         alert("buzz")
    console.log("buzz")
    }
   
    if(num1 %5===0 && num1 % 3===0){
          alert("fizzbuzz")
    console.log("fizzbuzz")
    }
  
}
}

  let num1=parseInt(prompt("ingrese un numero del uno al 100"))
  fizzbuzz (num1)