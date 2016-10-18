chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript({
      file:"infiltrate.js"
    });
});

// chrome.tabs.onCreated.addListener(function(tab) {         
//    chrome.tabs.executeScript({
//       file:"infiltrate.js"
//     });
// });



// chrome.contextMenus.onClicked.addListener(function myFunction(selectedText) {
//     chrome.tabs.create({ url: "https://www.ebay.com/sch/" + selectedText.selectionText })
// });

// chrome.pageCapture.on


// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="#999999"'
//   });
// });
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    file: 'jcpyun.js'
  });
});

// chrome.contextMenus.create({
//     id: "wow",
//     title: "ebay toolkit",
//     contexts: ["selection"],
// });

// chrome.contextMenus.onClicked.addListener(function myFunction(selectedText) {
//     chrome.tabs.create({ url: "https://www.ebay.com/sch/" + selectedText.selectionText })
// });

// chrome.pageCapture.on
chrome.pageCapture.on;