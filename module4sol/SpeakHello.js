
(function (window) {
	var speakWord = "Hello";
	var helloSpeaker = {
		action: function speak(name) {
	  		console.log(speakWord + " " + name);
		}
	};
	window.helloSpeaker = helloSpeaker;
})(window);
