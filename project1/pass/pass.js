

function showHide(){
    var password=document.getElementById("password");

    if(password.type==="password"){
        password.type="text";

        document.getElementById("hide").style.display="inline-block";
        document.getElementById("show").style.display="none";

    }

    else{
        password.type="password";
        document.getElementById("hide").style.display="none";
        document.getElementById("show").style.display="inline-block";
    }
}