const { argv } = require('./config/yargs');
require('colors');

let command = argv._[0];

switch (command){
    case 'create':
        console.log('Create task to do'.green);
        break;
    case 'list':
        console.log('Show all tasks to do'.yellow);
        break;
    case 'update':
        console.log('Update task to do'.blue);
        break;
    default:
        console.log('Command is not reconize'.red);
}
