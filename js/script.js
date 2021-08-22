document.getElementById('submit-button').addEventListener('click', function () {
    const email = document.getElementById('user-email');
    const finalEmail = email.value;
    const password = document.getElementById('user-password');
    const finalPassword = password.value;
    if (finalEmail == 'rahmanmoshiur253@gmail.com' && finalPassword == '1234') {
        window.location.href = 'bank.html';
        //console.log('submit button clicked')
    }
})