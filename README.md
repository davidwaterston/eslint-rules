# eslint-rules
A small collection of custom [ESLint](http://eslint.org) rules.

- [no-multi-vars](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-vars.md) - disallow multiple variables per var declaration.  
It is undesirable to declare more than one variable for a single var statement. Placing each variable on a new line, with it's own var statement, makes debugging and refactoring simpler and less error-prone. This custom rule will enforce this practice.

- [no-multi-object-properties-one-line](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-object-properties-one-line.md) - disallow multiple object properties to be declared on one line.  
When declaring an object with multiple properties it is desirable to declare each property of the object on a separate line.

- [no-multi-object-properties-first-line](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-object-properties-first-line.md) - disallow first property of a multiple property object to be declared on first line.   
When declaring an object with multiple properties it is desirable to declare each property of the object on a separate line with the first line containing only the opening brace and the first property name taking a new line.

- [no-multi-object-properties-last-line](https://github.com/davidwaterston/eslint-rules/blob/master/no-multi-object-properties-last-line.md) - disallow last property of a multiple property object to be declared on last line.   
When declaring an object with multiple properties it is desirable to declare each property of the object on a separate line with the last line containing only the closing brace and the last property name/value on the preceding line.

- [no-object-prop-key-value-split](https://github.com/davidwaterston/eslint-rules/blob/master/no-object-prop-key-value-split.md) - disallow object property values from appearing on a different line from their key.  
When declaring an object property, the value of a property should appear on the same line as the key to avoid confusion.