/* global module */

"use strict";

module.exports = function (context) {

    function checkObjectExpression(node) {

        var numberOfProperties = node.properties.length;
        var objHasMultipleProperties = (numberOfProperties > 1);
        var propertyOnSameLineAsClosingBrace;

        if (objHasMultipleProperties) {
            propertyOnSameLineAsClosingBrace = (node.properties[node.properties.length - 1].loc.end.line === node.loc.end.line);

            if (propertyOnSameLineAsClosingBrace) {
                context.report(node, "object property on same line as closing brace");
            }
        }
    }

    return {
        "ObjectExpression": checkObjectExpression
    };

};
