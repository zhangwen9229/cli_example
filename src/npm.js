const shell = require('shelljs'),
    logger = require('./log');

module.exports = {
    handle: function (msg) {
        if (!this.beforeHandle()) {
            return;
        }
        msg.args.push('--registry http://172.28.49.200:4898');
        const commanderLine = `npm ${msg.args.join(' ')}`;
        logger.colorLog({
            color: 'green',
            msg: `${commanderLine}`
        });
        shell.exec(commanderLine)
    },
    beforeHandle: function () {
        if (!shell.which('npm')) {
            shell.echo('Sorry, this script requires npm');
            shell.exit(1);
        }

        return true;
    }
}