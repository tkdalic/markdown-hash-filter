import { statSync, readdirSync, readFileSync } from "fs";

/**
 * fileの一覧と本文を取得
 *
 * @param {string} path
 * @returns {{ title: string, content: string }[]}
 */
export function getFilenameAndContent(path: string): { title: string, content: string }[] {
  const stat = statSync(path);
  path = path.substr(-1) === '/' ? path.substr(0, -1): path;

  if (stat.isFile() && path.substr(-3) === ".md") {
    return [{
      title: path,
      content: readFileSync(path, { encoding: "utf-8" })
    }];
  }

  if (stat.isDirectory()) {
    const fileNames: { title: string, content: string }[] = [];
    readdirSync(path).forEach((childPath: string) =>
      fileNames.push(...getFilenameAndContent(`${path}/${childPath}`))
    );
    return fileNames;
  }
  return [];
}
