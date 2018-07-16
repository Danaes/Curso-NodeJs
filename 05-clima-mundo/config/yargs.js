const argv = require('yargs')
    .options({
        address: {
            alias: 'd',
            desc: 'City address for getting weather',
            demand: true
        }
    })
    .argv;

module.exports = {
    argv
};