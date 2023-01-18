let abhishek = {
    'email': 'abhishek@gmail.com',
    'password': 'abhishek',
    'firstname':'Abhishek',
    'lastname':'Jaiswal',
    'gender':'Male',
    'role':'Admin'
};
let aman = {
    'email': 'aman@gmail.com',
    'password': 'aman',
    'firstname':'Aman',
    'lastname':'Yadav',
    'gender':'Male',
    'role':'Sales'
}
let ashwin = {
    'email': 'ashwin@gmail.com',
    'password': 'ashwin',
    'firstname':'Ashwin',
    'lastname':'Yadav',
    'gender':'Female',
    'role':'Operation'
}

let admin = {
    'email': 'admin@yahoo.com',
    'password': 'admin',
    'firstname':'admin',
    'lastname':'admin',
    'gender':'Female',
    'role':'Admin'
}
let mohini = {
    'email': 'mohin@gmail.com',
    'password': 'mohini',
    'firstname':'Mohini',
    'lastname':'Yadav',
    'gender':'Female',
    'role':'Operation'
}
let shivani = {
    'email': 'shiv@gmail.com',
    'password': 'shivani',
    'firstname':'Shivani',
    'lastname':'Yadav',
    'gender':'Female',
    'role':'Admin'
}
localStorage.setItem('admin', JSON.stringify(admin));
localStorage.setItem('mohini', JSON.stringify(mohini));
localStorage.setItem('ashwin', JSON.stringify(ashwin));
localStorage.setItem('aman', JSON.stringify(aman));
localStorage.setItem('abhishek', JSON.stringify(abhishek));
localStorage.setItem('shivani',JSON.stringify(shivani))




function listusers(role){
    // populate the user details 
    str = ""
    document.getElementById('container').style.display = 'none';
    document.getElementById('container-table').style.display = 'block';
    document.getElementsByClassName('para')[0].innerHTML = `List of ${role} Users`;
    let srn = 1;
    for (x in localStorage){
        let username = x;
        let userFromLocalStorage = JSON.parse(localStorage.getItem(username));
        if (userFromLocalStorage != null && userFromLocalStorage.role == role){
            str += `
        <tr>
        <td>${srn}</td>
        <td>${userFromLocalStorage.firstname}</td>
        <td>${userFromLocalStorage.lastname}</td> 
        <td>${username}</td>
        <td>${userFromLocalStorage.email}</td>
        <td>${userFromLocalStorage.role}</td>
        <td>${userFromLocalStorage.gender}</td>
        </tr>`; 
        tableBody.innerHTML = str;
        srn = srn+1;

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