import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';

const form = document.querySelector('form');

let formData = {};

window.addEventListener('load', function () {
  try {
    let formState = localStorage.getItem(KEY_STORAGE);
    if (formState) {
      formData = JSON.parse(formState);
      Object.entries(formData).forEach(([key, value]) => {
        form.elements[key].value = value;
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

form.addEventListener(
  'input',
  throttle(function (evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
  }, 500)
);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  localStorage.removeItem(KEY_STORAGE);

  evt.target.reset();

  console.log(formData);
  formData = {};
});
