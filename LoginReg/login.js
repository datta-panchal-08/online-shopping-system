let username;
let password;
let nickname;
let username_1;
let password_1;
let nickname_1;
function registerForm(){
    username_1 =document.getElementById('username').value;
    password_1 =document.getElementById('password').value;
    nickname_1 =document.getElementById('nickname').value;
    if(username_1 == "admin" && password_1 =="password" && nickname_1=="nickname")
    {
        alert("Registered Successfully😃😃 !")
    }
    else{
        alert("Registeration Information Invalid Please Enter The Correct detailes 😔😔")
    }
}
function validateForm(){
     username = document.getElementById('username').value;
     password = document.getElementById('password').value;
     nickname =document.getElementById('nickname').value;
    if(username == "admin" && password == "password" && nickname == "nickname")
    {
        alert("Login Successful😃😃!");
    }
    else{
        alert("Invalid Username Or Password Please Try again 😔😔 ");
    }
}
