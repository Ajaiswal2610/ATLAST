
function listusers(role){
    // populate the user details 
    str = ""
    document.getElementById('container').style.display = 'none';
    document.getElementById('container-table').style.display = 'block';

    for (x in localStorage){
        let username = x;
        let userFromLocalStorage = JSON.parse(localStorage.getItem(username));
        if (userFromLocalStorage != null && userFromLocalStorage.role == role){
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