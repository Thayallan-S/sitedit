/* 
=================
= background.js =
=================
*/

// Adds a chrome listener when extension is installed to set application to off.
chrome.runtime.onStartup.addListener(function () {
    console.log("I'm a god");
});


chrome.browserAction.onClicked.addListener(run = () => {
    console.log("LOLS");
});