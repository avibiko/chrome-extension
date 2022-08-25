function as(a,b,c) {
       
    chrome.tabs.executeScript(null, {file: "inject.js"});
       console.log(a,b,c+'asd')
}
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   as(tabId, changeInfo, tab);
}); 