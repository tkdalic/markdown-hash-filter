"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
/**
 * fileの一覧と本文を取得
 *
 * @param {string} path
 * @returns {{ title: string, content: string }[]}
 */
function getFilenameAndContent(path) {
    var stat = fs_1.statSync(path);
    if (stat.isFile() && path.substr(-3) === ".md") {
        return [{
                title: path,
                content: fs_1.readFileSync(path, { encoding: "utf-8" })
            }];
    }
    if (stat.isDirectory()) {
        var fileNames_1 = [];
        path = path.substr(-1) === '/' ? path.slice(0, -1) : path;
        fs_1.readdirSync(path).forEach(function (childPath) {
            return fileNames_1.push.apply(fileNames_1, getFilenameAndContent(path + "/" + childPath));
        });
        return fileNames_1;
    }
    return [];
}
exports.getFilenameAndContent = getFilenameAndContent;
//# sourceMappingURL=get-filename-and-content.js.map