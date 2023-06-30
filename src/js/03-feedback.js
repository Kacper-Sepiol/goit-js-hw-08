'use strict';

import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

function saveStateForm() {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

function loadStateForm() {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  } else {
    emailInput.value = '';
    messageInput.value = '';
  }
}

form.addEventListener('input', throttle(saveStateForm, 500));
window.addEventListener('load', loadStateForm);

form.addEventListener('submit', event => {
  event.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  console.log('wyslano formularz:', formState);
});
