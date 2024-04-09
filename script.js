const loginForm = document.querySelector('.form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const enteredUsername = usernameInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  if (enteredUsername === 'admin' && enteredPassword === 'password') {
    window.location.href = 'auth.html';
  } else {
    window.location.href = 'no-auth.html';
  }
});