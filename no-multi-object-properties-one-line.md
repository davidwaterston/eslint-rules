## Disallow multiple object properties to be declared on one line (no-multi-object-properties-one-line)
When declaring an object with multiple properties it is desirable to declare each property of the object on a separate line.

## Rule Details


The following patterns are considered warnings:
```
var a = {b: 1, c: 2};

var a = {
    b: 1, c: 2,
    d: 3
};
```


The following patterns are not considered warnings:
```
var a = {};

var a = {b: 1};

var a = {b: 1,
         c: 2};

var a = {
    b: 1,
    c: 2};

var a = {
    b: 1,
    c: 2
};
```

## Resources
 - [Rule source](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-object-properties-one-line.js)
