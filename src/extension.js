"use strict";

console.log("Extension loading...");
const jQuery = require("jquery");
const $ = jQuery;

// "selectize" is a jQuery plugin, so not sure what this does.
const selectize = require("selectize");

const GmailFactory = require("gmail-js");
var gmail = new GmailFactory.Gmail($);
window.gmail = gmail;



const dialogHtml = `
  <table>
    <tr><td><input type="text" placeholder="plain text input..."></td></tr>
    <tr><td><input type="text" id="tags" placeholder="Enter tag words then tab or return after each."></td></tr>
  </table>
`;

gmail.observe.on("load", () => {
    const userEmail = gmail.get.user_email();
    console.log("Hello, " + userEmail + ". This is your extension talking!");
    gmail.tools.add_modal_window('selectize demo', dialogHtml, function() {
        console.log("====> 'Ok' from popup...");
    });
    // nothing past this point gets executed...
    console.log("====> after add modal popup...");

    /*
    $('#tags').selectize({
        persist: false,
        createOnBlur: true,
        create: true
    });
    */
});


