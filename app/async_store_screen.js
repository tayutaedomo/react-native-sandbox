import React from 'react';
import {
  View,
  TextInput,
  Button,
  Alert
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export default class AsyncStoreScreen extends React.Component {
  static navigationOptions = {
    title: 'AsyncStore',
  };

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    AsyncStorage.getItem('@storage_Key').then(text => {
      console.log('AsyncStorage.getItem then', text);
      this.setState({text});

    }).catch(err => {
      console.error(err);
    });
  }

  on_save() {
    console.log('on_save', this.state.text);

    AsyncStorage.setItem('@storage_Key', this.state.text).then((res) => {
      console.log('AsyncStorage.setItem then', res);
      alert('Saved');
    }).catch((err) => {
      console.error(err);
    });
  }

  on_all_clear() {
    AsyncStorage.clear().then(res => {
      console.log('AsyncStorage.clear then', res);
      alert('Cleared');
    }).catch(err => {
      console.error(err);
    });
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          placeholder={'Text form'}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
        />

        <Button title={'Save'} onPress={() => this.on_save()} />

        <Button title={'Clear ALL'} onPress={() => this.on_all_clear()} />
      </View>
    );
  }
}

