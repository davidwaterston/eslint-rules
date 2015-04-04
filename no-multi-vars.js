/* global module */

"use strict";

module.exports = function(context) {

    function checkVarDeclarations(node) {

        var hasMultipleVars = (node.declarations.length > 1);

        if (hasMultipleVars) {
            context.report(node, node.declarations.length + " variables defined with one var statement");
        }
    }

    return {
        "VariableDeclaration": checkVarDeclarations
    };

};
