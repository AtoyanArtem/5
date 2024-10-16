document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const resultDiv = document.getElementById('result');
  
    const prices = {
      1: 100,
      2: 200,
      3: 300,
    };
  
    const calculateCost = (e) => {
      e.preventDefault();
  
      const quantity = quantityInput.value;
      const productId = productSelect.value;
      const price = prices[productId];
  
      if (!quantity || isNaN(quantity)) {
        alert('Некорректное значение количества');
        return;
      }
  
      const cost = quantity * price;
      resultDiv.innerHTML = `Стоимость заказа: ${cost} руб.`;
    };
  
    const form = document.querySelector('form');
    form.addEventListener('submit', calculateCost);
  });
  