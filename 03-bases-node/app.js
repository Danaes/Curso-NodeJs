const { argv } = require('./config/yargs');
const { crearArchivo, listarArchivo} = require('./multiplicar/multiplicar');
const colors = require('colors');

let command = argv._[0];

switch (command){
    case 'listar':
        listarArchivo(argv.base, argv.limite)
            .then( data => {
                console.log(data);
                console.log('Listado completado');
            })
            .catch( err => console.log( err ));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado:`,`${ archivo }`.green))
            .catch( err => console.log( err ));
        break;
    default:
        console.log('Comando no reconocido');
}