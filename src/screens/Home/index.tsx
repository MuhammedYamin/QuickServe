import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { services } from '../../data/services';


type NavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;

const categories = [
  'Plumbing', 'Cleaning', 'AC Repair', 'Painting',
  'Electrician', 'Appliances', 'Handyman', 'Pest Control',
  'Gadget Repair', 'Beauty & Salon', 'Massage', 'Gardening',
  'Carpentry', 'Car Wash', 'Laundry', 'Packers & Movers',
  'Home Security', 'Tailoring', 'Fitness Trainer', 'Event Decor'
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  const handlePress = (category: string) => {
    navigation.navigate('ServiceList', { category });
  };

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return []; // Hide results if search is empty

    return services.filter((service) => {
      const itemData = `${service.title} ${service.category} ${service.description}`.toLowerCase();
      const textData = searchQuery.toLowerCase();
      return itemData.includes(textData);
    });
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.safe}>

      {/* --- Header Section --- */}
      <View style={styles.headerContainer}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.greeting}>Good Morning!</Text>
            <Text style={styles.userName}>Tony Stark</Text>
          </View>
          {/* Profile Avatar */}
          <TouchableOpacity style={styles.profileContainer}
          onPress={() => (navigation as any).navigate('ProfileStack')}
          >
            <View style={styles.avatar}>
              <Image
                source={require('../../assets/image/avat.jpg')} // Adjust path to your file
                style={styles.avatar}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* --- Search Bar Section --- */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#9ca3af" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search services..."
          placeholderTextColor="#9ca3af"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color="#9ca3af" />
          </TouchableOpacity>
        )}
       
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {searchQuery.length > 0 ? (
          /* --- Search Results View --- */
          <View style={styles.resultsContainer}>
            <Text style={styles.sectionTitle}>Search Results</Text>
            {filteredServices.length > 0 ? (
              filteredServices.map(service => (
                <Pressable
                  key={service.id}
                  style={styles.searchResultItem}
                  onPress={() => navigation.navigate('ServiceDetails', { serviceId: service.id })}
                >
                  <View>
                    <Text style={styles.resultTitle}>{service.title}</Text>
                    <Text style={styles.resultCategory}>{service.category}</Text>
                  </View>
                  <Text style={styles.resultPrice}>₹{service.price}</Text>
                </Pressable>
              ))
            ) : (
              <Text style={styles.emptyText}>No services found for "{searchQuery}"</Text>
            )}
          </View>
        ) : (
          /* --- Original Category Grid --- */
          <>
            <View style={styles.grid}>
              {categories.map(category => (
                <Pressable
                  key={category}
                  style={({ pressed }) => [
                    styles.card,
                    pressed && styles.cardPressed,
                  ]}
                  onPress={() => handlePress(category)}
                >
                  {/* You can add your Ionicons here later */}
                  <Text style={styles.cardText}>{category}</Text>
                </Pressable>
              ))}
            </View>
          </>
        )}
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
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    marginTop: 20,
    marginBottom: 24,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#6b7280',
  },
  searchBar: {
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 28,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  cardText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    margin: 10,
    paddingBottom: 20,
    backgroundColor: '#ffffff',

  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    color: '#6b7280',
    fontWeight: '500',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4c918c',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchText: {
    flex: 1,
    color: '#030303',
    fontSize: 15,
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginLeft: 5,
  },
  profileContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
    height: '100%',
    paddingVertical: 0,
  },
  resultsContainer: {
    flex: 1,
  },
  searchResultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  resultTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  resultCategory: {
    fontSize: 12,
    color: '#4c918c',
    marginTop: 2,
  },
  resultPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  emptyText: {
    textAlign: 'center',
    color: '#9ca3af',
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 15,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the face fills the circle
  },
});
