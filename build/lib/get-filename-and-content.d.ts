/**
 * fileの一覧と本文を取得
 *
 * @param {string} path
 * @returns {{ title: string, content: string }[]}
 */
export default function (path: string): {
    title: string;
    content: string;
}[];
