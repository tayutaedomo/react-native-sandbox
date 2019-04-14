import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './app/home_screen';
import SecondScreen from './app/second_screen';
import ImagePickerScreen from './app/image_picker_screen';
import ImageCropPickerScreen from './app/image_crop_picker_screen';
import AsyncStoreScreen from './app/async_store_screen';


const AppNavigator = createStackNavigator({
  Home:             HomeScreen,
  Second:           SecondScreen,
  ImagePicker:      ImagePickerScreen,
  ImageCropPicker:  ImageCropPickerScreen,
  AsyncStore:       AsyncStoreScreen
}, {
  initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);

