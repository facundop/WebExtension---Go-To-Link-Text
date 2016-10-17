'use strict';

/*global chrome:false */

var url;

function handleMessage(request, sender, sendResponse) {
  if(url != request.target) {
    url = request.target;
    chrome.contextMenus.removeAll();
    if(request.message == "linkMenu") {
      if(request.target != "" && request.target.includes("http")) {
          chrome.contextMenus.create({
            id: "log-selection",
            title: "Go to " + url,
            contexts: ["link"],
            onclick: openNewTab,
          });
        }
    }
  }
}

function openNewTab(info, tab) {
  if (info.menuItemId == "log-selection") {
    chrome.tabs.create({'url': url, 'active': false});
  }
}

chrome.runtime.onMessage.addListener(handleMessage);