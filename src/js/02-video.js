import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const THROTTLE_DELAY_MS = 1000;
const KEY_CURRENT_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(currentTime => {
      localStorage.setItem(KEY_CURRENT_TIME, currentTime);
    });
  }, THROTTLE_DELAY_MS)
);
const savedTime = localStorage.getItem(KEY_CURRENT_TIME);

if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
