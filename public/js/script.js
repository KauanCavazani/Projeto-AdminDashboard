bar = document.getElementById("bar");
sidebar = document.getElementById("sidebar-wrapper");
page_content = document.getElementById("page-content-wrapper");

var isOpen = false;

bar.addEventListener("click", function() {
    if(isOpen) {
        closeSideBar();
    } else {
        openSideBar();
    }
});

function openSideBar() {
    sidebar.style.width = '270px';
    page_content.style.marginLeft = '270px'
    isOpen = true;
}

function closeSideBar() {
    sidebar.style.width = '0';
    page_content.style.marginLeft = '0'
    isOpen = false;
}