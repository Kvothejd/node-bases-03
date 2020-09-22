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
    .command('crear', 'Crea un archivo con la tabla de multiplicar para la base y limite indicados', {
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


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar') ;

console.log(argv);

let comando = argv._[0];

// node appYargs2 listar
// node appYargs2 crear
// node appYargs2 crear2
// node appYargs2 listar --base 2 --limite 50

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
    break;
    
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
          .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(e => console.log(e));
    break;

    default:
        console.log('Comando no reconocido');

}


      

      

    