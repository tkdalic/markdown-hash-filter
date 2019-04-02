import commander from "commander";
import { writeFileSync } from "fs";
import mkdirp = require("mkdirp");
import { getFilenameAndContent } from "../lib/get-filename-and-content";
import { markdownHashFilter } from "../lib/markdown-hash-filter";

// コマンドライン引数の制御
commander
  .version("0.0.4")
  .usage("<file> [options]")
  .option('<file>', "input file")
  .option('-t, --tag <tag>', "filter tag")
  .option("-o, --output-file <outputFile>", "output file")
  .option("-d, --output-dir <outputDir>", "output directory")
  .parse(process.argv);

// 対象ファイルの取得
const files = getFilenameAndContent(commander.args[0]);

// 抽出したマークダウンを取得
const filteredMarkdown = files.map((file): { title: string, content: string } =>
  ({
    title: file.title,
    content: markdownHashFilter(file.content, commander.tag)
  }))
  .filter(file => file.content !== '')
  .map(file => `${file.title}\n${file.content}`)
  .join('\n');

// ファイルのパスとフォルダの作成
let outputDir: string = commander.outputDir ? commander.outputDir : '.';
if (outputDir.substr(-1) === '/') {
  outputDir = outputDir.substr(-1);
}

const outputFile = commander.outputFile ? commander.outputFile : `${outputDir}/${commander.tag}.md`;
mkdirp.sync(outputFile.split('/').slice(0, -1).join('/'));

writeFileSync(outputFile, filteredMarkdown, { encoding: 'utf-8' });