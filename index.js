#!/usr/bin/env node

const prompts = require('prompts'),
    program = require('commander'),
    git = require('./src/git'),
    action = require('./src/action'),
    package_json = require('./package.json');

program.version(package_json.version, '-v, --version')
    .command('init [tpl] [project]')
    .description('初始化模板')
    .action((tpl, project) => {
        // console.log(process.argv)
        require('./src/init').handle({
            tpl: tpl,
            project: project
        })
    })

program.usage('[options] <params ...>')
    .action(function (options, params) {
        require('./src/npm').handle({
            options,
            params,
            args: process.argv.slice(2)
        })
    })

program.parse(process.argv);