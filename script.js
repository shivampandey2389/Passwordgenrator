const passWord=document.querySelector(".inp");
const length= 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_-=+";
let alChar = upperCase + lowerCase + number + symbol;
let createPassword = () =>{
  let password="";
  // password +=upperCase[Math.floor(Math.random()*upperCase.length)];
  // password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
  // password +=number[Math.floor(Math.random()*number.length)];
  // password +=symbol[Math.floor(Math.random()*symbol.length)];
  while(length>password.length){
    password += alChar[Math.floor(Math.random()*alChar.length)];
  }
  passWord.value = password;
}
let Copy = ()=>{
  passWord.select();
  document.execCommand("copy");
}