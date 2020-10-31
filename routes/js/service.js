function openTab(pageID, tabID, color) {
    let tabPages = document.getElementsByClassName("tab-content");
    for (let page of tabPages) {
        page.style.display = "none";
        page.style.backgroundColor = color;
    }

    let tabs = document.getElementsByClassName("tab");
    for (let tab of tabs) {
        tab.style.backgroundColor = "";
        tab.style.boxShadow = "inset 0px -5px 5px -4px rgba(0, 0, 0, 0.3)";
    }

    document.getElementById(pageID).style.display = "inline-block";
    let tabStyle = document.getElementById(tabID).style;
    tabStyle.backgroundColor = color;
    tabStyle.boxShadow = "";
}

document.getElementById("tab-2").click();