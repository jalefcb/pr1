

var x=20;

switch (x) {
    case 20:
        case 50:
       // alert ("true");
        break;



    default:
       // alert("false");
        break;
}



function showFullName(){
    var myName="jale";
    var myFamily="tahouri";
    var result=myName+" "+myFamily;
    alert(result);
}

function sum(x,y){
    var result=x+y;
    alert(result);
}

function getCategory(age){
    var Category="";
    switch (true) {
        case isNaN(age):
Category="not an age";
            break;

            case(age>=50):
            Category="old";
            break;

            case(age<=20):
            Category="baby";
            break;
    
        default:
            Category="young"
            break;
    }
    alert(Category);
}

//getCategory(20);


function sum(sum1,sum2){
 return sum1+sum2;
}

var sumNumber=sum(10,40);


function myFunction(){
    return Math.PI*2;
}

var myPi=myFunction();


//var Name=prompt("Enter name");
//var Family=prompt("Enter family");

//function showFullEn(myname,myfamily){
    //return " my name is " +myname+ " " +myfamily;
//}

//var resultname=showFullEn(Name,Family);


//function FullName(myname="ali",myfamily=" enayati"){
//var resultSum=myname+myfamily;
//alert(" result= "+resultSum);}

//FullName();

function motherName(){
    function childName(){
        alert(" my name is "+myName+myFamily)
    }
    return childName()
}

//motherName("ali","hassani");



//var myText="codeyadcom";

//alert(myText.charAt(myText.length-4))

//var result=myText.charCodeAt(3)

//alert(result)



//var myText=String.fromCharCode(68)


//alert(myText)


//var myName="jalefcb";

//alert(myName.lastIndexOf("a"))

//var myCity="   esfehanshomal a    ";

//alert(myCity.trim());

//alert(myName.toUpperCase())


//var showFullName="my name is jale th and live in iran"
//alert(showFullName.search("name"))

//alert(showFullName.includes("S"))


//var myText="codeyadcom";
//var result=myText.slice(0,4)
//alert(result)

//var myText="ilovejava"
//var result=myText.replace("java","php")
//alert(result)


//var z=x.toString()+y.toString();
//alert(z)


//var user=prompt("Enter name:")

//if(user.toLowerCase()=="ali"){
   // alert("You are perfect")}

//else{
   // alert("You can't do it")}





//var myNumbers=Math.random()*10;

//var myNumbers=Math.floor(Math.random()*10)

//var myNumbers=Math.pow(6,3)

//var myNumbers=Math.round(4.41)

 //var myNumbers=Math.sqrt(64)

 //var myNumbers=Math.max(200,500,670,1021,30)

 //var myNumbers=Math.min(200,500,670,1021,30)

 //var myNumbers=Math.abs(-121)


 //document.getElementById("test").innerHTML=60*10

 //document.write("reza")

 //alert("hossein")
//console.log("mohammad")


//var number1=prompt("Enter number1:")
//var number2=prompt("Enter number2:")

//var numberType1=Number(number1)
//var numberType2=Number(number2)

//if(numberType1>numberType2){
   // i=numberType1
//}
//else{
   // i=numberType2
//}

//for(;i%numberType1!=0 || i%numberType2!=0;){
//i++
//}
//document.write(i)



for(x=1;x<=10;x++){
    for(y=1;y<=10;y++){
        //document.write("<div>");
        //document.write(x*y);
       // document.write("</div>");
    }
  //document.write("</br>");
}
var i=0;
while(i<=10){
    //document.write(i+"<br>")
    i++;
}

var i=0;
while(i>=-10){
   // document.write(i+"<br>")
    i--;
}

//var multNum=prompt("Enter Number")
//var mazNumType=Number(multNum)


var mult=1

while(mult<20){
  //  document.write(mazNumType*mult)
   // document.write("<br>")
    mult++;
}


var x=0;
var y=0;

while(x<5){
    while(y<5-x){
        //document.write("*")
        y++
    }
       y=0
   // document.write("<br>")
       x++
}


var x=1;
 while(x<=5){
    var y=1;
    while(y<=x){
        //document.write("*")
        y++
    }
    //document.write("<br>")
       x++
 }


 var i=1
 do{
   // document.write(i)
    //document.write("<br>")
    i++
 }
 while(i<0)



var even=""
var odd=""
var i=1

do{
    if(i%2==0){
       even =even+" " +i
    }
    else{
        odd = odd+" " +i
    }
    i++
}

while(i<20){
   // document.write('The Even='+even+"<br>")
   // document.write('The Even='+odd+"<br>")

}



var myFriend=["ali","hassan","hossein","reza","amir"]
//document.write(myFriend[1])


for(i=0;i<myFriend.length;i++){
  //  document.write(myFriend[i]+"<br>");

}


var myTeachersName=["ali","pooria","hossein","reza","amir"]

var myTeachersFamily=["hassani","abdoli","enayati","davoodi","mohajeri"]

//document.write("<table border='1' width='300'>")
//document.write("<tr> <th> Masters </th> <th>Name</th> <th>Family</th></tr> ")

for(i=0;i<myTeachersName.length;i++){
   // document.write("<tr> <td>"+ (1+i) + "</td> <td>" +myTeachersName[i]+" </td> <td>"+myTeachersFamily[i]+" </td> </tr>")
}
document.write("</table>")




//var theCourse=prompt("Enter Course");
//var codeYadCourses=["php","js","python","csharp"];
//var isCourse=codeYadCourses.includes(theCourse);

//if(isCourse==true){
    //document.write("این دوره موجود هست")


//else{
    //document.write("متسفانه این دوره موجود نیست")



//var listNum1=[1,2,3,5,7,9];
//var listNum2=listNum1.map(item=>item*3)
    

//document.write(listNum2);

//var listNum1=[1,2,3,5,7,9];
//var listNum2=listNum1.filter(item=>item>3)

//document.write(listNum2);


var numberz=[150,55,20];
//document.getElementById("demo").innerHTML=number.reduce(myFun)




function myFun(total,num){
//return total-num;
}

var ageNumz=[28,40,25,56];
//document.getElementById("demo").innerHTML=ageNum.find(myAge);

function myAge(age){
   // return age > 30;
}


//var myFactor={ 1:[1,2,3,4],
  //  2:[2,4,6,8],
  //  3:[3,6,9,12]

//};

//var inputNumz=prompt("Enter Number:");

//var totalz=myFactor[inputNum];

//total.forEach(function(num1){
  //  document.writeln(num1)
//});



let myEn="ali";
myEn="amir";

//document.write(myEn);


let mayName="ali";
if(mayName==="ali"){
    let mayName="hassan";
}

//document.write(mayName);

const myNaz="meysam";
//document.write(myNaz);



//var mynumero="ut";

try{
//if(isNaN(mynumero)) throw "is not number";
}
catch(error){
//document.write(error)
}






