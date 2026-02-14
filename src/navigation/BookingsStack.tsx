// src/navigation/BookingsStack.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingsStackParamList } from './types';

import BookingsScreen from '../screens/Bookings';

const Stack = createNativeStackNavigator<BookingsStackParamList>();

export default function BookingsStack() {
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
        name="Bookings"
        component={BookingsScreen}
        options={{
          title: 'Your Bookings',
        }}
      />
    </Stack.Navigator>
  );
}
