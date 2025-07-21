username = localStorage.getItem('user')
firstname2 = localStorage.getItem('firstname');
secondname2= localStorage.getItem('secondname');
email2=localStorage.getItem('email');
phone2= localStorage.getItem('phone');
password2=localStorage.getItem('password');
gender2=localStorage.getItem('gender');
emailphone = document.getElementById('emailphone')
blank= document.getElementById('blank')
firstpassword=document.getElementById('firstpassword')
message = document.getElementById('message')
let body = document.querySelector('body')
let blue = document.getElementById('blue')
let pink = document.getElementById('pink')
let red = document.getElementById('red')
state=0
num1=0
if(username == null){
   message.classList.add('message')
   message.innerHTML=`
   <p>it looks like you dont have an account!  </p>
   <br>
   <a href='index.html'>Sign In?</a>
   <button onclick='removemessag()'>No Thanks</button>
   `
}
function removemessag(){
    message.classList.add('remove')
}

function emailphoneF(){
    emailphonev = emailphone.value
    if(emailphonev.includes('@' )== false|| emailphonev.includes('.com' ) == false){
        if( isNaN(Number(emailphone.value))) {
        blank.style.color='red'
        blank.innerHTML='Please enter the correct email or phone number'
        state+=1
        num1+=1
        }else{
        blank.innerHTML=''
        state-=num1
        num1=0
        }
    }else{
        blank.innerHTML=''
        state-=num1
        num1=0
    }
}

function check(){
    emailphone4 =email2.replace('"' , '')
    emailphone5 =emailphone4.replace('"' , '')
    phone3 =phone2.replace('+' , '')
    phone4 =phone3.replace('"' , '')
    phone5 =phone4.replace('"' , '')

    password4 =password2.replace('"' , '')
    password5 =password4.replace('"' , '')
    if(emailphone.value != emailphone5 ){
        if (emailphone.value != phone5) {
           blank.innerHTML="Please enter the correct email or phone number(no '+' required)" 
        }else{
           if(firstpassword.value != password5){
            blank.innerHTML='Please enter the correct pasword'
        }else{
            blank.style.color='green'
            blank.innerHTML='correct inputs'
        } 
        }
        
    }else{
        if(firstpassword.value != password5){
            blank.innerHTML='Please enter the correct pasword'
        }else{
            blank.style.color='green'
            blank.innerHTML='correct inputs'
        }
    }
} 

if (gender2 == '"Male"'){
  body.classList.add('male')
  body.classList.remove('female')
}else if(gender2 == '"Female"'){
    body.classList.add('female')
  body.classList.remove('male')
}else{
    body.classList.remove('male')
  body.classList.remove('female')
}
 blue.onclick =function(){
  body.classList.add('male')
  body.classList.remove('female')
}
pink.onclick= 
 function(){
  body.classList.add('female')
  body.classList.remove('male')
 }

 red.onclick= function(){
     body.classList.remove('male')
     body.classList.remove('female')
 }
  document.getElementById('toggleFirst').onclick = function() {
    let input = document.getElementById('firstpassword');
    input.type = input.type === 'password' ? 'text' : 'password';
};