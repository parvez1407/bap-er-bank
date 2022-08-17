// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field
    // 2-a: for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    // step-7: Clear the deposit field
    depositField.value = '';

    if (isNaN(parseFloat(newDepositAmount))) {
        alert('Please provide a valid number');
        return;
    }

    // step-3: get the current deposit total
    // for non-input(element other then input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;

    // Spet-4: Add numbers to set the total deposit
    const currentDepositTotal = (parseFloat(previousDepositTotal) + parseFloat(newDepositAmount)).toFixed(2);
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: Get balance current total
    const balenceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balenceTotalElement.innerText;

    // step-6: Calculate current total balance
    const currentBalanceTotal = (parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount)).toFixed(2);
    // set the Balance total
    balenceTotalElement.innerText = currentBalanceTotal;





})