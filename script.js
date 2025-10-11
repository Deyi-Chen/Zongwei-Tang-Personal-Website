document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById("sidebar")
    const sidebutton = document.getElementById("sidebutton")
    sidebutton.addEventListener("click", () => {
        sidebar.classList.toggle('open')
    })
})