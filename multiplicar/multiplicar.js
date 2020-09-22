const fs = require('fs');
var colors = require('colors');

// limite tiene un valor por defecto
let listarTabla = (base, limite=10) => {
    
    console.log('========================'.yellow)
    console.log(`===tabla de ${base} ===`.green)
    console.log('========================'.yellow)

    for (let i = 1; i<= limite; i++) {
        console.log(`${base} * ${i} = ${base*i} `);
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i<= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err) 
            else 
                resolve(`tablas/tabla-${base}.txt`)
            // console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });  

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}


// // Tambien funciona esto
// module.exports.crearAchivo = (base) => {
//     return new Promise((resolve, reject) => {
//         let data = '';

//         for (let i = 1; i<= 10; i++) {
//             data += `${base} * ${i} = ${base*i}\n`;
//         }

//         fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//             if (err) reject(err) 
//             else 
//                 resolve(`tablas/tabla-${base}.txt`)
//             // console.log(`El archivo tabla-${base}.txt ha sido creado`);
//         });  

//     });
// }