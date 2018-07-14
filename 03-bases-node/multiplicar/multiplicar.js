const fs = require('fs');
const colors = require('colors');

let listarArchivo = ( base, limite ) => {
    return new Promise( (resolve, reject) =>{
        if(!Number(base) || !Number(limite)){
            reject('Alguno de los parámetros no es un valor numerico');
            return;
        }

        let data = '';

        console.log('==============='.blue);
        console.log(`Tabla del ${ base }`.yellow);
        console.log('==============='.blue);

        for(let i = 1; i <= limite; i++){
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        resolve(data);
    })
};

let crearArchivo = ( base, limite = 10) => {
    return new Promise( (resolve, reject) => {

        if(!Number(base) || !Number(limite)){
            reject(`El valor introducido '${ base }' no es un numero`);
            return;
        }

        let data = '';

        for(let i = 1; i <= limite; i++){
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
};

module.exports = {
    crearArchivo,
    listarArchivo
}