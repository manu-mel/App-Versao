import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes, DrawerLogin } from './drawer';

export function Routes() {
  const login = true;
  return (
    <NavigationContainer>
      {login ? <DrawerRoutes /> : <DrawerLogin />}
    </NavigationContainer>
  );
}
