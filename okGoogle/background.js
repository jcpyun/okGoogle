// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     chrome.tabs.executeScript({
//       file:"infiltrate.js"
//     });
// });


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "popup-click":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "inject.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            break;
        default:
            // helps debug when request directive doesn't match
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);


chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
   document.body.innerHTML = document.body.innerHTML.replace('Ben Zhang', 'Google');
    document.body.innerHTML = document.body.innerHTML.replace('ben zhang', 'Google');
    document.body.innerHTML = document.body.innerHTML.replace(/Ben Zhang/g, 'Google');
    document.body.innerHTML = document.body.innerHTML.replace(/ben zhang/g, 'Google');
});

/////////////////////////////////////////////
//         Create on off button            //
var isExtensionOn = true;
chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {
    if (request.cmd == "setOnOffState") {
        isExtensionOn = request.data.value;
    }

    if (request.cmd == "getOnOffState") {
        sendResponse(isExtensionOn);
    }
});
//http://stackoverflow.com/questions/16620270/stop-a-google-chrome-extensions-with-a-on-and-off-button-how
/////////////////////////////////////////////
/////////////////////////////////////////////



chrome.pageCapture.on;