const ctx = window.outlines.getContext('2d');
const faceDetector = new FaceDetector({
	fastMode: false,
	maxDetectedFaces: 10
});

// Outlines faces, eyes and mouth of an image
function handleFaces(faces) {
	ctx.clearRect(0, 0, window.outlines.width, window.outlines.height);
	for (face of faces) {
		console.log(face);
		// Face
		ctx.fillStyle = 'rgba(0,0,255,0.5)';
		ctx.fillRect(
			face.boundingBox.x,
			face.boundingBox.y,
			face.boundingBox.width,
			face.boundingBox.height
		);
		// Eyes/mouth
		for (landmark of face.landmarks) {
			console.log(landmark);
			ctx.fillStyle = 'rgba(0,255,0,0.5)';
			ctx.fillText(landmark.type, landmark.location.x, landmark.location.y);
		}
	}
}

// Start up live feed
navigator.mediaDevices.getUserMedia({ video: true }).then(mediaStream => {
	window.livefeed.srcObject = mediaStream;
});

// Start capturing faces
function faceDetectorLoop() {
	faceDetector
		.detect(window.livefeed)
		.then(handleFaces)
		.then(() => {
			window.requestAnimationFrame(faceDetectorLoop);
		});
}

window.outlines.addEventListener('click', event => {
	window.requestAnimationFrame(faceDetectorLoop);
});
