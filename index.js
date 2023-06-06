let userName = document.getElementById('username');
let password = document.getElementById('password');
let loginBtn = document.getElementById('loginBtn');
let aTag = document.getElementById('aTag');


loginBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    let newUser = userName.value;
    let newPasswrd = password.value;
    let userPass = newUser + newPasswrd;

    let errors = []

    if(newUser === '')
    errors = [...errors, 'Enter user name']

    if(newPasswrd === '')
    errors = [...errors, 'Enter password']

    console.log(errors)

    if(errors.length > 0) {
        alert(errors.join(', '))
    } else {
        const redirect = '/home/jamb-score/user.html'
       
        window.location.href = redirect
    }

    
    // if (userPass ==Number()) {
    //     alert('Please fill the input');
    //     aTag.removeAttribute('href');
    // }


    // else if (userPass==='') {
    //     // alert('Youre now logged in');
    //     aTag.removeAttribute('disabled', 'disabled');
    // }

    // else {
    //     // prompt('which year did you write your Waec?')
    //     alert('Youre now logged in');
        
    //     // aTag.setAttribute('disabled');
    // }

})