    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var password_confirmation = document.getElementById("password-confirmation");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var region = document.getElementById("region");
    var agreement = document.getElementById("agreement");
    var hasBigLetter   = false;
    var hasSmallLetter = false;
    var hasNumber      = false;
    var hasSpecialCaseLetter = false;
    var username_error = document.getElementById("username_error");
    var password_error = document.getElementById("password_error");
    var gender_error = document.getElementById("gender_error");
    var date_error = document.getElementById("date_error");
    var region_error = document.getElementById("region_error");
    var agreement_error = document.getElementById("agreement_error");

    username.addEventListener("blur", nameVerify, true);
    password.addEventListener("blur", passwordVerify, true);
    male.addEventListener("blur", genderVerify, true);
    female.addEventListener("blur", genderVerify, true);
    region.addEventListener("blur", regionVerify, true);
    agreement.addEventListener("blur", agreementVerify, true);
    //date.addEventListener("blur", dateVerify, true);

    function validateForm(){
        hasBigLetter   = false;
        hasSmallLetter = false;
        hasNumber      = false;
        hasSpecialCaseLetter = false;
        if(username.value == ""){
            username.style.border = "1px solid #E91E63";
            username_error.textContent = "username is required";
            username.focus();
            return false;
        }
        if(password.value == ""){
            password.style.border = "1px solid #E91E63";
            password_error.textContent = "password is required";
            password.focus();
            return false;
        }
        if (password.value.length < 8) {
            password.style.border = "1px solid #E91E63";
            password_error.innerHTML = "Passwords must be at least 8 characters long";
            password.focus();
            return false;
        }
        
        for (var i = 0; i < password.value.length; i++) {
            var charCode = password.value.charCodeAt(i);
            if(charCode > 47 && charCode <= 58)
                hasNumber = true;
            if(charCode > 64 && charCode < 91)
                hasBigLetter = true;
            if(charCode > 96 && charCode < 123)
                hasSmallLetter = true;
            if(charCode > 32 && charCode < 48)
                hasSpecialCaseLetter   = true;
        }
        if(hasBigLetter == false){
            password.style.border = "1px solid #E91E63";
            password_error.textContent = "Your password must contain at least one uppercase letter";
            password.focus();
            return false;
        }
        if (hasSmallLetter == false) {
            password.style.border = "1px solid #E91E63";
            password_error.textContent = "your password must contain at least one lowercase letter";
            password.focus();
            return false;
        }
        if (hasNumber == false) {
            password.style.border = "1px solid #E91E63";
            password_error.textContent = "Your password must contain at least one number digit";
            password.focus();
            return false;
        }
        if (hasSpecialCaseLetter == false) {
            password.style.border = "1px solid #E91E63";
            password_error.textContent = "Your password must contain at least one special character";
            password.focus();
            return false;
        }
        if (password.value != password_confirmation.value ) {
            password.style.border = "1px solid #E91E63";
            password_confirmation.style.border = "1px solid #E91E63";
            password_error.innerHTML = "The two password do not match";
            return false;
        }
        if (male.checked != true && female.checked != true) {
            gender_error.innerHTML = "gender is required";
            return false;
        }
        if (region.value == "") {
            region.style.border = "1px solid #E91E63";
            region_error.textContent = "region is required";
            region.focus();
            return false;
        }
        if (agreement.checked == false) {
            agreement_error.textContent = "Please indicate that you accept the Terms and Conditions";
            return false;
        }
        return true;
    }

    function nameVerify(){
        if (username.value != ""){
            username.style.borderTop = "0";
            username.style.borderLeft = "0";
            username.style.borderRight = "0";
            username.style.borderBottom = "1px solid #999";
            username_error.innerHTML = "";
            return true;
        }
    }

    function passwordVerify(){
        if (password.value == password_confirmation.value ) {
            password.style.borderTop = "0";
            password.style.borderLeft = "0";
            password.style.borderRight = "0";
            password.style.borderBottom = "1px solid #999";
            password_confirmation.style.borderTop = "0";
            password_confirmation.style.borderLeft = "0";
            password_confirmation.style.borderRight = "0";
            password_confirmation.style.borderBottom = "1px solid #999";
            password_error.innerHTML = "";
            return true;
        }
        if (password.value != "" && password.value.length >= 8 && hasNumber == true && hasBigLetter == true &&
         hasSmallLetter == true && hasSpecialCaseLetter == true ){
            password.style.borderTop = "0";
            password.style.borderLeft = "0";
            password.style.borderRight = "0";
            password.style.borderBottom = "1px solid #999";
            password_error.innerHTML = "";
            return true;
        }
        
    }

    function genderVerify(){
        if (male.checked == true || female.checked == true){
            gender_error.innerHTML = "";
            return true;
        }
    }

    function regionVerify(){
        if (region.value != ""){
            region.style.borderTop = "0";
            region.style.borderLeft = "0";
            region.style.borderRight = "0";
            region.style.borderBottom = "1px solid #999";
            region_error.innerHTML = "";
            return true;
        }
    }

    function agreementVerify(){
        if (agreement.checked == true){
            agreement_error.innerHTML = "";
            return true;
        }
    }