const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar para la base y limite indicados', opts)
    .help()
    .argv;

module.exports = {
    argv
}

// const argv = require('yargs')
// .command('listar', 'Imprime en consola la tabla de multiplicar', {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// })
// .command('crear', 'Crea un archivo con la tabla de multiplicar para la base y limite indicados', {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// })
// .help()
// .argv;

