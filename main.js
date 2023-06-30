const clickGmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")


clickGmail.addEventListener("click",navbarEmail)


alert("hola")
console.log("hola que pasa cabron")



function navbarEmail(){
    desktopMenu.classList.toggle("inactive")
    

}
