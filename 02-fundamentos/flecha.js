// function sumar(a ,b) {
//     return a + b;
// }

let sumar =  (a ,b) => a + b;

console.log( sumar( 10, 10 ) );

let saludar = ( nombre ) => `Hola ${ nombre }!`;

console.log( saludar('Daniel') );

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function () {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};

console.log( deadpool.getNombre() );