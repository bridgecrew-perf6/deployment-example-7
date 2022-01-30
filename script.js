const heading = document.querySelector('h1')
heading.addEventListener('click', () => {
    heading.classList.toggle("green")
    heading.classList.toggle("blue")
})