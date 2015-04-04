# eslint-rules
A small collection of custom [ESLint](http://eslint.org) rules.

## Disallow multiple variables per var declaration (no-multi-vars)
It is undesirable to declare more than one variable for a single var statement. Placing each variable on a new line, with it's own var statement, makes debugging and refactoring simpler and less error-prone. This custom rule will enforce this practice.  
Documentation, with examples, is in [no-multi-vars.md](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-vars.md)

## Disallow multiple object properties to be declared on one line (no-multi-object-properties-one-line)
When declaring an object with multiple properties it is desirable to declare each property of the object on a separate line.  
Documentation, with examples, is in [no-multi-object-properties-one-line.md](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-object-properties-one-line.md)
