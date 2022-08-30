// target --> leet code dark theme
setTimeout(() => {
    // Navigation reference
    let nav = document.querySelector('.navbar__1Bue');
    let navItem1 = document.querySelectorAll('.nav-item__5BvG');
    let navItem2 = document.querySelector('.ant-dropdown-trigger');
    let notificationBell = document.querySelector('.notification-ctr__eDQh');
    let navFireNum = document.querySelector('.counter__amcn');
    let feedbackTab = document.querySelector('.feedback-tab');

    // tabs refrence
    let tabContainer = document.querySelector('.css-1lexzqe-TabHeaderContainer');
    let activeTabs = document.querySelector('.css-19j86kk-TabHeader');
    let nonActiveTabs = document.querySelectorAll('.css-1uwsqgo-TabHeaderRow');

    // Spliter
    let spliter = document.querySelector('.resize-bar__2_sK');

    // Right
    let rightTabs = document.querySelector('.container__2zYY');
    let lineNuber = document.querySelectorAll('.CodeMirror-linenumber');
    let codeGutter = document.querySelectorAll('.CodeMirror-gutter');
    let codeGutterOpener = document.querySelectorAll('.CodeMirror-foldgutter-open');

    // right tabs selection
    let langSelectContainer = document.querySelector('.select-container__29U9');
    let langSelect = document.querySelector('.ant-select-selection-selected-value');

    // autocomplete button
    let autoComplete = document.querySelector('.css-10fxeud');

    // code body
    let codeBody = document.querySelector('.description__24sA');
    let accordianheader = document.querySelectorAll('.css-isal7m');
    let accordianButtons = document.querySelectorAll('.btn-info__3EMF');
    let questionTitle = document.querySelector('.css-v3d350');
    let codeBodyText = document.querySelector('.question-content__JfgR');
    let pre = document.querySelectorAll('pre');
    let code = document.querySelectorAll('code');

    // footer part
    let footerLeft = document.querySelector('.question-fast-picker-wrapper__2Y97');
    let footerRight = document.querySelector('.container__2WTi');
    let footerButtons = document.querySelectorAll('.css-6iyx43');
    let pagignation = document.querySelector('.pagination-screen__12p7')

    function main() {
        nav.style.backgroundColor = "rgb(24 24 24)";
        for (i = 0; i < navItem1.length; i++)
            navItem1[i].style.color = "#fff";
        navItem2.style.color = "#fff";
        notificationBell.style.border = "0px"
        navFireNum.style.color = "rgb(255 164 0)";

        for (i = 1; i < nonActiveTabs.length; i++) {
            nonActiveTabs[i].style.color = "white";
            nonActiveTabs[i].style.backgroundColor = "rgb(24 24 24)";
        }

        activeTabs.style.color = "rgb(255 164 0)";
        activeTabs.style.backgroundColor = "rgb(24 24 24)";

        tabContainer.style.backgroundColor = "rgb(24 24 24)";
        spliter.style.background = "rgb(36 36 36)";

        rightTabs.style.backgroundColor = "rgb(24 24 24)";

        for (i = 0; i < lineNuber.length; i++)
            lineNuber[i].style.color = "white";

        for (i = 0; i < codeGutter.length; i++)
            codeGutter[i].style.background = "rgb(24 24 24)";

        for (i = 0; i < codeGutterOpener.length; i++)
            codeGutterOpener[i].style.color = "White";

        langSelect.style.color = "White";
        langSelectContainer.firstChild.style.color = "white"

        autoComplete.childNodes[1].style.color = "white";
        codeBody.style.background = "rgb(24 24 24)"
        codeBody.style.borderTop = "1px solid white"
        questionTitle.style.color = "white"
        codeBodyText.firstChild.style.color = "white"
        for (i = 0; i < pre.length; i++) {
            pre[i].style.background = "rgb(0 0 0)";
            pre[i].style.color = "white";
        }

        for (i = 0; i < code.length; i++) {
            code[i].style.background = "rgb(34 34 34)";
            code[i].style.color = "white"
        }

        for (i = 0; i < accordianheader.length; i++)
            accordianheader[i].style.background = "rgb(24 24 24)"

        for(i=0; i<accordianButtons.length; i++){
            accordianButtons[i].style.background = "rgb(36 36 36)";
            accordianButtons[i].style.color = "white";
        }

        footerLeft.style.background = "rgb(36 36 36)";
        footerRight.style.background = "rgb(36 36 36)";
        for(i=0; i<footerButtons.length; i++){
            footerButtons[i].style.backgroundColor = "rgb(36 36 36)";
            footerButtons[i].style.border = "1px solid #f9a825";
            footerButtons[i].firstChild.style.color = "white"
            footerButtons[i].childNodes[1].style.color = "white"
        }
        pagignation.style.color = "#f9a825";
    }

    main();
    console.log("Nav theam applied");

    activeTabs.addEventListener('click', main());

}, 5000)
