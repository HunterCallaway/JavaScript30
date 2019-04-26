let countdown;

function timer(seconds) {
	const now = Date.now();
	const then = now + seconds * 1000;

	setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		//Check to see if it should be stopped.
		if(secondsLeft <= 0) {

		}
		//Display it.
		console.log(secondsLeft);
	}, 1000);
}