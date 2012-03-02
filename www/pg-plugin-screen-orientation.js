var screenOrientation = function() {}

screenOrientation.prototype.set = function(str, success, fail) {
    PhoneGap.exec(success, fail, "ScreenOrientation", "set", [str]);
};
navigator.screenOrientation = new screenOrientation();
