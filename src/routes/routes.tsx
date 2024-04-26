import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes } from './drawer/app';
import { DrawerLogin } from './drawer/auth';

export function Routes() {
  const login = true;
  return (
    <NavigationContainer>
      {login ? <DrawerRoutes /> : <DrawerLogin />}
    </NavigationContainer>
  );
}
