var screenOrientation = function() {}

screenOrientation.prototype.set = function(str, success, fail) {
    cordova.exec(success, fail, "ScreenOrientation", "set", [str]);
};
navigator.screenOrientation = new screenOrientation();
