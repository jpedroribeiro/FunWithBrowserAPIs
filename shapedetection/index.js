const ctx = window.outlines.getContext('2d');
const faceDetector = new FaceDetector({
	fastMode: false,
	maxDetectedFaces: 10
});

// Outlines faces, eyes and mouth of an image
function handleFaces(faces) {
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

// Events
outlines.addEventListener('click', event => {
	faceDetector.detect(poster).then(handleFaces);
});

// I need canvas to have the same dimensions as the image so the outlines can match
function adjustCanvasDimensions(canvas, width, height) {
	canvas.width = width;
	canvas.height = height;
}

adjustCanvasDimensions(
	window.outlines,
	window.poster.width,
	window.poster.height
);
