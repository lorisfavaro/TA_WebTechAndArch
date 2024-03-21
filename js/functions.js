/**
 * hamburger menu
 */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/**
 * edit the links so it works with the header.js component from index.html and and all subpages.
 * in the subpages the link to index.html has to go up one dir.
 * on index.html the links to all subpages need html/ in front to go into this dir.
 */
if (onIndex) {
    let pages = ["headerAllEpisodes", "headerAboutMe", "headerContact", "footerAllEpisodes", "footerAboutMe", "footerContact", "footerImprint"];
    pages.forEach((element) => prependLinks(element));
} else {
    // Prepends "../" to the link on the logo in the header
    let anchor = document.getElementById('headerLogo');
    let currentHref = anchor.getAttribute('href');
    let newHref = "../" + currentHref;
    anchor.setAttribute('href', newHref);
}

// Prepends "html/" to a link 
function prependLinks(elementId) {
    let anchor = document.getElementById(elementId);
    let currentHref = anchor.getAttribute('href');
    let newHref = "html/" + currentHref;
    anchor.setAttribute('href', newHref);
}

/**
 * shortens the description of the episode cards, if the text is to long for the card to be fully displayed
 * @param {*} selector id of the element
 * @param {*} maxHeight max height which gets displayed
 */
function truncateText(selector, maxHeight) {
    const element = document.querySelector(selector);
    let text = element.innerText;

    while (element.scrollHeight > maxHeight) {
        text = text.substr(0, text.length - 1);
        element.innerText = text + "...";
    }
}

truncateText(".cardContentDesc", 130);

/**
 * when the user clicks on div, open the popup
 * @param {*} url the text that gets copied to clipboard
 * @param {*} id id of the popup-span
 */
function togglePopup(url, id) {
    var popup = document.getElementById(id);
    // copy the url to the clipboard
    navigator.clipboard.writeText(url);
    // show the popup
    popup.classList.toggle("show");
}