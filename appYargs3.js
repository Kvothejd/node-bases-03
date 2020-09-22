// Solo recupero la exportacion .argv
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar') ;
var colors = require('colors');

// node appYargs3 listar
// node appYargs3 crear
// node appYargs3 crear2
// node appYargs3 listar --base 2 --limite 50

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
    break;
    
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
          .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
        .catch(e => console.log(e));

        // .then(archivo => console.log(`Archivo creado: `, colores.green(archivo))
    break;

    default:
        console.log('Comando no reconocido');

}


      

      

    