let burgerMenu = document.getElementById("button-checkbox");

burgerMenu.addEventListener("click", function dropdownMenu() {
    if (burgerMenu.checked) {
        document.getElementsByClassName("menu-container")[0].classList.add("show");
        document.getElementsByTagName("nav")[0].setAttribute("style", "background: #000")
    } else {
        document.getElementsByClassName("menu-container")[0].classList.remove("show");
        document.getElementsByTagName("nav")[0].setAttribute("style", "background: #0007")
    }
});