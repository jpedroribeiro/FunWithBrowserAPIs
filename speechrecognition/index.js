const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = true;

recognition.start();

recognition.addEventListener('result', event => {
	console.log(event.results);
	output.value = '';

	for (result of event.results) {
		if (!result.isFinal) {
			livefeed.value = result[0].transcript;
			break;
		} else {
			output.value += result[0].transcript + '\n\n';
		}
	}
});
