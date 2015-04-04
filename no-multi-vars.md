## Disallow multiple variables per var declaration (no-multi-vars)
It is undesirable to declare more than one variable for a single var statement. Placing each variable on a new line, with it's own var statement, makes debugging and refactoring simpler and less error-prone.

## Rule Details


The following patterns are considered warnings:
```
var a, b;

var a = 1, b = 2;

var a = 1,
    b = 2,
    c = 3;
    
var a = 1, b;

var a, b = 5;
```


The following patterns are not considered warnings:
```
var a;
var b;

var a = 1;
var b;

var a = 1;
var b = 2;
```

## Resources
 - [Rule source](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-vars.js)