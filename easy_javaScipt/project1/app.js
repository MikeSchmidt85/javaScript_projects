const hello = document.querySelector(".closed")
const goodbye = document.querySelector(".open")

//Add event listener

hello.addEventListener("click", () => {
    if (goodbye.classList.contains("open")) {
        goodbye.classList.add("active");
        hello.classList.remove("active");
    }
});

goodbye.addEventListener("click", () => {
    if (hello.classList.contains("closed")) {
        hello.classList.add("active");
        goodbye.classList.remove("active");
    }
});