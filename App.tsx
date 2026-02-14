import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './src/navigation/MainTabs';
import { BookingProvider } from './src/context/BookingContext';

export default function App() {
  return (
    <BookingProvider>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </BookingProvider>
  );
}
