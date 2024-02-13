function calculateLoan() {
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseFloat(document.getElementById('term').value);
    const interest = parseFloat(document.getElementById('interest').value);

    const monthlyInterest = (interest / 100) / 12;
    const monthlyPayments = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -term));

    const resultElement = document.getElementById('monthlyPayment');
    resultElement.textContent = `Monthly Payment: $${monthlyPayments.toFixed(2)}`;
}