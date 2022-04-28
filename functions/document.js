function getCurrentUrl() {
    console.log("test")
    return window.location.href;
}

function getQuerySelector(selector) {
    document.querySelector(selector);
}

function clickElementEvent (selector) {
    getSelector(selector).addEventListener("click", click());
}


module.exports = { 
    getCurrentUrl, 
    getQuerySelector, 
    clickElementEvent
};