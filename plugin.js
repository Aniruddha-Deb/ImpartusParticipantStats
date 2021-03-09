console.log("Loaded extension");
console.log(window.location.href);
if (window.location.href.startsWith("https://a.impartus.com/vc/#/ttid")) {
	window.addEventListener('hashchange', function() {
		var config = { attributes: true };
		var attendees = $("div[imus-attendee-list]")[0];
		var participants = $("div[class=i-vc-right-panel-tab-header]")[0].lastElementChild;
		
		var callback = function(mutationsList) {
			var numParticipants = attendees.childElementCount - 2;
			participants.innerText = "Participants(" + numParticipants + ")";
			console.log('Updated participants');
		};
		
		var observer = new MutationObserver(callback);
		observer.observe(attendees, config);
	}, false);
}	
/*
// Chrome content script matcher does not seem to play well with # in URL's, hmm..
if (window.location.href.startsWith("https://a.impartus.com/vc/#/in/ttid")) {

	var config = { attributes: true };
	var attendees = $("div[imus-attendee-list]")[0];
	var participants = $("div[class=i-vc-right-panel-tab-header]")[0].lastElementChild;
	
	var callback = function(mutationsList) {
		var numParticipants = attendees.childElementCount - 2;
		participants.innerText = "Participants(" + numParticipants + ")";
		console.log('Updated participants');
	};
	
	var observer = new MutationObserver(callback);
	observer.observe(attendees, config);
}*/
