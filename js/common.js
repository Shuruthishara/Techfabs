//Pre-loader
var time;

function preLoader() {
    time = setTimeout(showPage, 1000);
}

function showPage () {
    document.getElementById("pre-loader").style.display = "none";
}


//Element's height according to another element's height
var getFromElementId;
var setToElementId;

function getElementHeight(getFromElementId, setToElementId) {
    let getFromElement = document.getElementById(getFromElementId);
    let getFromInfo = getFromElement.getBoundingClientRect();
    console.log(getFromInfo);
    let getFromHeight = getFromInfo.height;

    function setHeightTo() {
        let setToElement = document.getElementById(setToElementId);

        // setToElement.classList.add(newClassName);
        setToElement.style.height = getFromHeight + "px";
        console.log(setToElement.style.height)
    }

    setHeightTo();
}

getElementHeight("main-menu-li", "nav");



//Responsive navbar - Mobileview
console.log(window.innerWidth);
if (window.innerWidth < 768) {
    let subMenu = document.getElementById("sub-menu");
    subMenu.style.display = "none";

    function serviceButton() {
        if (subMenu.style.display === "none") {
            subMenu.style.display = "block"
        } else {
            subMenu.style.display = "none"
        }
    }

    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#main-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active-hb");
        navMenu.classList.toggle("active-ul");
    }
}



//Hamburger padding
let nav = document.getElementById("nav");
let hamburger = document.getElementById("hamburger");
let navInfo = nav.getBoundingClientRect();
let navHeight = navInfo.height;
hamburger.style.padding = ((navHeight - 29)/2) + "px";
