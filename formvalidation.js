function fnameValidate(){
    let first_name=document.getElementById('fname').value
    if(first_name==""){
        displayMsg('firstname is required','fnamemsg','red')
        return false
    }
    else if(first_name.length<4){
        displayMsg('firstname must be more than 3 characters','fnamemsg','red')
        return false;
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('firstname contains only alphabets','fnamemsg','red')
        return false

    }

    else{
        displayMsg('valid firstname','fnamemsg','green')
        return true
    }
}

function lnameValidate(){
    let last_name=document.getElementById('lname').value
    if(last_name==""){
        displayMsg('lastname is required','lnamemsg','red')
        return false
    }
    else if(last_name.length<3){
        displayMsg('lastname must be more than 2 characters','lnamemsg','red')
        return false
    }
    else{
        displayMsg('valid lastname','lnamemsg','green')
        return true
    }
}

function emailValidate(){
    let email=document.getElementById('email').value
    if(email==""){
        displayMsg('email is required','emailmsg','red')
        return false
    }
    
    else if(!email.match(/^([a-z])[a-z0-9\-\_\.]+\@+(([a-z])+\.)+([a-z])+$/)){
        displayMsg('invalid email','emailmsg','red')
        return false

    }

    else{
        displayMsg('valid email','emailmsg','green')
        return true
    }
}

function passValidate(){
    let pass=document.getElementById('pass').value
    if(pass==""){
        displayMsg('password is required','passmsg','red')
        return false
    }
    else if(pass.length<9){
        displayMsg('password must be more than 8 characters','passmsg','red')
        return false
    }
    //?= -> position doesnot matter matches anywhere in string
    //.   = matches single caharacter
    //*   = matches preceding characters one or more times
    else if(!pass.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/)){
        displayMsg('password must contain at least one upeercase and lowercase letter and one numeric value','passmsg','red')
        return false

    }
    else{
        displayMsg('valid password','passmsg','green')
        return true
    }
}




function displayMsg(msg,id,color){
document.getElementById(id).innerHTML=msg
document.getElementById(id).style.color=color



}