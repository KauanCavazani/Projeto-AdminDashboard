// Abrir e fechar a barra lateral
var bar = document.getElementById("bar");
var sidebar = document.getElementById("sidebar-wrapper");
var page_content = document.getElementById("page-content-wrapper");
var hamburguer_menu = document.getElementById("bar");
var btn_close = document.getElementById("btn-close");
var bodyClientWidth = Number(document.body.clientWidth);

var isMobile = false;
var isSideBarOpen = false;


function responsive(){
    bodyClientWidth = Number(document.body.clientWidth);
    if (bodyClientWidth < 910) {
        isMobile = true;
        
    } else {
        isMobile = false
    } 
}


bar.addEventListener("click", function() {
    if(isSideBarOpen) {
        closeSideBar();
    } else {
        openSideBar();
    }
});

btn_close.addEventListener("click", function() {
    closeSideBar();
})

function openSideBar() {
    console.log("entrou")
    if(isMobile) {
        sidebar.style.display = 'block';
        sidebar.style.width = '0px'
        sidebar.style.width = '270px'
        hamburguer_menu.style.display = 'none';
        btn_close.style.display = 'block';
    } else {
        sidebar.style.display = 'block';
        sidebar.style.width = '0px';
        page_content.style.marginLeft = '270px';
        sidebar.style.width = '270px';    
    }

    isSideBarOpen = true;
}

function closeSideBar() {
    if(isMobile) {
        hamburguer_menu.style.display = 'block';
        btn_close.style.display = 'none';
        sidebar.style.display = 'none';
    } else {
        sidebar.style.width = '0';
        page_content.style.marginLeft = '0'    
    }

    isSideBarOpen = false;
}

// Fim de abrir e fechar barra lateral

// Dropdown

var btnDropdown = document.getElementById("dropdown");
var dropdownContent = document.getElementById("dropdown-content");
var isDropdownActive = false;

btnDropdown.addEventListener("click", function() {
    if(isDropdownActive) {
        closeDropdown();
    } else {
        openDropdown();
    }
});

function openDropdown() {
    dropdownContent.style.display = 'block';
    dropdownContent.style.display = 'flex';

    isDropdownActive = true;
};

function closeDropdown() {
    dropdownContent.style.display = 'none';

    isDropdownActive = false;
};

// Fim do dropdown