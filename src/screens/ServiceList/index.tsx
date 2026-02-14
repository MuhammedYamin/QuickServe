import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';
import { services } from '../../data/services';

type RouteProps = RouteProp<HomeStackParamList, 'ServiceList'>;
type NavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'ServiceList'
>;

type Props = {
  route: RouteProps;
};

export default function ServiceListScreen({ route }: Props) {
  const navigation = useNavigation<NavigationProp>();
  const { category } = route.params;

// Filter services by selected category OR show all if category is 'All'
  const filteredServices = useMemo(() => {
    if (!category || category === 'All') {
      return services;
    }
    return services.filter(service => service.category === category);
  }, [category]);

  const renderItem = ({ item }: any) => (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() =>
        navigation.navigate('ServiceDetails', {
          serviceId: item.id,
        })
      }
    >
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.footer}>
          <Text style={styles.price}>₹ {item.price}</Text>
          <Text style={styles.viewDetails}>View Details</Text>
        </View>
      </View>
    </Pressable>
  );

  if (filteredServices.length === 0) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No services available for {category}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={filteredServices}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        // ADD THIS:
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>
              {category === 'All' ? 'All Services' : `${category} Services`}
            </Text>
            <Text style={styles.headerSubtitle}>
              {filteredServices.length} options available
            </Text>
          </View>
        )}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  cardContent: {
    padding: 18,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  description: {
    marginTop: 6,
    fontSize: 13,
    color: '#6b7280',
  },
  footer: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  viewDetails: {
    fontSize: 13,
    fontWeight: '500',
    color: '#2563eb',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#6b7280',
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
});
