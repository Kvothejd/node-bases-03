// const multiplicar = require('./multiplicar/multiplicar') 

// // console.log(module);
// console.log(multiplicar);


// multiplicar.crearArchivo(base)
//       .then(archivo => console.log(`Archivo creado: ${archivo}`));



// para evitar el "multiplicar.crearArchivo"
const { crearArchivo } = require('./multiplicar/multiplicar') 
let base = '8';

console.log(process);

console.log(crearArchivo);

crearArchivo(base)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(e => console.log(e));
      

      

    