// set variable

let accordion = document.querySelectorAll(".content_container")

for(let i=0; i < accordion.length; i++){
    accordion[i].addEventListener("click",function(){
        this.classList.toggle("active")
    })
}