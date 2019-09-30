const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crea un To-Do', {
        descripcion
    })
    .command('actualizar', 'Lista un To-Do', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un item de un To-Do', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}