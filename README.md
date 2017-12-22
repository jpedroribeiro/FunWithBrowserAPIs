# FunWithBrowserAPIs

Mini projects to test out some interesting browser APIs: Shape Detection, Image Capture, Media Streams, Generic Sensors and Speech Recognition

## Image Capture / Media Stream 📸

The [image capture application](imagecapture/) opens the camera feed and generate a downloadable image. Canvas filters can be applied to it for some simple image manipulation.

## Shape Detection 👥

This is [an example](shapedetection/) of how the Face Detection API works, highlighting face, eyes and mouth of an image. There is a [second example](imagecapture/trek/) using a different image, and also [another version](imagecapture/live/) using the live camera feed, that mixes Image Capture and Face Detection into one.

## Speech Recognition 📝

In [this demo](speechrecognition/) we show how to use SpeedRecognition interface to simulate a dictation feature and an extra button that performs a search on the VoucherCodes.co.uk website.

## Speech Synthesis 🗣

This is a [text to speech example](speechsynthesis/), still making use of the Web Speech API through the Speech Synthesis interface.

## Generic Sensors 📱

Due to the limited capabilities of my personal iPhone, I couldn't test this API properly or create a demo for it.

The generic sensors API is very new (Chrome 63+) and contains an interesting set of interfaces to play with: Accelerometer, Linear Acceleration Sensor, Gyroscope, Absolute Orientation Sensor and RelativeOrientationSensor. Some are only available under feature flags.

For more details on this, head over to the [Generic Sensor API playground
](https://intel.github.io/generic-sensor-demos/).

### Reading Material & External Sources

https://developers.google.com/web/updates/2016/12/imagecapture
https://webrtc.github.io/samples/src/content/getusermedia/canvas/
https://deanhume.com/Home/BlogPost/shape-detection-api--detecting-barcodes--faces-and-text-inside-an-image/10158
https://developers.google.com/web/updates/2017/09/sensors-for-the-web
https://intel.github.io/generic-sensor-demos/
https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
https://www.youtube.com/watch?v=0mJC0A72Fnw
https://www.smashingmagazine.com/2014/12/enhancing-ux-with-the-web-speech-api/#speech-recognition
https://svignara.github.io/experiments/2017/03/25/web-speech-api/
https://wicg.github.io/shape-detection-api/#face-detection
