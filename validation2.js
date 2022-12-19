var registrationAccounts = [{
login: 'admin',
password: 'admin',
email:'admin@ty.rt'
}];

if (localStorage.getItem('accounts')==null) {
  localStorage.setItem("accounts",JSON.stringify(registrationAccounts));
}

var res = JSON.parse(localStorage.getItem('accounts'));
var i = 0;

isLogged();

function isLogged() {
  let id=localStorage.getItem("logged");
  if (id!=-1 && id!=null) {
    document.getElementById("registrationform").style.display="none";
    document.getElementById("loginfo2").style.display='block';
    document.getElementById("first").innerHTML="Your nickname: "+res[id].login;
    document.getElementById("second").innerHTML="Your email: "+res[id].email;
    if(res[id].login=="admin"&&res[id].password=="admin"){
      admin(res.length-1);
      }
  }
}

function logup() {
if (true) {
  i=res.length++;
  res[i]={};
  res[i].login = document.getElementById('logres').value;
  res[i].password = document.getElementById('passwordres').value;
  res[i].email = document.getElementById('email').value;
  res[i].crud=false;
 localStorage.setItem("accounts",JSON.stringify(res));
}
}

function login() {

      var flag = false;
      let login2 = document.getElementById('login').value;
      let password2 = document.getElementById('password').value;

for(i=0; i<res.length; i++){

      if (login2 == res[i].login && password2 == res[i].password && password2 != "" && res[i].crud!=true) {
        document.getElementById("registrationform").style.display="none";
        document.getElementById("loginfo2").style.display='block';
        document.getElementById("first").innerHTML="Your nickname: "+res[i].login;
        document.getElementById("second").innerHTML="Your email: "+res[i].email;
        localStorage.setItem("logged", i);
          flag=true;
          if(login2=="admin"&&password2=="admin"){
            admin(res.length-1);
            }
          break;
   }

  }
  if (flag === true) {
          }
  else {
        alert("Login or Password is incorrect.Or your account is disable");
        document.getElementById("login").style.border='2px solid red';
        document.getElementById("password").style.border='2px solid red';
          }
}


function admin(i){

document.getElementById("adminbox").style.display="inline-block";
  var text="<table><tr><td>Login</td><td>Password</td><td>Email</td></tr>";
      for(;i>=1;i--){
        if(res[i]!=0){
          text+="<tr>"+"<td>"+res[i].login+"</td>"+"<td>"+res[i].password+"</td>"+"<td>"+res[i].email+"</td>"+"<td>"+"<button class=adminbuttons onclick=enableuser("+i+")>enable</button>"+"<td>"+"<button class=adminbuttons onclick=disableuser("+i+")>disable</button>"+"</td>"+"<td>"+"<button class=adminbuttons onclick=deleteuser("+i+")>delete</button>"+"</td>"+"</tr>";
          }
      }


      document.getElementById("currentname1").innerHTML=text;
}

function validate(){
var username1 = document.getElementById('logres');
var password1 = document.getElementById("passwordres");
var repassword1 = document.getElementById("repasswordres");
var email1 = document.getElementById("email");
var correct=/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
var regexname = /^[A-Za-z0-9_-]{3,16}$/;
var checker=false;
if(!username1.value){
 username1.style.border='2px solid red';
 username1.placeholder="Please write login!!!"
return false;
}
else if(regexname.test(username1.value)==false){
 alert('Please write correctly(3-16 characters)');
 return false;
}
if(!password1.value){
 password1.style.border='2px solid red';
return false;
}
else if(!repassword1.value){
 repassword1.style.border='2px solid red';
return false;
}
else if(!email1.value){
 email1.style.border='2px solid red';
return false;
}
else if(password1.value.length<8){
 alert("Password must be at least 8 characters")
 password1.style.border='2px solid red'
 return false;
}
else if(password1.value!=repassword1.value){
alert('Your password does not match');
repassword1.style.border='2px solid red'
return false;
}
else if(correct.test(email1.value)==false){
 alert('Your email is valid');
 return false;
}
for (; i >= 1; i--) {
if (username1.value == res[i].login) {
    checker=true;
    break;
}
}

if (checker===true) {
alert("This login already exists. Choose another");
username1.style.border='2px solid red';
}
else {
return true;
}
}

function allfunc(){
if (validate()===true) {
 logup();
document.getElementById("logindiv").style.display='block';
document.getElementById("logup").style.display='none';
document.getElementById('logres').value='';
document.getElementById('passwordres').value='';
document.getElementById('repasswordres').value='';
document.getElementById('email').value='';
}
}

function logoutfunction() {
  localStorage.setItem("logged",-1);
document.getElementById("registrationform").style.display='block';
document.getElementById("adminbox").style.display = 'none';
  document.getElementById("loginfo2").style.display='none';
  document.getElementById("login").value='';
  document.getElementById("password").value='';
  document.getElementById("login").style.border='none';
  document.getElementById("password").style.border='none';
}

function deleteuser(i) {
res[i]=0;
 localStorage.setItem("accounts",JSON.stringify(res));
}
function enableuser(i) {
res[i].crud=false;
 localStorage.setItem("accounts",JSON.stringify(res));
}
function disableuser(i) {
res[i].crud=true;
 localStorage.setItem("accounts",JSON.stringify(res));
}
