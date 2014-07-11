var NRCM = require('nrcm');
var nrcm = new NRCM();
nrcm.configure('config.json');
nrcm.setUp('apmt');
nrcm.start('0.0.0.0', 3333);
