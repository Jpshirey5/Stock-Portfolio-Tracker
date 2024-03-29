

// const loginForm = document.getElementById('login-form');
// const loginButton = document.getElementById('login-button');

// loginButton.addEventListener('click', async (event) => {
//   event.preventDefault();
//   const formData = new FormData(loginForm);
//   const email = formData.get('email');
//   const password = formData.get('password');
//   const response = await fetch('/login', {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   const data = await response.json();
//   if (response.ok) {
//     // redirect to home page or display success message
//     console.log(data.message);
//   } else {
//     // display error message
//     console.error(data.message);
//   }
// });

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
      const response = await fetch('/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(email, password);
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .getElementById('login-button')
    .addEventListener('click', loginFormHandler);
  
  document
    .getElementById('register')
    .addEventListener('click', signupFormHandler);
  