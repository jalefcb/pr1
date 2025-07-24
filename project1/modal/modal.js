var open=document.getElementById("open");
var container=document.getElementById("container");
var close=document.getElementById("close");


open.addEventListener("click",()=>{
    container.classList.add("show");
})

close.addEventListener("click",()=>{
    container.classList.remove("show");
})