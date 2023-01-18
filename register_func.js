







function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
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
    else if (JSON.parse(localStorage.getItem(username.value)!=null)
    ) {
        alert("Username already used");
        username.focus();
        return false;

    }
    else if (gender.value.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false;    
    }    
    else if(!ValidateEmail(email.value)) {    
        email.focus();    
        return false;    
    }       
    else if (role.value== "select role") {    
        alert("Role is required");    
        course.focus();    
        return false;    
    }    
    else{

        var userdetail = {
            'email': email.value,
            'password': passw.value,
            'firstname':fname.value,
            'lastname':lname.value,
            'gender':gender.value,
            'role':role.value

        };
        
        localStorage.setItem(username.value, JSON.stringify(userdetail));
        
        

    alert('Registered successfully')
    window.location.href = '/login.html'
}    
}
