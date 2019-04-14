import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './app/home_screen';
import SecondScreen from './app/second_screen';
import ImagePicker from './app/image_picker_screen';
import ImageCropPicker from './app/image_crop_picker_screen';


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Second: SecondScreen,
  ImagePicker: ImagePicker,
  ImageCropPicker: ImageCropPicker
}, {
  initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);

