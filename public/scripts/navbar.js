// JavaScript function to highlight the active link
function highlightActiveLink() {
    let links = document.querySelectorAll(".navbar a");
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let currentUrl = window.location.pathname;
        console.log(currentUrl)
        console.log(link.getAttribute("href"))
        if (currentUrl === link.getAttribute("href")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    }
}
// Call the function on page load
highlightActiveLink();
// Call the function on every URL change
window.addEventListener("hashchange", highlightActiveLink);