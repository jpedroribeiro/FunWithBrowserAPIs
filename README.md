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
