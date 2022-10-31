// set variable

let openBtn = document.querySelector("#open_btn")
let m_container = document.querySelector("#modal_container")
let closeBtn = document.querySelector("#close_btn")


// event listeners


openBtn.addEventListener("click",()=>{
    m_container.style.display="block"
})

closeBtn.addEventListener("click",()=>{
    m_container.style.display="none"
})


window.addEventListener("click",(event)=>{

    if(event.target===m_container){
        m_container.style.display="none"

    }
})