const { argv } = require('./config/yargs');
const toDo = require('./to-do/to-do');
require('colors');

let command = argv._[0];

switch (command){
    case 'create':
        let tarea = toDo.create( argv.description );
        console.log(tarea);
        break;
    case 'list':
        let list = toDo.getList();

        for (let task of list){
            console.log('======TO DO======='.green);
            console.log(task.description);
            console.log('State: ', task.completed);
            console.log('=================='.green);
        }
        break;
    case 'update':
        let updated = toDo.update( argv.description, argv.completed);

        console.log(updated);
        break;
    case 'delete':
        let deleted = toDo.deleteTask(argv.description);

        console.log(deleted);
        break;
    default:
        console.log('Command is not reconize'.red);
}
