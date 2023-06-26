'use strict';

import Vimeo from '@vimeo/player';

const video = document.querySelector('#vimeo-player');

const player = new Vimeo.Player(video);

player.on('play', function () {
  console.log('video jest odtwarzane');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
