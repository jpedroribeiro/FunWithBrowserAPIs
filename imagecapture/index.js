const liveFeedEl = document.getElementById('livefeed');
const photoEl = document.getElementById('photo');
const fxEl = document.getElementById('fx');
let mediaTrack; // This will host the camera feed stream track for later use

// Get live feed into video element
function liveFeed(mediaStream) {
	mediaTrack = mediaStream.getVideoTracks()[0];
	liveFeedEl.srcObject = mediaStream;
}

function stopFeed(mediaTrack) {
	mediaTrack.stop();
}

// Get snapshot from feed
function takePhoto(mediaTrack) {
	const imageCapture = new ImageCapture(mediaTrack);
	imageCapture
		.grabFrame()
		.then(imageBmp => {
			photoEl.width = imageBmp.width;
			photoEl.height = imageBmp.height;
			photoEl.getContext('2d').drawImage(imageBmp, 0, 0);
		})
		.catch(displayError);
}

// Monitor canvas filter key presses
function monitorFXKeyPress(event) {
	if (event.key === 'Enter') {
		photoEl.getContext('2d').filter = fxEl.value;
		photoEl.getContext('2d').drawImage(photoEl, 0, 0);
	}
}

// Error template
function displayError(err) {
	console.error('error:', err);
}

// Events
liveFeedEl.addEventListener('click', event => {
	if (!mediaTrack || mediaTrack.readyState === 'ended') {
		navigator.mediaDevices
			.getUserMedia({ video: true })
			.then(liveFeed)
			.catch(displayError);
	} else {
		stopFeed(mediaTrack);
	}
});

photoEl.addEventListener('click', () => {
	takePhoto(mediaTrack);
});

fxEl.addEventListener('keypress', monitorFXKeyPress);
