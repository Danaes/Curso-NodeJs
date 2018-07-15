const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the task to do'
};

const completed = {
    alias: 'c',
    default: true,
    desc: 'Mark as completed or pending the task'
};

const argv = require('yargs')
    .command('create','Create element to do', { description })
    .command('update','Update the completed status of a task', {
        description,
        completed
    })
    .command('delete','Delete element to do', { description })
    .help()
    .argv;

module.exports = {
    argv
};