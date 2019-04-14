import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import ImagePicker from 'react-native-image-crop-picker';

export default class ImageCropPickerScreen extends Component {
  static navigationOptions = {
    title: 'Image Crop Picker',
  };

  constructor(props) {
    super(props);

    this.state = {
      uri: null
    };
  }

  open_single() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);

      this.setState({ uri: image.sourceURL });

    }).catch(err => {
      console.log(err);
    });
  }

  open_multiple() {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);

      this.setState({ uri: images[0].sourceURL });

    }).catch(err => {
      console.log(err);
    });
  }

  open_video_only() {
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      console.log(video);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {
          this.state.uri && <Image source={{uri: this.state.uri}} style={styles.image} />
        }
        <TouchableOpacity onPress={() => this.open_single()}>
          <Text>Open Single</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.open_multiple()}>
          <Text>Open Multiple</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.open_video_only()}>
          <Text>Open Video Only</Text>
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

