"use strict";

function addScript(src) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = chrome.extension.getURL(src);
    (document.body || document.head || document.documentElement).appendChild(script);
}

function addCss(src) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = chrome.extension.getURL(src);
    (document.body || document.head || document.documentElement).appendChild(link);
}

addScript("dist/extension.js");
addCss("dist/selectize.default.css");
