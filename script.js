document.addEventListener('DOMContentLoaded', () => {
    sidebar()
    goToPhoto()
})

function sidebar(){
    const sidebar = document.getElementById("sidebar")
    const sidebutton = document.getElementById("sidebutton")
    sidebutton.addEventListener("click", () => {
        sidebar.classList.toggle('open')
        if (sidebutton.innerText=="<"){
            sidebutton.innerText=">"
        }
        else {
            sidebutton.innerText="<"
        }
    })
}

function goToPhoto(){
    const photobutton = document.getElementById("myphoto")
    photobutton.addEventListener("click", () => {
        window.location.href = "photos.html"
    })
}