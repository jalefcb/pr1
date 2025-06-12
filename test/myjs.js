



















//var mynum=20;
//alert( typeof mynum);

//var myname="jale";
//alert(typeof myname);

//var mynum1=24
//var mynum2=30
//var mynumplus=mynum1+mynum2
//alert(typeof mynumplus)

//var myage;
//alert(typeof myage);

//var x=20;
//var y=3;
//var k=7;
//var z=x%y;

//alert(z);

//var x=10;
//x++;

//alert(x);

//var x=27;
//var y=11;
//x+=y;
//alert(x);


//var data=prompt("Enter Number");
//var num=Number(data)+5;

//alert(typeof num);

//var x=3256;
//var y=String(x);
//alert(y);

//var x=24
//var y=4
//var z=6
//alert(y*z==x)

//alert(x!=y)

//var x="24"
//var y="24"

//alert(x!==y)

//var x=prompt("Enter number1:");
//var y=prompt("Enter number2:");

//alert(Number(x)%Number(y)==0);

//var x=prompt("وزن خود را وارد کنید");
//var xtype=Number(x);


//if (xtype>100){
   // alert("متاسفانه وزن شما زیاد است")
//}
//else{
  //  alert("وزن شما ایده آل است")
//}



//var x=prompt("Enter number:")
//var xtype=Number(x)

//if(xtype%2==0){
   // alert("even")
//}else{
   // alert("odd")}

   //var weight=prompt("وزن خود را وارد کنید")
   //var height=prompt("قد خود را وارد کنید")

   //var weightType=Number(weight)
   //var heightType=Number(height)

   //var heightResult=heightType*heightType

   //var BMI=weightType/heightResult


   //if(BMI>30){
   // alert("شما اضافه وزن دارید")
   //}else{ alert("وزن شما ایده آل است")}


   //var city=prompt("Enter city");

   //var people=prompt("Enter number");
   //var peopleType=Number(people);

   //var price=prompt("Enter price");
   //var priceType=Number(price);

  // if(city=="ya" || city=="esf"){
       if(peopleType==1){
         var priceTotal=peopleType*priceType;
         var off=priceTotal*0.99;
         alert(off);
       }

        else if(peopleType==2){
         var priceTotal=peopleType*priceType;
         var off=priceTotal*0.98;
         alert(off);
       }
       else if(peopleType==3){
         var priceTotal=peopleType*priceType;
         var off=priceTotal*0.97;
         alert(off);
       }
       else if(peopleType==4){
         var priceTotal=peopleType*priceType;
         var off=priceTotal*0.96;
         alert(off); 
       }
       else if(peopleType>=5){
         var priceTotal=peopleType*priceType;
         var off=priceTotal*0.95;
         alert(off);
       }
//   }

  // else{
      alert(" get lost");
  // }




  
//var usernum1=Number(prompt("Enter First Number:"));
//var useOperator=prompt("Enter Operator");
//var usernum2=Number(prompt("Enter Second Number:"));

if(useOperator==="*"){
  multiply(usernum1,usernum2);
}
else if(useOperator==="+"){
  add(usernum1,usernum2);
}
else if(useOperator==="/"){
  devide(usernum1,usernum2);
}
else if(useOperator==="-"){
  subtract(usernum1,usernum2);
}
else{
 // document.write("Something Wrong")
}


function multiply(usernum1,usernum2){
 //document.write(usernum1*usernum2);
}
function add(usernum1,usernum2){
  //document.write(usernum1+usernum2);
}
function devide(usernum1,usernum2){
 // document.write(usernum1/usernum2);
}
function subtract(usernum1,usernum2){
//  document.write(usernum1-usernum2);
}
  

  



