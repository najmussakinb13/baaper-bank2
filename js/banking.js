function getInputValue () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';
    return depositAmount;

    

}


document.getElementById('deposit-button').addEventListener
('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue();
// get curent deposit
    const depositTotal = document.getElementById('deposit-total')
    ;
    const depositTotalText = depositTotal.innerText;
    const previusDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previusDepositTotal + depositAmount;


    //update deposit 
    const  balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusbalanceTotal = parseFloat(balanceTotalText);  
    balanceTotal.innerText = previusbalanceTotal + depositAmount; 
    
    
});

//handle withdrw button 
document.getElementById('withdrw-button').addEventListener
('click', function(){
  const withdrwInput = document.getElementById('withdrw-input')
  ;
  const withdrwAmountText = withdrwInput.value;
  const withdrwAmount = parseFloat(withdrwAmountText);
  

  //update withdrw 
  const withdrwTotal = document.getElementById('withdrw-total');
  const previusWithdrwTotalText = withdrwTotal.innerText;
  const previusWithdrwTotal = parseFloat(previusWithdrwTotalText);
  withdrwTotal.innerText = previusWithdrwTotal + withdrwAmount;

  //update withdrw balance total 
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previusbalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previusbalanceTotal - withdrwAmount;


    withdrwInput.value = '';
});
