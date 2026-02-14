// src/navigation/ProfileStack.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileStackParamList } from './types';

import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#ffffff' },
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
          color: '#111827',
        },
        headerTintColor: '#111827',
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: '#f9fafb' },
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />

      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
}
