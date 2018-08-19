# Hacky ES6 Template Strings
Forked from the VSC extension [es6-string-html](https://github.com/mydesireiscoma/es6-string-html)

This fork is made as an experiment to see if the regex can be modified to not require comments to detect ES6 template strings. As of now the regex looks for a colon or equals sign prior to the first backtick in template strings. It's hacky and does not work in all cases, mostly when the backtick is not on the same line as the `:` or `=` in the declaration.