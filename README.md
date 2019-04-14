# react-native-sandbox
Try react native

- react-native-navigation
  - https://github.com/wix/react-native-navigation
- Native Modules
  - https://facebook.github.io/react-native/docs/native-modules-ios
  - https://facebook.github.io/react-native/docs/native-modules-android
- react-native-image-picker
  - https://github.com/react-native-community/react-native-image-picker
- react-native-image-crop-picker
  - https://github.com/ivpusic/react-native-image-crop-picker
- Sentry
  - https://sentry.io
  - https://github.com/getsentry/react-native-sentry


## Setup

### Homebrew, Nodebrew and Node.js
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Nodebrew and Node.js
```
$ brew install nodebrew
$ echo 'PATH="$HOME/.nodebrew/current/bin:$PATH"' >> ~/.bashrc
$ source ~/.bashrc
$ nodebrew install-binary v10.15.3
$ nodebrew use v10.15.3
```

### Yarn
```
$ brew install yarn
```

### watchman
```
$ brew install watchman
```

### react-native-cli
```
$ npm install -g react-native-cli
```

### Cocoapods
Install cocoapods.

### Xcode
Install xcode

### Android Studio, Android SDK and Platform-Tools
Install Android Studio, Android SDK and Platform-Tool.

```
$ echo 'ANDROID_HOME="<your android adk path>"' >> ~/.bashrc
```


### Project
```
$ git clone git@github.com:tayutaedomo/react-native-sandbox.git
$ cd react-native-sandbox
$ yarn install
$ cd ios
$ pod istall
```

