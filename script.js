const lengthSlider = document.getElementById('length');
const lengthDisplay = document.getElementById('length-display');
const passwordBox = document.getElementById('password');
const generateBtn = document.getElementById('generate');
const toggleTheme = document.getElementById('toggle-theme');

const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

function updateSliderBackground() {
  const value = (lengthSlider.value - lengthSlider.min) / (lengthSlider.max - lengthSlider.min) * 100;
  lengthSlider.style.background = `linear-gradient(to right, rgb(20, 185, 20) ${value}%, #ccc ${value}%)`;
}

lengthSlider.addEventListener('input', () => {
  lengthDisplay.textContent = lengthSlider.value;
  updateSliderBackground();
});

generateBtn.addEventListener('click', () => {
  const length = lengthSlider.value;
  let charset = '';
  if (uppercase.checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowercase.checked) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (numbers.checked) charset += '0123456789';
  if (symbols.checked) charset += '!@#$%^&*()_+=-{}[]:;<>,.?/|';

  if (charset === '') {
    passwordBox.value = 'Select options!';
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  passwordBox.value = password;
});

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

updateSliderBackground();
