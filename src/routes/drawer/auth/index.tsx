import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppRoutesProps } from '../../../types/routes';
import Login from '../../../screens/Login';

const Drawer = createDrawerNavigator<AppRoutesProps>();

export function DrawerLogin() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Entrar',
          unmountOnBlur: true,
        }}
      />
    </Drawer.Navigator>
  );
}
