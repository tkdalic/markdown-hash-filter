# markdown-hash-filter

## 概要

markdown をヘッダ情報を元にフィルタリングする。

## インストール

```
npm install -g markdown-hash-filter
```

## 使い方

markdown のヘッダを指定した条件で切り出す｡

例

input (test.md)

```
# テスト

## 小テスト
テストです｡
テストです｡
```

コマンド

```
cat test.md | md-filter 小テスト
```

output

```
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
