var nameerror =document.getElementById("name-error ");
var phoneerror =document.getElementById("phone-error");
var emailerror =document.getElementById("email-error");
var messageerror =document.getElementById("message-error");
var Submiterror =document.getElementById("Submit-error");


function validateName(){
    var name =document.getElementById("contact-name").value;
    if(name.length ==0){
        nameerror.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML = 'Write full name';
        return false;
    }
    nameerror.innerHTML= '<i class="ri-checkbox-circle-line"></i>';
    return true;
}

function validatePhone(){
    var phone =document.getElementById("contact-phone").value;
    if(phone.length ==0){
        phoneerror.innerHTML="phone no is required";
        return false;
    }if(phone.length!==10){
        phoneerror.innerHTML="Phone no should be 10 digit";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML="only digit please";
        return false;
    }
    phoneerror.innerHTML='<i class="ri-checkbox-circle-line"></i>';
    return true;
}


function validateEmail(){
    var email =document.getElementById("contact-email").value;
    if(email.length ==0){
        emailerror.innerHTML="Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML="Email Invalid";
        return false;
    }
    emailerror.innerHTML ='<i class="ri-checkbox-circle-line"></i>';
    return true;

}



function validateMessage(){
    var message =document.getElementById("contact-message").value;  
    var required =30;
    var left =required-message.length;

    if(left>0){
        messageerror.innerHTML= left +'more characters required';
        return false;
    }
    messageerror.innerHTML ='<i class="ri-checkbox-circle-line"></i>';
    return true;
}


function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail()  || !validateMessage() ){
        Submiterror.style.display='block';
        Submiterror.innerHTML ="please fix error to submit ";
        setTimeout(function(){Submiterror.style.display='none';},3000);
        return false;
    }
}