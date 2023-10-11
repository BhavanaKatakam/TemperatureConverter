const celsiusInput = document.getElementById('cel');
const fahrenheitOutput = document.getElementById('fah');
const convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener('click', () => {
  const celValue = parseFloat(celsiusInput.value);
  if (!isNaN(celValue)) {
    const fahValue = celValue * 9/5 + 32;
    fahrenheitOutput.textContent = `${fahValue.toFixed(2)} °F`;
  } else {
    fahrenheitOutput.textContent = 'Invalid input';
  }
});