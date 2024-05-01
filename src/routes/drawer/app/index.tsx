import 'react-native-gesture-handler';
import React from 'react';
import {
  DrawerToggleButton,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Home from '../../../screens/Home';
import { AppRoutesProps } from '../../../types/routes';
import Profile from '../../../screens/Profile';
import Product from '../../../screens/Product';
import Cart from '../../../screens/Cart';

const Drawer = createDrawerNavigator<AppRoutesProps>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: 'right',
        headerLeft: () => undefined,
        headerRight: () => <DrawerToggleButton />,
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          unmountOnBlur: true,
        }}
      />

      <Drawer.Screen
        name="Product"
        component={Product}
        options={{
          title: 'Product',
          headerTitleAlign: 'center',
          unmountOnBlur: true,
        }}
      />

      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
          headerTitleAlign: 'center',
          unmountOnBlur: true,
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'My Profile',
          headerTitleAlign: 'center',
          unmountOnBlur: true,
        }}
      />
    </Drawer.Navigator>
  );
}
