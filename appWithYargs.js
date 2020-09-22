const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .argv;

// node appWithYargs --base 5
// node appWithYargs listar 
// node appWithYargs listar --base 5
// node appWithYargs listar --base=5
// node appWithYargs listar -b 5
// node appWithYargs listar -b 5 -l 20
// node appWithYargs listar -b=5 -l=20


const { crearArchivo } = require('./multiplicar/multiplicar') ;


// let argv2 = process.argv

// El de Yargs
console.log(argv.base);
console.log(argv.limite);

// crearArchivo(base)
//       .then(archivo => console.log(`Archivo creado: ${archivo}`))
//       .catch(e => console.log(e));
      

      

    