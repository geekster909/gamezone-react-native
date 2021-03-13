import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 60,
        },
        headerTintColor: "#444",
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          title: "GameZone",
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
  </NavigationContainer>
);

export default AppNavigator;
