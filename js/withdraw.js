// Step-1: add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get the withdraw amount from the withdraw input field
    // 2-a: for input field use .value to the value inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;

    // step-7: 
    withdrawField.value = '';

    if (isNaN(parseFloat(newWithdrawAmount))) {
        alert('Please provide a valid number');
        return;
    }

    // step-3: get the current withdraw total
    // for non-input(element other then input, textarea) use innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;



    // Step-5: Get balance current total
    const balenceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balenceTotalElement.innerText;



    if (parseFloat(newWithdrawAmount) > previousBalanceTotal) {
        alert('you have no sufficient balance in your account');
        return;
    }

    // Spet-4: Add numbers to set the total withdraw
    const currentWithdrawTotal = (parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawTotal)).toFixed(2);
    // set the withdraw total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6: // step-6: Calculate current total balance after withdraw
    const currentBalanceTotal = (parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount)).toFixed(2);
    balenceTotalElement.innerText = currentBalanceTotal;


})