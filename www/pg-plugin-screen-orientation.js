var screenOrientation = function() {}

screenOrientation.prototype.set = function(str, success, fail) {
	cordova.exec(null, null, "ScreenOrientation", "set", [str]);
};
navigator.screenOrientation = new screenOrientation();
