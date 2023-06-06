let userName = document.getElementById('username');
let password = document.getElementById('password');
let loginBtn = document.getElementById('loginBtn');
let aTag = document.getElementById('aTag');


loginBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    let newUser = userName.value;
    let newPasswrd = password.value;
    let userPass = newUser + newPasswrd;

    let errors = [];

    if(newUser === '')
    errors = [...errors, 'Enter user name'];

    if(newPasswrd === '')
    errors = [...errors, 'Enter password'];

    console.log(errors);

    if(errors.length > 0) {
        alert(errors.join(', '));
    } else {
        const redirect = './home/jamb-score/user.html';
       
        window.location.href = redirect;
    }
})