'use strict';


$(document).ready(function() {
	document.getElementById('editBtn').addEventListener("click",function() {
		chrome.tabs.query({currentWindow: true, active: true},function(tabArray) {
			chrome.tabs.sendMessage(tabArray[0].id, "edit");
		});
	});
	document.getElementById('saveBtn').addEventListener("click",function() {
		chrome.tabs.query({currentWindow: true, active: true},function(tabArray) {
			chrome.tabs.sendMessage(tabArray[0].id, "save");
		});
	});
});