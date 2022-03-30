//navigation visible/hidden

function toggleNav() {
    let getSidebarUl = document.querySelector(".nav-sidebar ul");

    if (getSidebarUl.style.visibility === "visible") {
        getSidebarUl.style.visibility = "hidden";
    } else {
        getSidebarUl.style.visibility = "visible";
    }
}

// BODY background-color changing

document.querySelector("#li-home").addEventListener("click", function () {
    document.body.style.backgroundColor = "#f4f4e6";
    toggleNav();
});

document.querySelector("#li-red").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    toggleNav();
});

document.querySelector("#li-orange").addEventListener("click", function () {
    document.body.style.backgroundColor = "orange";
    toggleNav();

});

document.querySelector("#li-purple").addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
    toggleNav();
});

document.querySelector("#li-green").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    toggleNav();
});

document.querySelector("#00008b").addEventListener("click", function () {
    document.body.style.backgroundColor = "Donkerblauw";
    toggleNav();
});
// menu item color change on hover

document.querySelector("#li-home").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "#f4f4e6";
});

document.querySelector("#li-red").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "red";
});

document.querySelector("#li-orange").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "orange";
});

document.querySelector("#li-purple").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "purple";
});

document.querySelector("#li-green").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "green";
});

