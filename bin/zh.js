#!/usr/bin/env node

const commander = require('commander');
const generator = require('../src/generator');

commander
    .command('generate')
    .description('it will generate file what you want')
    .alias('g')
    .action(function (type, name, key) {
        generator.run(type, name, key);
    });

commander.parse(process.argv);