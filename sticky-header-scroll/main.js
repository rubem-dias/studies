window.addEventListener("scroll", function() {
    var header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0); //adiciona a classe sticky quando > 0;
})