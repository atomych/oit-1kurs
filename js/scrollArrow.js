const scrollDOWN = document.querySelector(".scroll--down");
const scrollUP = document.querySelector(".scroll--up");

scrollDOWN.classList.remove("hide");

scrollDOWN.addEventListener("click", () => {
    window.scrollTo(0, document.body.scrollHeight);
})

scrollUP.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

window.addEventListener("scroll", () => {
    if (scrollY < innerHeight) {
        scrollDOWN.classList.remove("hide");
        scrollUP.classList.add("hide");
    } else {
        scrollDOWN.classList.add("hide");
        scrollUP.classList.remove("hide");
    }

    if (document.body.offsetHeight == scrollY + innerHeight) {
        scrollDOWN.classList.add("hide");
        scrollUP.classList.remove("hide");
    }
})