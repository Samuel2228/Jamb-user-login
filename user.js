let userName = document.getElementById('username');
let password = document.getElementById('password');
let loginBtn = document.getElementById('loginBtn');
let aTag = document.getElementById('aTag');


loginBtn.addEventListener('click', ()=> {
    let newUser = userName.value;
    let newPasswrd = password.value;
    let userPass = newUser + newPasswrd;

    
    if (userPass ==Number()) {
        alert('Please fill the input');
        aTag.removeAttribute('href');
    }


    else if (userPass==='') {
        // alert('Youre now logged in');
        aTag.removeAttribute('disabled', 'disabled');
        // aTag.setAttribute('href');
    }

    else {
        // prompt('which year did you write your Waec?')
        alert('Youre now logged in');
        
        // aTag.setAttribute('disabled');
    }

})