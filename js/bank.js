document.getElementById('deposit-button').addEventListener('click', function () {
    //take data from input field
    const depositInput = document.getElementById('deposit-input');
    const depositInputValueText = depositInput.value;

    if (depositInputValueText != '') {
        const depositInputValue = parseFloat(depositInputValueText);
        //select total deposite balance
        const depositBalance = document.getElementById('deposit-balance');
        const initialdepositBalanceText = depositBalance.innerText;
        const initialdepositBalance = parseFloat(initialdepositBalanceText);

        //total deposit balance
        const totalDeposit = depositInputValue + initialdepositBalance;
        //initialdepositBalanceText = totalDeposit;
        depositBalance.innerText = totalDeposit;
        //console.log(totalDeposit);

        //total balance 
        const balance = document.getElementById('total-balance');
        const balanceText = balance.innerText;
        const balanceAmount = parseFloat(balanceText);

        // update total balance
        const totalBalance = depositInputValue + balanceAmount;
        balance.innerText = totalBalance;
        //clear deposite input field
        depositInput.value = '';
    }
    if (depositInputValueText == '') {
        const error = document.getElementById('error');
        error.removeAttribute('hidden');
        error.innerText = '* Please Fill Deposite Filed First';
    } else {
        const error = document.getElementById('error');
        error.setAttribute('hidden', true);
        error.innerText = '';
    }


});

document.getElementById('withdrow-button').addEventListener('click', function () {
    // teke input form withdrow input field
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowInputText = withdrowInput.value;


    if (withdrowInputText != '') {
        const withdrowInputAmount = parseFloat(withdrowInputText);
        //take current withdrow amaount

        const withdrowBalance = document.getElementById('withdrow-balance');
        const withdrowBalanceText = withdrowBalance.innerText;
        const withdrowAmount = parseFloat(withdrowBalanceText);

        //calculate total withdrow amaount

        const totalWithdrow = withdrowInputAmount + withdrowAmount;
        withdrowBalance.innerText = totalWithdrow;

        ///substract from total balance
        const balance = document.getElementById('total-balance');
        const balanceText = balance.innerText;
        const balanceAmount = parseFloat(balanceText);

        const totalBalanceAmount = balanceAmount - withdrowInputAmount;
        balance.innerText = totalBalanceAmount;


        //clear withdrow field
        withdrowInput.value = '';
    }
    if (withdrowInputText == '') {
        const error = document.getElementById('error');
        error.removeAttribute('hidden');
        error.innerText = '* Please Fill Withdrow Filed First';
    } else {
        const error = document.getElementById('error');
        error.setAttribute('hidden', true);
        error.innerText = '';
    }
})