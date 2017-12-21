/*
	NOTES
	- part of the web speech api
	- if the serviceURI attribute is unset, the API will the browser's own speech recongnition service
*/

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = true;

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

window.action.addEventListener('click', event => {
	if (event.currentTarget.innerText === '✅') {
		recognition.start();
		event.currentTarget.innerText = '❎';
	} else {
		event.currentTarget.innerText = '✅';
		recognition.stop();
	}
});
