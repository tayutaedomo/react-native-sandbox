import React from "react";
import {
  View,
  Text
} from "react-native";

export default class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Screen',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Second Screen</Text>
      </View>
    );
  }
}

