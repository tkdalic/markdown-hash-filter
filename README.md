# markdown-hash-filter
## 概要
markdownをヘッダ情報を元にフィルタリングする。

## インストール

```
npm install -g markdown-hash-filter
```

## 使い方
markdownのヘッダを指定した条件で切り出す｡

例

1. test.md の作成
```
# テスト

## 小テスト
テストです｡
テストです｡
```

2. コマンド
```
md-filter test.md -t 小テスト
```

3. 小テスト.md が生成される
```
test.md
## 小テスト
テストです｡
テストです｡
```

## ヘルプ･QA

ヘルプは､
```
md-filter -h
```

QA､バグなどは isssue にて報告をお願いします｡