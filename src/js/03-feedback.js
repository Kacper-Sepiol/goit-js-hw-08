'use strict';

import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

function saveStateForm() {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(fromState));
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

form.addEventListener('input', _.throttle(saveFormState, 500));
window.addEventListener('load', loadStateForm);

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  const formState = {
    email: '',
    message: '',
  };
  console.log('wyslano formularz:', formState);
});
