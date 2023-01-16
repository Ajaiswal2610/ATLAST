

function validate() {    
    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;    
    var username = document.reg_form.username;  
    var passw = document.reg_form.password;  
    var gender = document.reg_form.gender;    
    var email = document.reg_form.email;    
    var role = document.reg_form.role;    

    if (fname.value.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    
    else if (lname.value.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }    
    else if (passw.value.length <=7){
        alert("Password is too Small")
        passw.focus();
        return false;
    }
    else if (username.value.length <= 0) {    
        alert("Address is required");    
        address.focus();    
        return false;    
    }    
    else if (gender.value.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false;    
    }    
    else if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }       
    else if (role.value == "select Role") {    
        alert("Role is required");    
        course.focus();    
        return false;    
    }    
    else{
        alert('Registered successfully')
        window.location.href = '/login.html'
    }  
}    