import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screen/SignIn';
import { Home } from '../screen/Home';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  );
}
