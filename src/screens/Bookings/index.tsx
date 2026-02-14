import React, { useMemo, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
  ScrollView,
  Animated, Pressable, Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBooking } from '../../context/BookingContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';



export default function BookingsScreen() {
  const { bookings, removeBooking } = useBooking();
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();


  const totalPrice = useMemo(() => {
    return bookings.reduce((sum, item) => sum + item.price, 0);
  }, [bookings]);

  const confirmDelete = (id: string) => {
    Alert.alert(
      'Cancel Booking',
      `Are you sure you want to remove ${bookings.find(b => b.id === id)?.title || 'this booking'}?`,
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => removeBooking(id),
        },
      ]
    );
  };

  const groupedBookings = useMemo(() => {
    const groups: Record<string, typeof bookings> = {};

    bookings.forEach(item => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });

    return groups;
  }, [bookings]);

  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.safe}>
      {bookings.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No bookings yet</Text>
          <Text style={styles.emptyText}>
            Book a service to see it listed here.
          </Text>
        </View>
      ) : (
        <>
          {/* Overall Total */}
          <View style={styles.totalCard}>
            <Text style={styles.totalLabel}>Total Bookings Amount</Text>
            <Text style={styles.totalPrice}>
              ₹ {bookings.reduce((sum, item) => sum + item.price, 0)}
            </Text>
          </View>

          <ScrollView contentContainerStyle={styles.list}>
            {Object.keys(groupedBookings).map(category => {
              const categoryItems = groupedBookings[category];
              const categoryTotal = categoryItems.reduce(
                (sum, item) => sum + item.price,
                0
              );

              return (
                <View key={category} style={styles.categorySection}>
                  {/* Category Header */}
                  <View style={styles.categoryHeader}>
                    <Text style={styles.categoryTitle}>{category}</Text>
                    <Text style={styles.categoryTotal}>
                      ₹ {categoryTotal}
                    </Text>
                  </View>

                  {/* Services Under Category */}
                  {categoryItems.map((item) => {
                    const scale = new Animated.Value(1);

                    const handlePressIn = () => {
                      Animated.spring(scale, {
                        toValue: 0.97,
                        useNativeDriver: true,
                      }).start();
                    };

                    const handlePressOut = () => {
                      Animated.spring(scale, {
                        toValue: 1,
                        useNativeDriver: true,
                      }).start();
                    };

                    return (
                      <Animated.View
                        key={item.id}
                        style={{ transform: [{ scale }] }}
                      >
                        <Pressable
                          android_ripple={{ color: '#e5e7eb' }}
                          onPressIn={handlePressIn}
                          onPressOut={handlePressOut}
                          onPress={() =>
                            navigation.navigate('ServiceDetails', {
                              serviceId: item.id,
                            })
                          }
                          style={styles.card}
                        >
                          <View style={{ flex: 1 }}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>₹ {item.price}</Text>
                          </View>

                          <View style={styles.rightSection}>
                        

                            {/* Delete Button */}
                            <Pressable
                              onPress={(e) => {
                                e.stopPropagation();
                                confirmDelete(item.id);
                              }}
                              hitSlop={10}
                            >
                              <Ionicons
                                name="trash-outline"
                                size={22}
                                color="#e53935"
                              />
                            </Pressable>
                          </View>
                        </Pressable>
                      </Animated.View>
                    );
                  })}

                </View>
              );
            })}
          </ScrollView>
        </>
      )}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  list: {
    padding: 20,
    paddingBottom: 40,
  },

  totalCard: {
    backgroundColor: '#111827',
    margin: 20,
    padding: 20,
    borderRadius: 16,
  },
  totalLabel: {
    color: '#9ca3af',
    fontSize: 13,
  },
  totalPrice: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 6,
  },

  cardLeft: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  category: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 8,
    color: '#111827',
  },
  deleteButton: {
    justifyContent: 'center',
    paddingLeft: 12,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  emptyText: {
    marginTop: 6,
    fontSize: 14,
    color: '#6b7280',
  },
  categorySection: {
    marginBottom: 28,
  },

  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  categoryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  categoryTotal: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 2,
  },


});

