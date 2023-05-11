import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const THROTTLE_DELAY_MS = 1000;

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(currentTime => {
      localStorage.setItem('videoplayer-current-time', currentTime);
    });
  }, THROTTLE_DELAY_MS)
);
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
