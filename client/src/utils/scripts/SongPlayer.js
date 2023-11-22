var buttonPlayPause = document.querySelector('main .plot .wrapper .disc-cover .icons button');
var icon = buttonPlayPause.querySelector('i');
var barsContainer = document.querySelector('.player-bars');

var audio = document.querySelector('main .plot .wrapper .audio audio');
audio.volume = 0.2;

var audioIsPlaying = false;

for (var i = 0; i < 150; i++) {
	var bar = document.createElement('div');
	bar.classList.add('bar');
	barsContainer.appendChild(bar);
}

var bars = document.querySelectorAll('.bar');

bars.forEach(function (bar, index) {
	bar.style.animation = `ocilation 1s infinite alternate ${index * (Math.random() * 0.05)}s`;
	bar.style.animationPlayState = 'paused';
});

buttonPlayPause.addEventListener('click', togglePlayPause);

audio.addEventListener('play', () => {
	if (!audioIsPlaying) togglePlayPause();
});

audio.addEventListener('pause', () => {
	if (audioIsPlaying) togglePlayPause();
});

function togglePlayPause() {
	audioIsPlaying ? pauseAudio() : playAudio();
	audioIsPlaying = !audioIsPlaying;
}

function playAudio() {
	audio.play();
	icon.classList.remove('bi-play');
	icon.classList.add('bi-pause');
	bars.forEach(function (bar) {
		bar.style.animationPlayState = 'running';
	});
}

function pauseAudio() {
	audio.pause();
	icon.classList.remove('bi-pause');
	icon.classList.add('bi-play');
	bars.forEach(function (bar) {
		bar.style.animationPlayState = 'paused';
	});
}
