let  nameError = document.getElementById("name-error");
let  mobileError = document.getElementById("mobile-error");
let  mailError = document.getElementById("mail-error");
let  messageError = document.getElementById("message-error");
let  submitError = document.getElementById("submit-error");


function validateName() {
    var name = document.getElementById('contact-name').value;
    if(name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]+(\s[A-Za-z]+)?$/)) {
        nameError.innerHTML = "Name must be only letters and enter full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check" style="color: #07b07e;"></i>';
    setTimeout(function() {nameError.innerHTML = "";}, 3000); // Clear error after 3 seconds
    return true;
}

function validateMobile() {
    var mobile = document.getElementById('mobile-name').value;
    if(mobile.length == 0){
        mobileError.innerHTML = "Mobile Number is required";
        return false;
    }
    if(mobile.length != 10){
        mobileError.innerHTML = "Mobile number must be 10 digits";
        return false;
    }
    if(!mobile.match(/^[0-9]{10}$/)){
        mobileError.innerHTML = "Digits only allowed";
        return false;
    }
    mobileError.innerHTML = '<i class="fa-solid fa-check" style="color: #07b07e;"></i>';
    setTimeout(function() {mobileError.innerHTML = "";}, 3000); // Clear error after 3 seconds
    return true;
}

function validateMail() {
    var mail=document.getElementById('mail-name').value;
    var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(mail.length == 0) {
        mailError.innerHTML = "Email is required";
        return false;
    }
    if(!mail.match(pattern)) {
        mailError.innerHTML = "Email invalid";
        return false;
    }
    mailError.innerHTML = '<i class="fa-solid fa-check" style="color: #07b07e;"></i>';
    setTimeout(function() {mailError.innerHTML = "";}, 3000); // Clear error after 3 seconds
    return true;
}

function validateMessage() {
    var message = document.getElementById('message-name').value;
    if(message.length == 0) {
        messageError.innerHTML = "Message is required";
        return false;
    }
    if(message.length < 15) {
        messageError.innerHTML = "Minimum 15 characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-check" style="color: #07b07e;"></i>';
    setTimeout(function() {messageError.innerHTML = "";}, 3000); // Clear error after 3 seconds
    return true;
}

function validateForm() {
    if (!validateName() || !validateMobile() || !validateMail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the errors above";
        setTimeout(function () {
            submitError.style.display = "none";
        }, 3000);
        return false; // Prevent submission
    }
    return true; // Allow PHP submission
}