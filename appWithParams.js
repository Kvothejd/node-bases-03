// node appWithParams --base=5
// para evitar el "multiplicar.crearArchivo"
const { crearArchivo } = require('./multiplicar/multiplicar') 

let argv = process.argv

// Tomo el tercer parámetro del array (que es el primero desde la linea de comandos)
let parametro = argv[2];
console.log(parametro);

// Veo cada par de parametros
let param1 = parametro.split("=");
console.log(param1);

// Tomo el valor
let base = parametro.split("=")[1];
console.log(base);

// console.log(process);

console.log(crearArchivo);

crearArchivo(base)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(e => console.log(e));
      

      

    