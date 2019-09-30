const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear to-do');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=================='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('=================='.green);
        }
        break;
    case 'actualizar':
        console.log('Actualiza un to-do');
        let estado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(estado);
        break;

    case 'borrar':
        console.log('Borrar To-Do');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;

}