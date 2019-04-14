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

getVideo();