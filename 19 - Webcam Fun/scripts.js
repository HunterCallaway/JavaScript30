const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
	navigator.mediaDevices.getUserMedia({ video: true, audio: false })
		.then(localMediaStream => {
			console.log(localMediaStream);
			//The following line contains deprecated code.
			//video.src = window.URL.createObjectURL(localMediaStream);
			video.srcObject = localMediaStream;
			video.play();
		})
		.catch(err => {
			console.log('Please allow use of your webcam on this site.', err);
		})
}

function paintToCanvas() {
	const width = video.videoWidth;
	const height = video.videoHeight;
	console.log(width, height);
	canvas.height = height;
	canvas.width = width;

	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);

		//Take out the pixels.
		let pixels = ctx.getImageData(0, 0, width, height);

		//Try different things with them.
		pixels = redEffect(pixels);

		//Put them back.
		ctx.putImageData(pixels, 0, 0);

	}, 16);
}

function takePhoto() {
	//Play the sound.
	snap.currentTime = 0;
	snap.play();

	//Take the data out of the image.
	const data = canvas.toDataURL('image/jpeg');
	console.log(data);
	const link = document.createElement('a');
	link.href = data;
	link.setAttribute('download', 'handsome');
	//link.textContent = 'Download the image';
	link.innerHTML = `<img src="${data}" alt="Photo of yourself" />`
	strip.insertBefore(link, strip.firstChild);

}

function redEffect(pixels) {
	for(let i = 0; i < pixels.data.length; i = i +4) {
		pixels.data[i + 0] = pixels.data[i + 0] + 100; //red
		pixels.data[i + 1] = pixels.data[i + 1] - 50; //green
		pixels .data[i + 2] = pixels.data[i + 2] * 0.5; //blue
	}
	return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);