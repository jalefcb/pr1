
var counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{
    counter.innerHTML="0";

    var update=()=>{
     
   var data=+counter.getAttribute("data");
   var inTag=+counter.innerHTML;

   var speedData=data/1000;

   if(inTag<data){
    counter.innerHTML=Math.ceil(inTag+speedData);
    setTimeout(update,1);
   }
   else{
    counter.innerHTML=data;
   }
    }

    update();
})