'use strict';

import Vimeo from '@vimeo/player';

const video = document.querySelector('#vimeo-player');

const player = new Vimeo(video);

player.on('play', function () {
  console.log('video jest odtwarzane');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', event => {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

document.addEventListener('DOMContentLoaded', () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});

player.on(
  'timeupdate',
  throttle(event => {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);
