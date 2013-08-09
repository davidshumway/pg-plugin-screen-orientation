# Updated to use with Cordova 2.5

# Screen Orientation PhoneGap Plugin for Android

This PhoneGap Plugin for Android can lock/unlock the screen orientation.

## How to install

1. Add com/tsukurusha/phonegap/plugins/ScreenOrientation.java to your src folder.

2. Add the following line to res/xml/plugins.xml.
<code>&lt;plugin name="ScreenOrientation" value="com.tsukurusha.phonegap.plugins.ScreenOrientation" /&gt;</code>

3. Add pg-plugin-screen-orientation.js to your assets/www folder and import it into your html file like:
<code>&lt;script type="text/javascript" charset="utf-8" src="pg-plugin-screen-orientation.js"&gt;&lt;/script&gt;</code>

4. The javascript interface is as follows:

 - To lock the screen to Landscape:
<code>navigator.screenOrientation.set('landscape');</code>

 - To lock the screen to Portrait:
<code>navigator.screenOrientation.set('portrait');</code>

 - To unlock:
<code>navigator.screenOrientation.set('fullSensor');</code>

 - You can use other orientation parameters defined in http://developer.android.com/reference/android/R.attr.html#screenOrientation
