var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    if (name.length == 0){
        nameError.innerHTML = 'Name is required.';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write your full name';
        return false;
    }
    nameError.innerHTML = 'Valid name';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required.';
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = 'Phone number should be 10 digits.';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please.';
        return false;
    }
    phoneError.innerHTML = 'Valid phone number.';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if(email.length == 0) {
        emailError.innerHTML = 'email is required.';
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Invalid email.';
        return false;
    }
    emailError.innerHTML = 'valid email.';
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please enter all inputs correctly.';
        setTimeout(function(){submitError.style.display = ' none';}, 3000);
        return false;
    }

}