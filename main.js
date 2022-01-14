let burgerMenu = document.getElementById("button-checkbox"),
    menuContainer = document.getElementsByClassName("menu-container")[0],
    navb = document.getElementsByTagName("nav")[0],
    open = false;

document.addEventListener("click", function(evt) {
    let isTarget = evt.target;

    if (burgerMenu == isTarget && open == false) {
        dropdownMenu();
    } else {
        dropdownMenu();
        menuContainer.classList.remove("show");
        navb.setAttribute("style", "background: #0007");
        burgerMenu.checked = false;
    }

});

function dropdownMenu() {
    if (burgerMenu.checked) {
        menuContainer.classList.add("show");
        navb.setAttribute("style", "background: #000");
        return open = true;
    } else {
        menuContainer.classList.remove("show");
        navb.setAttribute("style", "background: #0007");
        return open = false;
    }
}