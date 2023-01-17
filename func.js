document.getElementById('container-table').style.display = 'none';


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
    else if (gender.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false;    
    }    
    else if (email.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }       
    else if (role== "select Role") {    
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

function listusers(role){
    // populate the user details 
    str = ""
    document.getElementById('container').style.display = 'none';
    document.getElementById('container-table').style.display = 'block';

    for (x in localStorage){
        let username = x;
        let userFromLocalStorage = JSON.parse(localStorage.getItem(username));
        if (userFromLocalStorage.role == role){
            str += `
        <tr>
        <td>${userFromLocalStorage.firstname}</td>
        <td>${userFromLocalStorage.lastname}</td> 
        <td>${username}</td>
        <td>${userFromLocalStorage.email}</td>
        <td>${userFromLocalStorage.role}</td>
        <td>${userFromLocalStorage.gender}</td>
        </tr>`; 
        tableBody.innerHTML = str;
        }
        

    }
}

//checking
function check(){
    console.warn('called')
    var username = document.getElementById("username").value; // username of user you want to log in as
    var userFromLocalStorage = JSON.parse(localStorage.getItem(username));
    if(!userFromLocalStorage){
        alert('user doesnt exist');
        return;
    }
    
    var password = document.getElementById("password").value;
    
    if (userFromLocalStorage.password !== password){
        alert('wrong password');
        return;
    }
    
    alert(`logged in as ${userFromLocalStorage.role} successfully`);
    listusers(userFromLocalStorage.role)
    

    
    
};

login_button  = document.getElementById('login-button')
login_button.addEventListener('click',check)