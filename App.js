import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './app/home_screen';
import SecondScreen from './app/second_screen';


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Second: SecondScreen
}, {
  initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);

