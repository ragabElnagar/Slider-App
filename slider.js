
// identfier
var imageslide=Array.from(document.querySelectorAll(".container img"));
var curentslide=1;
var length=imageslide.length;
var number=document.getElementById("number");
var nextbotton=document.getElementById("next");
var prevbotton=document.getElementById("prev");
// creat ul and li
var ul=document.createElement("ul");
ul.setAttribute("id","ul");
for (i=1;i<=length;i++) {
    var li=document.createElement("li");
    li.setAttribute("index",i);
    li.appendChild(document.createTextNode(i));
    ul.appendChild(li);
}
document.getElementById("pullt").appendChild(ul);
var UL=document.getElementById("ul");
var ularray=Array.from(document.querySelectorAll("#ul li"));

//call function
cheker();
//creat function to put image and number of slide and active number
function cheker() {
    number.textContent="#slid "+curentslide+"of "+length;
        remove();

    imageslide[curentslide-1].classList="active";
    UL.children[curentslide-1].classList="active";
    if (curentslide==1) {
        prevbotton.classList.add("disapled");
    }
    else{
        prevbotton.classList.remove("disapled");

    }
        if (curentslide==length) {
        //nextbotton.classList.add("disapled");
        curentslide=0;
    }
   // else{
     //   nextbotton.classList.remove("disapled");

    //}

}
// function to remove active class
function remove() {
    imageslide.forEach(function(img){
       img.classList.remove("active");
    });
        ularray.forEach(function(pull){
       pull.classList.remove("active");
    });
}
nextbotton.onclick=nextslide;
prevbotton.onclick=prevslide;
//function to go to nextslid

function nextslide() {
    if (curentslide==length) {
        return false;
    }
    else{
        curentslide++;
            cheker();
    }
}
//function to go to prevslid

function prevslide() {
    if (curentslide==1) {
        return false;
    }
    else{
        curentslide--;
        cheker();
    }
}



let myvar;
let button1=document.querySelector(".b");
let button2=document.querySelector(".c");
button1.onclick=function(){
    myvar=setInterval(nextslide,2000);
        
}
button2.onclick=function(){
    clearInterval(myvar)
       
}




//to chose number bage

for (var i=0;i<=ularray.length;i++) {
ularray[i].onclick=function (){
    curentslide=parseInt(this.getAttribute("index"));
    cheker();
}
}

