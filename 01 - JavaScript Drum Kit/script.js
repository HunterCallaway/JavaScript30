window.addEventListener("keydown", function(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	//Stops the function from running.
	if(!audio) return;
	//Restarts the audio.
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
});