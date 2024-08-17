const amountElement = document.querySelector('#amount');
const firstCurrencyOptionElement = document.querySelector('#firstCurrencyOption');
const secondCurrencyOptionElement = document.querySelector('#secondCurrencyOption');
const resultElement = document.querySelector('#result');

runEventListeners();

function runEventListeners() {
  amountElement.addEventListener('input', exchance);
  secondCurrencyOptionElement.addEventListener('change', exchance);
  firstCurrencyOptionElement.addEventListener('change', exchance);
}

function exchance() {
  const amount = Number(amountElement.value.trim());
  const firstCurrency = firstCurrencyOptionElement.value;
  const secondCurrency = secondCurrencyOptionElement.value;
  

  fetch(`https://api.exchangerate-api.com/v4/latest/${firstCurrency}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[secondCurrency];
      resultElement.value = (amount * rate).toFixed(2);
    });
    
}
