var setAudioMedia = function() {
    $('#audio-player').jPlayer('setMedia', {
        mp3: 'https://archive.org/download/audio_poetry_90_2006/prettyhowtown.mp3'
    }).jPlayer('play');
}

var pauseAudio = function() {
    $('#audio-player').jPlayer('pause');
}

$(document).ready(function() {
    $('#audio-player').jPlayer({
        supplied: 'mp3',
        swfPath: 'js/swf'
    });

    $('.begin').on('click', setAudioMedia);
    $('.pause').on('click', pauseAudio);
});