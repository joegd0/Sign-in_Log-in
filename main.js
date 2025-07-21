let firstname =document.getElementById('firstname')
let secondname =document.getElementById('secondname')
let email =document.getElementById('email')
let phone =document.getElementById('phone')
let blank= document.getElementById('blank')
let firstpassword= document.getElementById('firstpassword')
let secondpassword= document.getElementById('secondpassword')
let button = document.getElementById('signbutton')
let radio = document.getElementsByName('gender')
let body = document.querySelector('body')
let all=document.getElementsByClassName('all')
let message = document.getElementById('message')
let male = document.getElementById('male')
let female = document.getElementById('female')
let blue = document.getElementById('blue')
let pink = document.getElementById('pink')
let red = document.getElementById('red')
let state =0
let num1 =0
let num2 =0
let num3 =0
let num4 =0
let num5 =0
let num6 =0
let num7 =0
let num8 =0
let cheked =''
let info
let info1
let fullphone

if (localStorage.user != null){
    info = JSON.parse(localStorage.user)
    
   message.classList.add('message')
   message.innerHTML=`
   <p>it looks like you already have an account!  </p>
   <br>
   <div>
   <a href='logindex.html'>Log In?</a>
   <button onclick='removemessag()'>No Thanks</button>
  </div>
   `


}else{
    info=[]
}
function removemessag(){
    message.classList.add('remove')
}
    
button.onclick = function(){
    
    if(state == 0){
        for(let i =0; i<2;i++){
            if(radio[i].checked){
                cheked= radio[i].value
            }
        }
        if(cheked != ''){
             info ={
                firstname:firstname.value,
                secondname:secondname.value,
                email:email.value,
                phone:fullphone,
                password:firstpassword.value,
                gender:cheked
            }
            info1 = [info]
            localStorage.setItem('user' , JSON.stringify(info))
            localStorage.setItem('firstname' , JSON.stringify(info.firstname))
            localStorage.setItem('secondname' , JSON.stringify(info.secondname))
            localStorage.setItem('email' , JSON.stringify(info.email))
            localStorage.setItem('phone' , JSON.stringify(info.phone))
            localStorage.setItem('password' , JSON.stringify(info.password))
            localStorage.setItem('gender' , JSON.stringify(info.gender))
            blank.style.color="green"
            blank.innerHTML="Signed in succsefuly"
            window.location.href ="logindex.html"

        }else{
            blank.innerHTML='PLease choose your gender'
        }

}
    else{
        blank.innerHTML='PLease enter valid inputs'
    }
    

}

function  firstnameF(){
    

    if( isNaN(Number(firstname.value)) === false || firstname.value=='' || firstname.value==' '){
        blank.style.color='red'
        blank.innerHTML+='*Your name Must start with an string'
       firstname.value=''
       state += 1
       num1 +=1

       
       
    }else{
        blank.innerHTML='';
        state = state-num1;
        num1 =0

}
}

function  secondnameF(){
   

    if( isNaN(Number(secondname.value)) === false){
        blank.style.color='red'
        blank.innerHTML+='*Your name Must start with an string'
       secondname.value=''
       state += 1
       num2 +=1
       
       
    }else{
        blank.innerHTML=''
        state = state - num2
        num2 = 0
}
}

function emailF(){
    
    if(email.value.includes('@')== false || email.value.includes('.com')==false){
        blank.style.color='red'
        blank.innerHTML+='*Please Enter a valid email'
        state += 1
       num3 +=1
    }
    else{
        blank.innerHTML=''
        state = state - num3
        num3 = 0
}
}

function phoneF(){
    let countryCode = document.getElementById('countrycode').value;
    let phoneNumber = document.getElementById('phone').value;
    let fullNumber = countryCode + phoneNumber;
    fullphone = fullNumber;
    if(isNaN(Number(phone.value))){
        blank.style.color='red'
        blank.innerHTML='*Phone number must be only in numbers'
        phone.value = ''
        state += 1
       num4 +=1

    }else{
        blank.innerHTML=''
        state = state - num4
        num4 = 0
    }
}

function phoneF2(){
    blankm = phone.value
    if(blankm.toString().length < 7 || blankm.toString().length > 11  || isNaN(Number(phone.value))){
        blank.style.color='red'
        blank.innerHTML += '   *Your phone number must be more than 7 number and more than 11 numbers'
        state += 1
       num5 +=1
}else{
        blank.innerHTML=''
        state = state - num5
        num5 = 0
    }
}

function firstpasswordF(){
    
    firstlength =firstpassword.value
    if( firstlength.length < 8  ){
        blank.style.color='red'
        blank.innerHTML='   *Your passwors must contain more than 8 letters'
        state += 1
       num6 +=1
        
    }else{
        blank.innerHTML=''
        state = state - num6
        num6 = 0
    }
    let shaw
    let shwi
    for(let i=0 ; i < firstlength.length; i++ ){
        if ( isNaN(Number(firstlength[i])) === false){
            shaw = true
        }
        if (isNaN(Number(firstlength[i]))) {
                shwi = true
            }
    }
    if(shaw != true || shwi!= true){
        blank.style.color='red'
        blank.innerHTML+=' *Your password must contain srtrings and numbers  '
        state += 1
       num7 +=1
    }else{
        blank.innerHTML=''
        state = state - num7
        num7= 0
    }
}

function secondpasswordF(){
    
    if(firstpassword.value != secondpassword.value){
        blank.style.color='red'
        blank.innerHTML='   *Please enter the same password'
        state += 1
       num8 +=1
    }else{
        blank.innerHTML=''
        state = state - num8
        num8 = 0
    }
}


firstnameF()
secondnameF()
emailF()
phoneF()
phoneF2()
firstpasswordF()
secondpasswordF()
blank.innerHTML=''

male.onclick =function(){
  body.classList.add('male')
  body.classList.remove('female')
}
blue.onclick =function(){
  body.classList.add('male')
  body.classList.remove('female')
}


female.onclick= 
 function(){
  body.classList.add('female')
  body.classList.remove('male')
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

document.getElementById('toggleSecond').onclick = function() {
    let input = document.getElementById('secondpassword');
    input.type = input.type === 'password' ? 'text' : 'password';
};
