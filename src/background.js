// This file contains the background script for the Chrome extension. It manages events and can listen for messages from other parts of the extension.

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggleGroupsTab") {
        // Logic to handle the request to toggle the groups tab
        sendResponse({status: "success"});
    }
});