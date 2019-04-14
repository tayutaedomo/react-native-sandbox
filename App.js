import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './app/home_screen';
import SecondScreen from './app/second_screen';
import ImagePickerScreen from './app/image_picker_screen';
import ImageCropPickerScreen from './app/image_crop_picker_screen';
import AsyncStoreScreen from './app/async_store_screen';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://fd47ff240150482fb18fda0e957e679b@sentry.io/1438574').install();



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

