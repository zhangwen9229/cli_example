const chalk = require('chalk');

module.exports = {
    log: console.log.bind(console),
    colorLog: function (param) {
        const color = param.color;
        let msg = param.msg;
        switch (color) {
            case 'green':
                msg = chalk.green(msg);
                break;

            case 'red':
                msg = chalk.red(msg);
                break;

            case 'magenta':
                msg = chalk.magenta(msg);
                break;

            default:
                break;
        }

        this.log(msg);
    }
}