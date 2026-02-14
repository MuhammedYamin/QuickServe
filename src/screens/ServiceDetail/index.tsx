import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  ToastAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../navigation/types';
import { Service, services } from '../../data/services';
import { useBooking } from '../../context/BookingContext';
import { useNavigation } from '@react-navigation/native';


type RouteProps = RouteProp<HomeStackParamList, 'ServiceDetails'>;

type Props = {
  route: RouteProps;
};

export default function ServiceDetailScreen({ route }: Props) {
  const { serviceId } = route.params;
  const { bookings,  addBooking } = useBooking();
  const navigation = useNavigation<any>();


  const service = useMemo(
    () => services.find(item => item.id === serviceId),
    [serviceId]
  );

const isBooked = bookings.some(b => b.id === serviceId);

 const showToast = (message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert(message);
  }
};





  const handleBooking = (service: Service) => {
     Alert.alert(
    "Confirm Booking",
    `Do you want to book ${service.title}?`,
        [
      { text: "Cancel", style: "cancel" },
      {
        text: "Confirm",
        onPress: () => {
          const success = addBooking(service);

          if (!success) {
            showToast("You have already booked this service.");
            return;
          }

          showToast("Your booking has been confirmed.");
        }
      }
    ]
  );
}




  if (!service) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Text style={styles.errorText}>Service not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Title */}
        <Text style={styles.title}>{service.title}</Text>

        {/* Category Badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{service.category}</Text>
        </View>

        {/* Price Card */}
        <View style={styles.priceCard}>
          <Text style={styles.priceLabel}>Starting From</Text>
          <Text style={styles.price}>₹ {service.price}</Text>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About this service</Text>
          <Text style={styles.description}>
            {service.description}
          </Text>
        </View>

        {/* Features Section (Static for now) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What’s Included</Text>
          <Text style={styles.feature}>• Professional technician</Text>
          <Text style={styles.feature}>• Quality tools & materials</Text>
          <Text style={styles.feature}>• 30-day service warranty</Text>
        </View>

        {/* CTA Button */}
     <TouchableOpacity
  activeOpacity={0.8}
  onPress={() => handleBooking(service)}
  disabled={isBooked}
  style={[
    styles.button,
    isBooked && styles.disabledButton
  ]}
>
  <Text
    style={[
      styles.buttonText,
      isBooked && styles.disabledText
    ]}
  >
    {isBooked ? "Already Booked" : "Book Service"}
  </Text>
</TouchableOpacity>




      </ScrollView>
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
    paddingBottom: 40,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 14,
    color: '#6b7280',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#374151',
  },
  priceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },
  priceLabel: {
    fontSize: 13,
    color: '#6b7280',
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginTop: 4,
  },
  section: {
    marginTop: 28,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4b5563',
  },
  feature: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 6,
  },
 
button: {
  marginTop: 32,
  backgroundColor: '#111827', // original black
  paddingVertical: 16,
  borderRadius: 14,
  alignItems: 'center',
},

disabledButton: {
  backgroundColor: '#d1d5db', // soft gray
},
buttonText: {
  color: "#FFFFFF",
  fontWeight: "600",
  fontSize: 14,
},

disabledText: {
  color: "#6b7280",
},


});

