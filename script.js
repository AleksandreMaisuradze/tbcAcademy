let burger = document.querySelector(".fa-bars")
let mark = document.querySelector(".fa-xmark")
let menu = document.querySelector(".header_nav")


burger.addEventListener("click", () => {
    burger.style.display = "none";
    mark.style.display = "block";
    menu.classList.add("show");
});

mark.addEventListener("click", () => {
    burger.style.display = "block";
    mark.style.display = "none";
    menu.classList.remove("show");

});

function left() {
    const container = document.querySelector('.card_wrapper');
    container.scrollBy({
        left: -container.clientWidth / 2, 
        behavior: 'smooth' 
    });
}

function right() {
    const container = document.querySelector('.card_wrapper');
    container.scrollBy({
        left: container.clientWidth / 2, 
        behavior: 'smooth' 
    });
}
