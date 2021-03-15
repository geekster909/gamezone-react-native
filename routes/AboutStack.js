import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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
