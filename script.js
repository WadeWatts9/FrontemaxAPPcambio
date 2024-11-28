const API_KEY = '1d7528fe79a2a9d015e0ea04'; // Tu clave de API
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

document.getElementById('convert').addEventListener('click', async () => {
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;
  const amount = document.getElementById('amount').value;

  if (!amount || amount <= 0) {
    alert('Por favor, ingresa una cantidad válida.');
    return;
  }

  try {
    const response = await fetch(`${API_URL}${fromCurrency}`);
    const data = await response.json();

    if (data.result === 'success') {
      const rate = data.conversion_rates[toCurrency];
      const result = (amount * rate).toFixed(2);
      document.getElementById('result').innerText = `Resultado: ${result} ${toCurrency}`;
    } else {
      alert('Error al obtener los datos de la API.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('No se pudo completar la conversión. Intenta más tarde.');
  }
});
