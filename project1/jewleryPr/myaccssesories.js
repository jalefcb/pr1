

var Ctrl=document.getElementById("ctrl")
var Body=document.getElementById("body")

Body.addEventListener("click",function(){

    var state=Ctrl.checked;

    if (state){
     Body.setAttribute("class","night")
    }
    else{
        Body.removeAttribute("class","night")

    }

})