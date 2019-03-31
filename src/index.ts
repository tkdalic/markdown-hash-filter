import markdownParser from "./lib/markdownFilter";
import commander from "commander";
import { existsSync, statSync, readdirSync } from "fs";

commander
  .version("1.0.0")
  .usage("[options] <files ...>")
  .option("-o, --output <file>", "output files")
  .parse(process.argv);

const files: string[] = [];
commander.args.forEach(arg => {
  files.push(...getFileNameList(arg));
});

console.log(files);

function getFileNameList(path: string): string[] {
  const stat = statSync(path);

  if (stat.isFile() && path.substr(-3) === ".md") {
    return [path];
  }

  if (stat.isDirectory()) {
    const fileNames: string[] = [];
    readdirSync(path).forEach((childPath: string) =>
      fileNames.push(...getFileNameList(`${path}/${childPath}`))
    );
    return fileNames;
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
