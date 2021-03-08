console.log("plugin loaded");

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
