let subject = document.getElementsByClassName('subject');
let check = document.getElementById('check');
let del = document.getElementById('del');
let h3 = document.getElementById('h3');


check.addEventListener('click', function() {
    let eng = subject[0].value;
    let maths = subject[1].value;
    let lit = subject[2].value;
    let civic = subject[3].value;
    let total = Number(eng) + Number(maths) + Number(lit) + Number(civic);
    // h3.textContent = 'Your jamb score is ' + (total) + ' Good work';

    if (total=='') {
        alert('ERROR! Input cannot be empty.');
        h3.textContent = '';
    }

    else if (total>=400 || total>=300) {
        alert('You passed.')
         h3.textContent = 'Your JAMB score is ' + (total) + ' you passed.';
    }

    else {
        alert('You failed.')
        h3.textContent = 'Your JAMB score is ' + (total) + ' Try harder next time.';
    }

})

