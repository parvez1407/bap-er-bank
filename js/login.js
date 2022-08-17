// step-1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step-3: get password inside the password input field
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: Do not verify email password on the client side
    // Step-4: Verify Email and Password and check whether valid user or not
    if (email === 'nahid@gmail.com' && password === '123456789') {
        window.location.href = 'bank.html';
    } else {
        alert('Toke ami tejjo shontan korlm, tui password vule gasos')
    }
})