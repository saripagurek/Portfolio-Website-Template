let scroll_container = document.querySelector(".gallery");
let back_button = document.getElementById("back_button");
let next_button = document.getElementById("next_button");

var gallery_positionInfo = scroll_container.getBoundingClientRect();

scroll_container.addEventListener("wheel", (event) => {
    event.preventDefault();
    scroll_container.scrollLeft += event.deltaY;
});

next_button.addEventListener("click", () => {
    scroll_container.style.scrollBehavior = "smooth";
    scroll_container.scrollLeft += gallery_positionInfo.width;
});

back_button.addEventListener("click", () => {
    scroll_container.style.scrollBehavior = "smooth";
    scroll_container.scrollLeft -= 900;
});