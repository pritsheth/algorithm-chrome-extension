// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

/*// Listen for new tabs.
chrome.tabs.onCreated.addListener(function (tab) {

  // Only redirect if this is a blank new tab (not opened by clicking a link).
  if (tab.url === 'chrome://newtab/') {

    // Show your website. This might highlight the omnibox,
    // but it's not guaranteed.
    chrome.tabs.update(tab.id, {url:'https://pritsheth.com'});
  }
});*/

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });