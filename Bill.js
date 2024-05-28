
function Bill() {
    let customerName = document.getElementById('customerName').value;
    let currentMonth = document.getElementById('currentMonth').value;
    let units = parseFloat(document.getElementById('units').value);
    let chargesPerUnit = parseFloat(document.getElementById('chargesPerUnit').value);

    let Amount = (units * chargesPerUnit).toFixed(2);
    let latefees = (Amount * 0.05).toFixed(2);
    let totalAmount = (parseFloat(Amount) + parseFloat(latefees)).toFixed(2);





//     console.log(`customerName ===> ${customerName} currentMonth ===> ${currentMonth} 
//     units ===>${units} chargesPerUnit ===> ${chargesPerUnit}  Amount ===> ${Amount}
//     latefess ===> ${latefees} totalAmount ===> ${totalAmount}`);


//    console.log('customerName ===>' + customerName);
//    console.log('current Month ===>' + currentMonth);
//    console.log('units ===>' + units);
//    console.log('chargesPerUnit ===>' + chargesPerUnit);
//    console.log('Amount ===>' + Amount);
//    console.log('latefees ===>' + latefees);
//    console.log('totalAmount ===>' + totalAmount);





    document.getElementById('showCustomerName').innerText = customerName;
    document.getElementById('showCustomerName').style.color ='blue'

    document.getElementById('showCurrentMonth').innerText = currentMonth;
    document.getElementById('showCurrentMonth').style.color ='blue'


    document.getElementById('showUnits').innerText = units.toFixed(2);
    document.getElementById('showUnits').style.color ='blue'


    document.getElementById('showChargesPerUnit').innerText = chargesPerUnit.toFixed(2);
    document.getElementById('showChargesPerUnit').style.color ='blue'


    document.getElementById('showAmount').innerText = Amount;
    document.getElementById('showAmount').style.color ='blue'


    document.getElementById('showLatefess').innerText = latefees;
    document.getElementById('showLatefess').style.color ='blue'


    document.getElementById('showtotalAmount').innerText = totalAmount;
    document.getElementById('showtotalAmount').style.color ='blue'


    document.getElementById('Output').style.display = 'block';
}

document.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        Bill();
    }
});
