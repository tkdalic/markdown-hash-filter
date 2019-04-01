/**
 * fileの一覧と本文を取得
 *
 * @param {string} path
 * @returns {{ title: string, content: string }[]}
 */
export declare function getFilenameAndContent(path: string): {
    title: string;
    content: string;
}[];
