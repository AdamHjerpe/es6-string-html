# Hacky ES6 Template Strings

Forked from the VSC extension [es6-string-html](https://github.com/mydesireiscoma/es6-string-html)

This fork is made as an experiment to see if the regex can be modified to not require comments to detect ES6 template strings. As of now the regex looks for a colon or equals sign prior to the first backtick in template strings. It's hacky and does not work in all cases, mostly when the backtick is not on the same line as the `:` or `=` in the declaration. VSC appears to have some issues regarding multiline regex.

## Development

For development purposes, run debug on the project in VSC, reload window as needed.

### TODO

- Check possibility off enabling emmet in template strings.
- Improve general regex performance.