import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '../screen/SignIn';

import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
