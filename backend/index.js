var nrcm = require('nrcm');
var nrcm = new nrcm();
nrcm.configure('config.json');
nrcm.setUp('apmt');
nrcm.start('0.0.0.0', 3333);
