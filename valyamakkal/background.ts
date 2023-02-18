export {}

chrome.runtime.onInstalled.addListener(() =>{
    chrome.contextMenus.create({
        title: "Quick Wiki Lookup for %s",
        contexts: ["selection"],
        id: "myId"
    })
})

chrome.contextMenus.onClicked.addListener((info,tab) => {
    chrome.tabs.sendMessage(tab.id  , {
        type : "query",
        text: info.selectionText
    })
})