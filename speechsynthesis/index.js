// Setup voices
function populateVoiceList() {
	window.speechSynthesis.getVoices().forEach(voice => {
		let voiceOption = document.createElement('option');
		voiceOption.textContent = `${voice.name} / ${voice.lang}`;
		voiceOption.value = voice.voiceURI;
		window.voicesList.appendChild(voiceOption);
	});
}

voicesList.addEventListener('click', () => {
	if (!voicesList.textContent) {
		populateVoiceList();
	}
});

// Speak it
play.addEventListener('click', event => {
	const utter = new SpeechSynthesisUtterance(input.value);
	utter.voice = window.speechSynthesis.getVoices()[voicesList.selectedIndex];
	// more settigs could be added here
	window.speechSynthesis.speak(utter);
});
