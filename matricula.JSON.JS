


console.log("Ejercicio 1")


var Alumno01=

{
    cuenta:'61783424',
    nombre:'Skarlet',
    nota:50,
    estado:'Reprobado',  
}

var Alumno02=

{
    cuenta:'61789354',
    nombre:'Javier',
    nota:99,
    estado:'Aprovado',
}




const Estudiantes=[Alumno01,Alumno02]
const reprobados = Estudiantes.find(Estudiante=> Estudiante.estado ==='Reprobado')
console.log('La persona reprobada es:', reprobados)