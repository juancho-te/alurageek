
console.log("Comenzando");

var btn=document.querySelector("#loginBtn")

btn.addEventListener("click",function(event){
    event.preventDefault();

    var form1 = document.querySelector("#form__container");

    var email=form1.emailTxt.value;
    var pwd=form1.passwordTxt.value;
    console.log("email="+email);
    console.log("passwod="+pwd);

});








