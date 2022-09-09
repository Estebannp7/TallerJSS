function obtenerNombre(codigo){
    let nombre = codigo.split(":")[1]
    return nombre
}


//llamando a la funcion 

let resultado = obtenerNombre("1000748683 : Esteban Palencia")
console.log(resultado)

let obtenerNombre = codigo=> codigo.split(":")[1]