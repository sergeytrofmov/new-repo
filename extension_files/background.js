chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "scrape",
        "title": "Scrape Zillow",
        "contexts": ["page"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "scrape") {
        chrome.tabs.executeScript(tab.id, {file: 'content.js'});
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "scrapeData") {
        zillow_scraper(request.data).then(function(scrapedData) {
            description_generator(scrapedData).then(function(description) {
                sendResponse({description: description});
            });
        });
    }
    return true; // keeps the message channel open until sendResponse is called
});