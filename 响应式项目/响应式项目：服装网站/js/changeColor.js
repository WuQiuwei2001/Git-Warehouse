var header = document.querySelector("header");
var allA = document.querySelectorAll("header > nav a");
var input = document.querySelector("header > nav > .search > .input_search input");
window.onscroll = function (event) {
    if (window.scrollY > 0) {
        allA.forEach((value, key, parent) => {
            value.style.color = "black";
        });
        header.style.backgroundColor = "#fff";
    } else {
        allA.forEach((value, key, parent) => {
            value.style.color = "";
        });
        header.style.backgroundColor = "";
    }
}