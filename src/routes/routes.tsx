import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes } from './drawer/app';
import { DrawerLogin } from './drawer/auth';
import { useAuth } from '../providers/AuthProvider';

export function Routes() {
  const { authData } = useAuth();

  return (
    <NavigationContainer>
      {authData ? <DrawerRoutes /> : <DrawerLogin />}
    </NavigationContainer>
  );
}
