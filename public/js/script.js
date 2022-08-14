// Abrir e fechar a barra lateral
var bar = document.getElementById("bar");
var sidebar = document.getElementById("sidebar-wrapper");
var page_content = document.getElementById("page-content-wrapper");
var hamburguer_menu = document.getElementById("bar");
var btn_close = document.getElementById("btn-close");
var bodyClientWidth = Number(document.body.clientWidth);

var isMobile = false;
var isOpen = false;

if (bodyClientWidth < 910) {
    isMobile = true;
} else {
    isMobile = false
}

bar.addEventListener("click", function() {
    if(isOpen) {
        closeSideBar();
    } else {
        openSideBar();
    }
});

btn_close.addEventListener("click", function() {
    closeSideBar();
    console.log('clicou')
})

function openSideBar() {
    if(isMobile) {
        sidebar.style.display = 'block';
        hamburguer_menu.style.display = 'none';
        btn_close.style.display = 'block';
    } else {
        sidebar.style.width = '0px';
        page_content.style.marginLeft = '270px';
        sidebar.style.width = '270px';    
    }

    isOpen = true;
}

function closeSideBar() {
    if(isMobile) {
        sidebar.style.display = 'none';
        hamburguer_menu.style.display = 'block';
        btn_close.style.display = 'none';
    } else {
        sidebar.style.width = '0';
        page_content.style.marginLeft = '0'    
    }

    isOpen = false;
}