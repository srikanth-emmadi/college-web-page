
// DOM 

function init() {
    const hamburger = document.querySelector('.hamburger');

    const closeButton = document.querySelector('.close-button');

    const sidebarContainer = document.querySelector('.sidebar-container');

    const openSidebar = () => {
        sidebarContainer.classList.add('show-sidebar');
    };
    const closeSidebar = () => {
        sidebarContainer.classList.remove('show-sidebar');
    };

    hamburger.addEventListener('click', openSidebar);
    closeButton.addEventListener('click', closeSidebar);
};
init();

const navbarContainer = document.querySelector('.nav-container');

function navRelatedCode() {
    window.addEventListener("scroll", function () {
        const scrollNumber = window.scrollY;
        const targetNumber = window.innerWidth >= 992 ? 70 : 50;
        if (scrollNumber >= targetNumber) {
            navbarContainer.classList.add('sticky-nav');
        } else {
            navbarContainer.classList.remove('sticky-nav');
        }
    });
};
navRelatedCode();




