const es_null = (valor1,valor2) =>{
    if(valor1 !==null && valor2 == null ){
        return valor1
    }
    else if(valor2 !==null && valor1==null) {
        return valor2
    }
    else{
        return null
    }
}
console.log(es_null(1,null))