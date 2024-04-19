import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import { AppRoutesProps } from '../../types/routes';

const Drawer = createDrawerNavigator<AppRoutesProps>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitle: '',
      }}>
      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}
