import React from 'react';
import {
  View,
  Button
} from "react-native";
import { Sentry, SentrySeverity } from 'react-native-sentry';


//
// Refer: https://medium.com/@tsugitta/sentry-on-react-native-1364c3fb407a
//
export default class SentryScreen extends React.Component {
  static navigationOptions = {
    title: 'Sentry Screen',
  };

  on_exception_throw() {
    throw new Error('Manually exception throwing.');
  }

  on_exception_capture() {
    const error = new Error('New Error: Sentry.captureException');

    Sentry.captureException(error, {
      tags: {
        scene: 'SentryScreen',
        value: 1
      }
    });
  }

  on_message_capture() {
    const message = 'Message: Sentry.captureMessage';

    Sentry.captureMessage(message, {
      level: SentrySeverity.Warning
    });
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title={'Throw exception'} onPress={() => this.on_exception_throw()} />

        <Button title={'Capture exception'} onPress={() => this.on_exception_capture()} />

        <Button title={'Capture message'} onPress={() => this.on_message_capture()} />
      </View>
    );
  }
}

