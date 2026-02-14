// src/navigation/HomeStack.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from './types';

import HomeScreen from '../screens/Home';
import ServiceListScreen from '../screens/ServiceList';
import ServiceDetailScreen from '../screens/ServiceDetail';
import BookingsScreen from '../screens/Bookings';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4c918c',
        },
        headerShadowVisible: false, // clean modern look (removes bottom border)
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
          color: '#ffffff',
        },
        headerTintColor: '#ffffff',
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: '#f9fafb', // soft background for screens
        },
      }}
    >
    <Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{
    title: 'QuickServe',
    headerTitleStyle: {
      fontFamily: 'sans-serif-medium', // Android standard for a clean look
      fontWeight: 'bold',
      fontSize: 22,
      color: '#ffffff', // Dark slate/charcoal
    },
  }}
/>

      <Stack.Screen
        name="ServiceList"
        component={ServiceListScreen}
        options={({ route }) => ({
          title: route.params.category,
        })}
      />

      <Stack.Screen
        name="ServiceDetails"
        component={ServiceDetailScreen}
        options={{
          title: 'Service Details',
        }}
      />
      <Stack.Screen
  name="Bookings"
  component={BookingsScreen}
  options={{ title: 'My Bookings' }}
/>

    </Stack.Navigator>
  );
}
