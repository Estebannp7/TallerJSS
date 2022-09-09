//Declarando la funcion
function crearAprendiz(nombre,planeta,edad,estatura,clasificarAprendiz){

    let datosAprendiz ={nombre: nombre, 
        planeta: planeta, 
        edad: edad,
        estatura: estatura}
 
        clasificarAprendiz(datosAprendiz)
}




//Llamar la funcion
crearAprendiz('Daniel','Tierra',15,1.72,function(aprendiz){
if(aprendiz.edad>=15){
    console.log("Usted se va para la clase de sable de luz")
}else{
    console.log("usted se va para la clave de la fuerza")
}

})