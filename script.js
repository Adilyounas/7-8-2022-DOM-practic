// let outd = document.querySelector(".outer_div");
// let innerd = document.querySelector(".inner_div");
let grandd = document.querySelector(".grandd");

grandd.addEventListener("click",(event)=>{
    alert(`grand div`)
    let target = event.target

    if(target.matches("li")){
        target.style.fontSize = "5rem"
    }
    
},false)


let ul = document.querySelector("ul");
let btn = document.querySelector("#btn")

btn.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.textContent = "hi! i am new here"
    ul.appendChild(li)
})