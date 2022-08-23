window.addEventListener("mousemove", function(e) {
    document.querySelector(".cursor").style.left = e.clientX - 25 + "px";
    document.querySelector(".cursor").style.top = e.clientY - 25 + "px";
});

const ptr = document.querySelector(".hero");

ptr.addEventListener("click", function(e) {
    if (e.target.classList.contains("button")) {
        ptr.classList.add("vanish");
    }
});

ptr.addEventListener("mouseover", function(e) {
    if (e.target.classList.contains("button")) {
        document.querySelector(".mark").classList.add("rotate_c");
    }
});