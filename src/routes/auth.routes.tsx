import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screen/Home';
import { AppointmentDetails } from '../screen/AppointmentDetails';
import { AppointmentCreate } from '../screen/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />

      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  );
}
