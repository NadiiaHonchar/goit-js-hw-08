
import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function(timeupdate) {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
    });    
    
    const onPlay = throttle(function(timeupdate) {    
    localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate));
},500);

player.on('play', onPlay);

const setTime = JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds;

player.setCurrentTime(30.456).then(function(setTime) {   
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':            
            break;
            default:           
            break;
        }
});

