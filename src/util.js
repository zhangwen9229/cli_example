const fs = require('fs');
module.exports = {
    isEmptyDirectory: function (path) {
        const files = fs.readdirSync(path);
        return !files || !files.length;
    },
    isExistsPath: function (path) {
        return fs.existsSync(path);
    }
}