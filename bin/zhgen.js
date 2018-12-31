#!/usr/bin/env node

process.title = 'zhgen';

require('commander')
    .version(require('../package').version)
    .usage('<command> [options]')
    .command('generate')
    .parse(process.argv);

require('./zh');