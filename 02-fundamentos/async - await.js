// let getNombre = async() => {
//
//     throw new Error('No existe un nombre para ese usuarios');
//     return 'Daniel';
// };

let getNombre = () => {
    return new Promise(( resolve, reject ) => {
        setTimeout( () => {
            resolve( 'Daniel' );
        }, 3000);
    });
};

let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${ nombre }`;
}

saludo().then( msg => console.log( msg ));