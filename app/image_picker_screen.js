import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import ImagePicker from 'react-native-image-picker';

export default class ImagePickerScreen extends Component {
  static navigationOptions = {
    title: 'Image Picker',
  };

  constructor(props) {
    super(props);

    this.state = {
      uri: null
    };
  }

  open_image_picker() {
    ImagePicker.showImagePicker({}, response => {
      console.log(response);

      if (response.didCancel) {
        console.log('User cancelled image picker');

      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);

      // } else if (response.customButton) {
      //   console.log('User tapped custom button: ', response.customButton);

      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState(source);
      }
    });
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {
          this.state.uri && <Image source={{uri: this.state.uri}} style={styles.image} />
        }
        <TouchableOpacity onPress={() => this.open_image_picker()}>
          <Text>Open Image Picker</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#EEE'
  }
});

