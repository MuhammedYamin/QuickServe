// src/navigation/MainTabs.tsx

import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';
import MapStack from './MapStack';
import BookingsStack from './BookingsStack';
import ProfileStack from './ProfileStack';
import { Keyboard } from 'react-native';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabs() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
  const showSub = Keyboard.addListener('keyboardDidShow', () => {
    setKeyboardVisible(true);
  });

  const hideSub = Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardVisible(false);
  });

  return () => {
    showSub.remove();
    hideSub.remove();
  };
}, []);


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
         tabBarHideOnKeyboard: true, 
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
        },
        tabBarActiveTintColor: '#111827',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ title: '', tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} /> }}
      />

      <Tab.Screen
        name="MapStack"
        component={MapStack}
        options={{ title: '', tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'map' : 'map-outline'} size={size} color={color} /> }}
      />

      <Tab.Screen
        name="BookingsStack"
        component={BookingsStack}
        options={{ title: '', tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'calendar' : 'calendar-outline'} size={size} color={color} /> }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{ title: '', tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
}
