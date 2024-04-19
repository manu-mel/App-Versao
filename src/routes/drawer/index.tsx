import 'react-native-gesture-handler';
import React from 'react';
import {
  DrawerToggleButton,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import { AppRoutesProps } from '../../types/routes';
import Profile from '../../screens/Profile';

const Drawer = createDrawerNavigator<AppRoutesProps>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitle: '',
        drawerPosition: 'right',
        headerLeft: () => undefined,
        headerRight: () => <DrawerToggleButton />,
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
          unmountOnBlur: true,
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Minha Conta',
          unmountOnBlur: true,
        }}
      />

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
