document.querySelector('form').addEventListener('submit', async e => {
  e.preventDefault();

  try {
    const email_input = document.querySelector('.email-input').value;
    const password_input = document.querySelector('.password-input').value;

    const response = await fetch(`http://localhost:65535/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: email_input,
        password: password_input,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (err) {
    console.log('Error on Login: ', err);
  }
});
