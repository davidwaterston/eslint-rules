## Disallow last property of a multiple property object to be declared on last line (no-multi-object-properties-last-line)
When declaring an object with multiple properties it is desirable to declare each property of the object on a separate line with the last line containing only the closing brace and the last property name/value on the preceding line.

## Rule Details


The following patterns are considered warnings:
```
var a = {b: 1, c: 2};

var a = {
    b: 1,
    c: 2,
    d: 3};

var a = {
    b:1,
    c:
    2};
```


The following patterns are not considered warnings:
```
var a = {};

var a = {b: 1};

var a = {
    b: 1,
    c: 2
};


var a = {b: 1,
         c: 2
};
```

## Related Rules
- [no-multi-object-properties-first-line](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-object-properties-first-line.md)
- [no-multi-object-properties-one-line](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-object-properties-one-line.md)

## Resources
 - [Rule source](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-object-properties-last-line.js)