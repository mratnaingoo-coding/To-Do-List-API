// Theme Dark & light
const bodyItem = document.querySelector('body')
const toggle = document.getElementById('toggle');
const bulb = document.getElementById('bulb')
toggle.onclick = ()=>{
    toggle.classList.toggle('active')
    bodyItem.classList.toggle('active')

}
// Animation Words
var typed = new Typed(".typing", {
    strings:["Search Your Task!","Create What You Want!","Delete Easily!"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
// Font Colors
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(colors){
    alternateStyle.forEach((style) =>{
        if(colors == style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}