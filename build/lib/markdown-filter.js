"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * タグのブロックを返却する
 *
 * @export
 * @param {string} markDown
 * @param {string} selectHeader
 * @returns
 */
function default_1(markDown, selectHeader) {
    var filteredMarkdown = "";
    var isExtractionTarget = false;
    var currentTagDepth = 1;
    markDown.split("\n").forEach(function (line) {
        // タグの深さを取得
        var tagDepth = headerTagDepth(line);
        // 抽出しない条件
        if (isExtractionTarget && (tagDepth > 0 && tagDepth <= currentTagDepth)) {
            isExtractionTarget = false;
        }
        // 抽出する条件
        if (!isExtractionTarget) {
            // 対象のブロックか判定
            if (tagDepth === -1 || line.indexOf(selectHeader) === -1) {
                return;
            }
            // 抽出条件の設定
            isExtractionTarget = true;
            currentTagDepth = tagDepth;
        }
        // 抽出対象ならfilteredMarkdownに追記
        if (isExtractionTarget) {
            filteredMarkdown += line + "\n";
        }
    });
    return filteredMarkdown;
}
exports.default = default_1;
/**
 * タグの深さを測定し返す
 * タグではないときは-1を返却
 *
 * @param {string} tags
 */
function headerTagDepth(tags) {
    for (var i = 0; i < tags.length; i++) {
        switch (tags[i]) {
            case "#":
                continue;
            case " ":
                return i;
            default:
                return -1;
        }
    }
    return -1;
}
//# sourceMappingURL=markdown-filter.js.map