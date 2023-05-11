import throttle from 'lodash.throttle';

window.addEventListener('load', function () {
  let formState = localStorage.getItem('feedback-form-state');
  if (formState) {
    formState = JSON.parse(formState);
    document.querySelector('input[name="email"]').value = formState.email;
    document.querySelector('textarea[name="message"]').value =
      formState.message;
  }
});

const inputs = document.querySelectorAll(
  '.feedback-form input, .feedback-form textarea'
);
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener(
    'input',
    throttle(function () {
      const formState = {
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formState));
    }, 500)
  );
}

document
  .querySelector('.feedback-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    localStorage.removeItem('feedback-form-state');

    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';

    console.log({ email: email, message: message });
  });
