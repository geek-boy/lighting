"strict";

/**
 * 
 * @type Number
 */
var secondCounter = 0;

/**
 * 
 * @returns void
 */
function queueRefresh() {
    console.log("Local storage: " + localStorage.getItem("refreshTimer"));
    let divEle = document.createElement("div");
    let pEle = document.createElement("p");
    divEle.id = "service-console-extension-menu";
    divEle.classList.toggle("service-console-extension-disabled");
    pEle.innerText = "Select how often the queue refreshes:";
    divEle.append(pEle);

    for (i = 0; i < 5; i++) {
        let inputEle = document.createElement("input");
        let labelEle = document.createElement("label");
        let brEle = document.createElement("br");
        switch (i) {
            case 0:
                inputEle.type = "radio";
                inputEle.id = "never";
                inputEle.name = "timer";
                inputEle.value = "0";
                if (localStorage.getItem("refreshTimer") === 0) {
                    inputEle.checked = "checked";
                } else if (localStorage.getItem("refreshTimer") === null) {
                    inputEle.checked = "checked";
                }
                inputEle.onclick = function () {
                    storeTimer(0);
                };
                labelEle.for = "never";
                labelEle.innerText = "Never";
                divEle.append(inputEle);
                divEle.append(labelEle);
                divEle.append(brEle);
                break;
            case 1:
                inputEle.type = "radio";
                inputEle.id = "30";
                inputEle.name = "timer";
                inputEle.value = "30";
                if (localStorage.getItem("refreshTimer") === 30) {
                    inputEle.checked = "checked";
                }
                inputEle.onclick = function () {
                    storeTimer(30);
                };
                labelEle.for = "30";
                labelEle.innerText = "Every 30 seconds";
                divEle.append(inputEle);
                divEle.append(labelEle);
                divEle.append(brEle);
                break;
            case 2:
                inputEle.type = "radio";
                inputEle.id = "120";
                inputEle.name = "timer";
                inputEle.value = "120";
                if (localStorage.getItem("refreshTimer") === 120) {
                    inputEle.checked = "checked";
                }
                inputEle.onclick = function () {
                    storeTimer(120);
                };
                labelEle.for = "120";
                labelEle.innerText = "Every two minutes";
                divEle.append(inputEle);
                divEle.append(labelEle);
                divEle.append(brEle);
                break;
            case 3:
                inputEle.type = "radio";
                inputEle.id = "300";
                inputEle.name = "timer";
                inputEle.value = "300";
                if (localStorage.getItem("refreshTimer") === 300) {
                    inputEle.checked = "checked";
                }
                inputEle.onclick = function () {
                    storeTimer(300);
                };
                labelEle.for = "300";
                labelEle.innerText = "Every five minutes";
                divEle.append(inputEle);
                divEle.append(labelEle);
                divEle.append(brEle);
                break;
            case 4:
                inputEle.type = "radio";
                inputEle.id = "1500";
                inputEle.name = "timer";
                inputEle.value = "1500";
                if (localStorage.getItem("refreshTimer") === 1500) {
                    inputEle.checked = "checked";
                }
                inputEle.onclick = function () {
                    storeTimer(1500);
                };
                labelEle.for = "1500";
                labelEle.innerText = "Every fifteen minutes";
                divEle.append(inputEle);
                divEle.append(labelEle);
                break;
            default:
                console.log("Add Menu case error");
                break;
        }
    }

    document.body.append(divEle);
}


/**
 * 
 * @param {type} selection
 * @returns void
 */
function storeTimer(selection) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("refreshTimer", selection);
        console.log(localStorage.getItem("refreshTimer"));
    } else {
        document.cookie = "refreshTimer=" + selection;
        console.log(getCookie("refreshTimer"));
    }
}

/**
 * 
 * @returns void
 */
function toggleMenuAttach() {
    var widgetbtn = document.getElementById('service-console-extension-btn');
    if (window.addEventListener) {
        widgetbtn.addEventListener('click', toggleMenu, false);
    } else if (window.attachEvent) {
        widgetbtn.attachEvent('onclick', toggleMenu);
    }
}

/**
 * 
 * @returns void
 */
function queueTimer() {
    secondCounter = secondCounter + 1;
    let qTimer = 0;
    switch (localStorage.getItem("refreshTimer")) {
        case "0":
            qTimer = 0;
            break;
        case "30":
            qTimer = 30;
            break;
        case "120":
            qTimer = 120;
            break;
        case "300":
            qTimer = 300;
            break;
        case "1500":
            qTimer = 1500;
            break;
        default:
            console.log("qTimer == NaN");
            break;
    }
    
    console.log("Webpage last loaded: " + secondCounter);
    console.log("Timer value: " + qTimer);
    console.log("Refresh time: " + secondCounter % qTimer);
    if (qTimer !== 0) {
        if (secondCounter % qTimer === 0) {
            sidebarRefresh();
            tableRefresh();
        }
    }
}


/**
 * 
 * @returns void
 */
function sidebarRefresh() {
    try {
        document.querySelector(".slds-button-group > lightning-button-icon > button").click();
    } catch (err) {
        console.log(err);
    }
}

/**
 * 
 * @returns void
 */
function tableRefresh() {
    try {
        document.querySelector(".sld-m-left_xx-small > div > lightning-button-icon > button > lightning-button-icon").click();
    } catch (err) {
        console.log(err);
    }
}

/**
 * 
 * @returns void
 */
function feedRefresh() {
    console.log("==> Enter feed refresh");
    try {
        document.querySelector(".feedActions > .right-actions > .slds-button").click();
    } catch (err) {
        console.log(err);
    }
}
