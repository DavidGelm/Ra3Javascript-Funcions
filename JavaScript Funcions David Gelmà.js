function mostraDataActual() {
    console.log(new Date());
}
function enters_suma(num1,num2,num3 = 5){
    return num1+num2+num3
}


function cridar(num1,num2,num3){
    mostraDataActual()
    return enters_suma(num1,num2,num3)
}
console.log(cridar(3,5))