/*global require,module*/

var oHeader = require('./src/js/Header'),
    constructAll = function() {
        'use strict';
        oHeader.init();
        document.removeEventListener('o.DOMContentLoaded', constructAll);
    };

document.addEventListener('o.DOMContentLoaded', constructAll);

module.exports = oHeader;
