'use strict';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

emailInput.addEventListener('input', event => {
  console.log(event.value);
});
