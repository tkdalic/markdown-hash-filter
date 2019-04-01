"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var get_filename_and_content_1 = __importDefault(require("./get-filename-and-content"));
/**
 * fileの一覧と本文を取得
 *
 * @param {string} path
 * @returns {{ title: string, content: string }[]}
 */
function default_1(path) {
    var stat = fs_1.statSync(path);
    if (stat.isFile() && path.substr(-3) === ".md") {
        return [{
                title: path,
                content: fs_1.readFileSync(path, { encoding: "utf-8" })
            }];
    }
    if (stat.isDirectory()) {
        var fileNames_1 = [];
        fs_1.readdirSync(path).forEach(function (childPath) {
            return fileNames_1.push.apply(fileNames_1, get_filename_and_content_1.default(path + "/" + childPath));
        });
        return fileNames_1;
    }
    return [];
}
exports.default = default_1;
//# sourceMappingURL=get-filename-and-content.js.map