import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import About from '../screens/about';
import Header from '../shared/Header';

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
  <Navigator
    initialRouteName='About'
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
        // height: 60,
      },
      headerTintColor: "#444",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackground: () => <Image source = {require ('../assets/game_bg.png')} style={{height: '100%'}} />
    }}
  >
    <Screen
      name='About'
      component={About}
      options={{
        headerTitle: () => <Header title='About GameZone' />,
      }}
    />
  </Navigator>
);

export default AboutStack;
