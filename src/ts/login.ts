const formLogin = document.getElementById('form-login') as HTMLFormElement;
const email = document.getElementById('typeEmailX') as HTMLInputElement;
const password = document.getElementById('typePasswordX') as HTMLInputElement;



formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    if (email.value === 'elivelton@gmail.com' && password.value === '1234567') {
        window.location.href = '/src/html/home.html';
    }
    else if (email.value != 'elivelton@gmail.com') {
        alert('Talvez o email esteja  esse elivelton@gmail.com');
    }
    else if (password.value != '1234567') {
        alert('Talvez a senha esteja essa 1234567');
    }
});