const git = require('./git'),
    prompts = require('prompts'),
    co = require('co'),
    chalk = require('chalk');

module.exports = {
    handle: function (args) {
        if (!args.tpl) {
            co(function* () {
                let res = yield prompts({
                    type: 'select',
                    name: 'value',
                    message: chalk.yellow('请选择一种模板类型...'),
                    choices: [{
                            title: 'php/webpack',
                            value: 'php/webpack'
                        },
                        {
                            title: 'static/webpack',
                            value: 'static/webpack'
                        }
                    ],
                    initial: 0
                });
                args.tpl = res.value;

                res = yield prompts({
                    type: 'text',
                    name: 'project',
                    message: '请输入项目名称？(留空则初始化到当前目录)'
                });
                if (res.project)
                    args.project = res.project;

                git.handle(args)
            });
        }
    }
}