"strict";

/**
 * Initials main body view so that it's added
 * to the UI bottom right of the page.
 * 
 * @returns void
 */
setInterval(function () {
    viewInit();
    queueTimer();
}, 1000);


/**
 * 
 * @returns mixed
 */
function viewInit() {
    let utilityBar = document.querySelector(".oneUtilityBar.slds-utility-bar_container > ul");
    if (utilityBar === null) {
        return;
    }

    if (utilityBar.lastElementChild.innerText !== "SCE settings") {
        let li = document.createElement("li");
        li.id = "service-console-extension-btn";
        li.innerText = "SCE settings";
        utilityBar.append(li);
        refreshMenu();
        toggleMenuAttach();
    }
}


/**
 * 
 * @returns void
 */
function toggleMenu() {
    let menuReveal = document.getElementById("service-console-extension-menu");
    menuReveal.classList.toggle("service-console-extension-disabled");
}
