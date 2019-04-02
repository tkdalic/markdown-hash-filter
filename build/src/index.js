"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var fs_1 = require("fs");
var mkdirp = require("mkdirp");
var get_filename_and_content_1 = require("../lib/get-filename-and-content");
var markdown_hash_filter_1 = require("../lib/markdown-hash-filter");
// コマンドライン引数の制御
commander_1.default
    .version("0.1.0")
    .usage("<file> [options]")
    .option('<file>', "input file")
    .option('-t, --tag <tag>', "filter tag")
    .option("-o, --output-file <outputFile>", "output file")
    .option("-d, --output-dir <outputDir>", "output directory")
    .parse(process.argv);
// 対象ファイルの取得
var files = get_filename_and_content_1.getFilenameAndContent(commander_1.default.args[0]);
// 抽出したマークダウンを取得
var filteredMarkdown = files.map(function (file) {
    return ({
        title: file.title,
        content: markdown_hash_filter_1.markdownHashFilter(file.content, commander_1.default.tag)
    });
})
    .filter(function (file) { return file.content !== ''; })
    .map(function (file) { return file.title + "\n" + file.content; })
    .join('\n');
// ファイルのパスとフォルダの作成
var outputDir = commander_1.default.outputDir ? commander_1.default.outputDir : '.';
if (outputDir.substr(-1) === '/') {
    outputDir = outputDir.substr(-1);
}
var outputFile = commander_1.default.outputFile ? commander_1.default.outputFile : outputDir + "/" + commander_1.default.tag + ".md";
mkdirp.sync(outputFile.split('/').slice(0, -1).join('/'));
fs_1.writeFileSync(outputFile, filteredMarkdown, { encoding: 'utf-8' });
//# sourceMappingURL=index.js.map