const logger = require('./log'),
    shell = require('shelljs'),
    clone = require('git-clone'),
    path = require('path'),
    config = require('../config'),
    util = require('./util');
module.exports = {
    handle: function (msg) {
        if (!this.beforeHandle()) {
            return;
        }
        const url = this.resolveTemplateUrl(msg.tpl);
        if (url) {
            let project_path = shell.pwd().toString();
            if (!!msg.project) {
                project_path = path.join(project_path, msg.project);
            }
            if (util.isExistsPath(project_path) && !util.isEmptyDirectory(project_path)) {
                logger.colorLog({
                    color: 'red',
                    msg: '目录不为空...'
                })
                return;
            }
            clone(url, project_path, null, function () {
                shell.rm('-rf', `${project_path}/.git`)
                logger.colorLog({
                    color: 'magenta',
                    msg: '模板创建完成...'
                })
            })
        } else {
            logger.log('请选择模板...')
        }
    },
    beforeHandle: function () {
        const whick_git = shell.which('git');
        if (!whick_git) {
            shell.echo('Sorry, this script requires git');
            shell.exit(1);
        }
        // logger.colorLog({
        //     color: 'red',
        //     msg: whick_git.stdout
        // })

        return true;
    },
    resolveTemplateUrl: function (param) {
        let url = '';
        const tpl = config.git_respositories[param];
        if (tpl) {
            url = tpl.url;
        }

        return url;
    },

}