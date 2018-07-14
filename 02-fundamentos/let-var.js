/*Con let la variable no se puede volver a inicializar, pero puede cambiar su valor
* con var, la variable se puede inicializar tantas veces como se desee*/

var nombre = 'Hola';

if( true ){
    var nombre = 'Adios';
}

console.log(nombre);