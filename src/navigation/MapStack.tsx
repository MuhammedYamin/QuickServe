// src/navigation/MapStack.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MapStackParamList } from './types';

import MapScreen from '../screens/Map';

const Stack = createNativeStackNavigator<MapStackParamList>();

export default function MapStack() {
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
        animation: 'fade',
        contentStyle: { backgroundColor: '#f9fafb' },
      }}
    >
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Nearby Services',
        }}
      />
    </Stack.Navigator>
  );
}
