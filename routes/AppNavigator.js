import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from './AboutStack';
import HomeStack from './HomeStack';

const { Navigator, Screen } = createDrawerNavigator();

const Drawer = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeStack} />
      <Screen name="About" component={AboutStack} />
    </Navigator>
  </NavigationContainer>
);

export default Drawer;
