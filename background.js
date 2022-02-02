
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if(tab.url.includes("/lightning/r/Case/") === true){
        // change internal color
        chrome.scripting.insertCSS({
            target: {
                tabId: tabId
            },
            files: ["./style.css"]
        }, () => {
            console.log("CSS -> inserted");
        })
    }
})