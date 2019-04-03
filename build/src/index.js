"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var fs_1 = require("fs");
var markdown_hash_filter_1 = require("../lib/markdown-hash-filter");
// コマンドライン引数の制御;
commander_1.default
    .version("0.1.0")
    .arguments("<tag>")
    .usage("<tag>")
    .description("<tag> header tag ")
    .parse(process.argv);
var tag = commander_1.default.args[0];
var content = fs_1.readFileSync("/dev/stdin", "utf-8");
// tslint:disable-next-line: no-console
console.log(markdown_hash_filter_1.markdownHashFilter(content, tag));
//# sourceMappingURL=index.js.map