/*jslint devel: true, node: true, indent: 4, vars: true, maxlen: 256 */
'use strict';

function Items() {
}

Items.prototype.get = function () {
    var data = { id : 1, nome : "teste" };
    render(data, 200, 'application/json');
}

module.exports = Items;
