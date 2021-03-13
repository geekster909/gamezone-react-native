import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name='Home' component={Home} />
      <Screen name='ReviewDetails' component={ReviewDetails} />
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
