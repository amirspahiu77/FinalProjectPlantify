import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function RootNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeTabs">
      <Drawer.Screen 
        name="HomeTabs" 
        component={TabNavigator} 
        options={{ title: 'Plantify' }} 
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
      />
    </Drawer.Navigator>
  );
}