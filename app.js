const overlay = document.getElementById("overlay")
const openModel = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

openModel.addEventListener("click", function clicked (){
    overlay.style.display = "block"
})

closeModal.addEventListener('click', function clicked () {
    overlay.style.display = "none"
})