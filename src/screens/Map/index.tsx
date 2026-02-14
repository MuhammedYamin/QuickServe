import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Service available near your location</Text>

        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Loading...</Text>
        </View>

        <Text style={styles.description}>
          Coming Soon: Interactive map with real-time service locations...
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  mapPlaceholder: {
    height: 300,
    backgroundColor: '#e5e7eb',
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    color: '#6b7280',
  },
  description: {
    marginTop: 24,
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
});
