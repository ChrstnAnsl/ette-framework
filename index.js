const doc = require("./functions/document");
module.exports = {
    getCurrentUrl: function(test) {
        doc.getCurrentUrl(test);
    },
    getSelector: function(selector) {
        doc.getQuerySelector(selector)
    },
    clickElement: function(selector) {
        doc.clickElementEvent(selector);
    },
};