
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if(tab.url.includes("/lightning/r/Case/") === true){
        // change internal color
        chrome.scripting.insertCSS({
            target: {
                tabId: tabId
            },
            files: ["./themes/default/case-view/case-view.css"]
        }, () => {
            console.log("CSS -> inserted");
        })
    }
})
