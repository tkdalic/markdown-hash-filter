"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var fs_1 = require("fs");
commander_1.default
    .version("1.0.0")
    .usage("[options] <files ...>")
    .option("-o, --output <file>", "output files")
    .parse(process.argv);
var files = [];
commander_1.default.args.forEach(function (arg) {
    files.push.apply(files, getFileNameList(arg));
});
console.log(files);
function getFileNameList(path) {
    var stat = fs_1.statSync(path);
    if (stat.isFile() && path.substr(-3) === ".md") {
        return [path];
    }
    if (stat.isDirectory()) {
        var fileNames_1 = [];
        fs_1.readdirSync(path).forEach(function (childPath) {
            return fileNames_1.push.apply(fileNames_1, getFileNameList(path + "/" + childPath));
        });
        return fileNames_1;
    }
    return [];
}
// const content =
//   "\n" +
//   "# テスト\n" +
//   "\n" +
//   "テストです。\n" +
//   "テストなのです。\n" +
//   "## 小テスト\n" +
//   "小テストです。\n" +
//   "## 小テスト2\n" +
//   "小テスト2です。\n" +
//   "# テスト2\n" +
//   "テスト2です。\n" +
//   "テスト2なのです。\n";
// const testTags = ["テスト", "テストです。", "小テスト", "テスト2"];
// testTags.forEach(tag => {
//   console.log(tag);
//   console.log("----");
//   console.log(markdownParser(content, tag));
//   console.log("---------------------");
// });
//# sourceMappingURL=index.js.map