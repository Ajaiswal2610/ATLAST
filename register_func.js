







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
    var fname = document.reg_form.fname.value;    
    var lname = document.reg_form.lname.value;    
    var username = document.reg_form.username.value;  
    var passw = document.reg_form.password.value;  
    var gender = document.reg_form.gender.value;    
    var email = document.reg_form.email.value;    
    var role = document.reg_form.role.value;    

    if (fname.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    
    else if (lname.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }    
    else if (passw.length <=7){
        alert("Password is too Small")
        passw.focus();
        return false;
    }
    else if (username.length <= 0) {    
        alert("Address is required");    
        address.focus();    
        return false;    
    }    
    else if (JSON.parse(localStorage.getItem(username)!=null)
    ) {
        alert("Username already used");
        username.focus();
        return false;

    }
    else if (gender.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false;    
    }    
    else if(!ValidateEmail(email)) {    
        email.focus();    
        return false;    
    }       
    else if (role== "select role") {    
        alert("Role is required");    
        course.focus();    
        return false;    
    }    
    else{

        var userdetail = {
            'email': email,
            'password': passw,
            'firstname':fname,
            'lastname':lname,
            'gender':gender,
            'role':role

        };
        
        localStorage.setItem(username, JSON.stringify(userdetail));
        
        

    alert('Registered successfully')
    window.location.href = '/login.html'
}    
}
