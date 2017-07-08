var message = "";

self.addEventListener('message', function(e) {
	message = e.data;
	sendTime();
}, false);

function sendTime() {
	setTimeout("sendTime()", 1000);
	postMessage(message + ":" + new Date().toLocaleString());
}
