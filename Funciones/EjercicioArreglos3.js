function nombres()
{
    let nombrees=[]
    nombrees.push("Ana");
    console.log(nombrees);
    nombrees.push("Luis");
    console.log(nombrees);
    nombrees.push("Carlos");
    console.log(nombrees);
    nombrees.splice(1,0,"Maria");
    console.log(nombrees);

}
nombres()