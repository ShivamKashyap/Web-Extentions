let shell = document.querySelector('.shell');
let headerMainWrapper = document.querySelector('.header-main__wrapper');
let sideBar = document.querySelector('.sideBar');
let leftBar = document.querySelector('.leftBar');
let rightBar = document.querySelector('.rightBar');
let darkModeWrap = document.querySelector(".darkMode-wrap");
let darkModeWrap_after = document.querySelector(".darkMode-wrap::after");

console.log("GFG Remover is fetched");

function darkModeTransformer() {
    console.log("darkMode setting fetched");
    darkModeWrap.style.position = "fixed";
    darkModeWrap.style.left = "auto";
    darkModeWrap.style.right = "0";

    darkModeWrap.style.borderTopRightRadius = "0px";
    darkModeWrap.style.borderBottomRightRadius = "0px";
    darkModeWrap.style.borderTopLeftRadius = "50%";
    darkModeWrap.style.borderBottomLeftRadius = "50%";

    console.log("darkMode setting executed");
}

function shellRemover() {
    console.log("Shell remover fetch");
    shell.style.display = "none";
    console.log("Shell remover executed");
}

function headerRelative() {
    headerMainWrapper.style.position = "relative";
}

function mainArtical() {
    // sideBar setting
    console.log("Sidebar setting fetch");
    sideBar.style.position = "sticky";
    sideBar.style.top = "0px";
    sideBar.style.minHeight = "100vh";
    console.log("Sidebar setting executed");

    // leftBar settings
    console.log("leftBar setting fetch");
    leftBar.style.minWidth = "75%";
    console.log("leftbar setting executed");

    // RightBar setting
    console.log("RightBar setting fetch");
    rightBar.style.display = "none";
}

mainArtical(); headerRelative(); shellRemover(); darkModeTransformer();

console.log("GFG Remover is executed");