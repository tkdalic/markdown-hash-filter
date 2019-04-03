import commander from "commander";
import { readFileSync } from "fs";
import { markdownHashFilter } from "../lib/markdown-hash-filter";

// コマンドライン引数の制御;
commander
  .version("0.1.0")
  .arguments("<tag>")
  .usage("<tag>")
  .description("<tag> header tag ")
  .parse(process.argv);

const tag = commander.args[0];
const content = readFileSync("/dev/stdin", "utf-8");

// tslint:disable-next-line: no-console
console.log(markdownHashFilter(content, tag));
