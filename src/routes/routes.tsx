import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes } from './drawer/app';
import { DrawerLogin } from './drawer/auth';

export function Routes() {
  const login = false;
  return (
    <NavigationContainer>
      {login ? <DrawerRoutes /> : <DrawerLogin />}
    </NavigationContainer>
  );
}
