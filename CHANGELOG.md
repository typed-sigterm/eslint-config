# Changelog

## 1.4.0 (2024-11-20)

### 🚀 Features

- Allow declaring multiple variables in a single statement

## 1.3.0 (2024-09-01)

### 🏡 Other Changes

- Update dependency `@antfu/eslint-config` to v3

## 1.2.0 (2024-08-26)

### 🚀 Features

- Remove line length limitations<br>
  The initial consideration for this rule was to standardize the line breaking behavior of Vue template props when they are too long.<br>
  But now it has been found that this rule lacks flexibility and is a burden in many popular scenarios, such as tailwindcss. After careful consideration, this rule was ultimately removed.

## 1.1.1 (2024-08-04)

### 🩹 Bug Fixes

- Update line length rule (see [README](./README.md#line-length-limitation) for details)

## 1.1.0 (2024-08-03)

### 🚀 Features

- Limit the max length of the line to 80 characters.<br>
  The rule applies to JS, TS, JSX, TSX and Vue SFC files. Exceptions:<br>
  - URLs
  - string literals
  - template strings
  - RegExp literals
  - ... and comments are not counted

## 1.0.1 (2024-07-21)

### 🩹 Bug Fixes

- Fix types and exports

## 1.0.0 (2024-07-21)

🚀 Initial release
