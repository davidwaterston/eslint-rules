## Disallow object property values from appearing on a different line from their key (no-object-prop-key-value-split)
When declaring an object property, the value of a property should appear on the same line as the key to avoid confusion.

## Rule Details


The following patterns are considered warnings:
```
var a = {b:
1};

var a = {
    b:
    12,
    c: 13, d: 14,
    e:
15
};

var a = {
    b:
    [
        {c: 100},
        {d: 101}
    ]
};

var a = {
    b:
    {
        c: 100,
        d: 101
    }
};

var a = {
    b: {
        c:
        100,
        d: 101
    }
};
```


The following patterns are not considered warnings:
```
var a =
    {
        b: 12
    };

var a = {
    b: 1,
    c: 2
};

var a = {b: 1};

var a = {b: 1,
c: 2
};

var a = {
    b: [
        {c: 100},
        {d: 101}
    ]
};

var a = {
    b: {
        c: 100,
        d: 101
    }
};
```

## Related Rules
- [no-multi-object-properties-first-line](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-object-properties-first-line.md)
- [no-multi-object-properties-last-line](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-object-properties-last-line.md)
- [no-multi-object-properties-one-line](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-object-properties-one-line.md)

## Resources
 - [Rule source](https://github.com/davidwaterston/eslint-rules/blob/master/no-object-prop-key-value-split.js)