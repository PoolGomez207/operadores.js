function numero ()
{
    let numeritos =[1,2,3,4]//creando el arreglos
    console.log(numeritos[2])//mostrando el dato de la posicion 2
    console.log(numeritos[0])//mostrando el dato de la posicion 0
    console.log(numeritos)//mostrando todos los datos
    numeritos[2]=7//cambiando la posisicion dos por el dato 7
    console.log(numeritos)//mostrando todos los datos
    numeritos[4]=22//agregar en la posicion 4 el dato 22
    console.log(numeritos)//mostrar todos los datos
    numeritos.push(33)//agregar el dato 33
    console.log(numeritos)// mostrar todos los datos
    numeritos.shift()
    console.log(numeritos)
    numeritos.pop()
    console.log(numeritos)
    numeritos.unshift(88,55,70)
    console.log(numeritos)

}
numero()