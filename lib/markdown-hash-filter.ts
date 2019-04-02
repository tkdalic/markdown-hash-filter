/**
 * タグのブロックを返却する
 *
 * @export
 * @param {string} markDown
 * @param {string} selectHeader
 * @returns
 */
export function markdownHashFilter(markDown: string, selectHeader: string) {
  let filteredMarkdown = "";
  let isExtractionTarget = false;
  let currentTagDepth = 1;

  markDown.split("\n").forEach((line: string) => {
    // タグの深さを取得
    const tagDepth = headerTagDepth(line);
    // 抽出しない条件
    if (isExtractionTarget && (tagDepth > 0 && tagDepth <= currentTagDepth)) {
      isExtractionTarget = false;
    }

    // 抽出する条件
    if (!isExtractionTarget) {
      // 対象のブロックか判定
      if (tagDepth <= 0 || line.indexOf(selectHeader) === -1) {
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

/**
 * タグの深さを測定し返す
 * タグではないときは-1を返却
 *
 * @param {string} tags
 */
function headerTagDepth(tags: string): number {
  for (let i = 0; i < tags.length; i++) {
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
