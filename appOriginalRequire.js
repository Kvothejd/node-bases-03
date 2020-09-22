// Tipos de requires

// 1 - Paquetes propios de NodeJs
const fs = require('fs');

// 2 - Paquetes de terceros
// const fs = require('express');

// 3 - Paquetes propios
// const fs = require('./fs');
// const fs = require('../fs');


let base = 3;
let data = ''
for (let i = 1; i<= 10; i++) {
    // console.log(`${base} * ${i} = ${base*i}`);
    data += `${base} * ${i} = ${base*i}\n`;
}

// fs.writeFile('tabla-2.txt', 'Hola mundo...', (err) => {
//     if (err) throw err;
//     console.log('El archivo tabla-2.txt ha sido creado');
//   });


  fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
  });  

