# Changelog

## 1.1.0 (2024-08-03)

### 🚀 Features

- Limit the max length of the line to 80 characters.  
  The rule applies to JS, TS, JSX, TSX and Vue SFC files. Exceptions:
  - URLs
  - string literals
  - template strings
  - RegExp literals
  - ... and comments are not counted

<!--
"comments" enforces a maximum line length for comments; defaults to value of code
"ignorePattern" ignores lines matching a regular expression; can only match a single line and need to be double escaped when written in YAML or JSON
"ignoreComments": true ignores all trailing comments and comments on their own line
"ignoreTrailingComments": true ignores only trailing comments
"ignoreUrls": true ignores lines that contain a URL
"ignoreStrings": true ignores lines that contain a double-quoted or single-quoted string
"ignoreTemplateLiterals": true ignores lines that contain a template literal
"ignoreRegExpLiterals": true ignores lines that contain a RegExp literal
-->

## 1.0.1 (2024-07-21)

### 🩹 Fixes

- Fix types and exports

## 1.0.0 (2024-07-21)

🚀 Initial release
