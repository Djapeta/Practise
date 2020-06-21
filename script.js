const celsiusinput = document.querySelector('.celsius > input');
const farenheitinput = document.querySelector('.farenheit > input');
const kelvinput = document.querySelector('.kelvin > input');

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function celsiusToFarenheitAndKelvin() {
  const cTemp = parseFloat(celsiusinput.value);
  const fTemp = (cTemp * (9/5)) + 32;
  const kTemp = cTemp + 273.15;
  farenheitinput.value = roundNum(fTemp);
  kelvinput.value = roundNum(kTemp);
}

function farenheitToCelsiusAndKelvin() {
  const fTemp = parseFloat(farenheitinput.value);
  const ctemp = (fTemp - 32) * (5/9);
  const kTemp = (fTemp + 459.67) * (5/9);
  celsiusinput.value = roundNum(cTemp);
  kelvinput.value = roundNum(kTemp);
}

function kelvinToCelsiusAndFarenheit() {
  const kTemp = parseFloat(kelvinput.value);
  const ctemp = kTemp - 273.15;
  const fTemp = (9/5) * (kTemp - 273) + 32;
  celsiusinput.value = roundNum(cTemp);
  farenheitinput.value = roundNum(fTemp);
}

function main() {
  celsiusinput.addEventListener('input', celsiusToFarenheitAndKelvin);
  farenheitinput.addEventListener('input', farenheitToCelsiusAndKelvin);
  kelvinput.addEventListener('input', kelvinToCelsiusAndFarenheit);
}

main();
