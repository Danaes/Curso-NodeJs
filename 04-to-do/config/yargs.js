const opt = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Description of the task to do'
    }
};

const argv = require('yargs')
    .command('create','Create element to do', opt )
    .command('update','Update the completed status of a task', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of the task to do'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Mark as completed or pending the task'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};