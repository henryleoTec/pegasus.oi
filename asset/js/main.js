AOS.init();

let fname=document.querySelector("#fname");
let lname=document.querySelector("#lname");
let oname=document.querySelector("#oname");
let email=document.querySelector("#email");
let err=document.querySelector("#err");
let errBox=document.querySelector(".err-box");
let clo=document.querySelector("#clo");
   
$(document).ready(()=>{

    //for first section...............
    $("#n1").on('click',()=>{
     if(fname.value==""){
errBox.style.display="flex";
err.innerHTML="Fill in your first name";
     }else if(lname.value==""){
        errBox.style.display="flex";
        err.innerHTML="Fill in your last name";
     }else if(oname.value==""){
        errBox.style.display="flex";
        err.innerHTML="Fill in your other name";
     }else if(email.value==""){
        errBox.style.display="flex";
        err.innerHTML="Fill in your email address";
     }else{
         $("#first").fadeOut();
         $("#second").fadeIn();
     }
    })

    //for second section-------------



    $("#n2").on("click",()=>{
        $("#second").fadeOut();
        $("#third").fadeIn();
        
    })


   clo.addEventListener("click",() => {
          errBox.style.display="none";
       })
})

