import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/Header.js';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
  <Navigator
    initialRouteName='Home'
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
      name='Home'
      component={Home}
      options={{
        headerTitle: () => <Header title='GameZone' />,
      }}
    />
    <Screen
      name='ReviewDetails'
      component={ReviewDetails}
      options={{
        title: "Review Details",
      }}
    />
  </Navigator>
);

export default HomeStack;
