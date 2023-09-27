const buttons = [...document.getElementsByClassName("slide-btn")]

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    button.closest(".product-images").style.opacity = 1
  

    const offset = button.dataset.slideBtn === "next" ? 1 : -1
    const slides = button.closest(".card-carousel").getElementsByClassName("card-carousel__list")[0]

    const activeSlide = slides.getElementsByClassName("data-active")[0]
    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].classList.add("data-active")
    activeSlide.classList.remove("data-active")
  })
})