function playSound(event) {
		const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
		//Stops the function from running.
		if(!audio) return;
		//Restarts the audio.
		audio.currentTime = 0;
		audio.play();
		key.classList.add('playing');
}

function removeTransition(event) {
	//Skip it if it is not a transform.
	if(event.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);