document.getElementById('tipCalculator').addEventListener('input', function() {
    const billTotal = parseFloat(document.getElementById('billTotal').value);
    const tipPercentage = parseInt(document.getElementById('tipPercentage').value, 10);
    const tipAmount = billTotal * (tipPercentage / 100);
    const totalWithTip = billTotal + tipAmount;

    document.getElementById('tipValue').textContent = tipPercentage + '%';
    document.getElementById('tipAmount').value = tipAmount.toFixed(2);
    document.getElementById('totalWithTip').value = totalWithTip.toFixed(2);
});

// Input validation for bill total
document.getElementById('billTotal').addEventListener('input', function(e) {
    const billTotalValue = e.target.value;
    if (!/^\d*\.?\d*$/.test(billTotalValue)) {
        alert('Please enter a valid number');
        e.target.value = billTotalValue.slice(0, -1);
    }
});
