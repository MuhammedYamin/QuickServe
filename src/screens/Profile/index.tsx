import React, {useState} from 'react';
import { Alert } from 'react-native';
import { launchCamera, ImagePickerResponse , CameraOptions} from 'react-native-image-picker';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/types';
import Ionicons from 'react-native-vector-icons/Ionicons';

type NavigationProp = NativeStackNavigationProp<ProfileStackParamList, 'Profile'>;

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [profileImage, setProfileImage] = useState(require('../../assets/image/avat.jpg'));

  const handleCameraLaunch = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage || 'Failed to open camera');
      } else if (response.assets && response.assets.length > 0) {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source); // Update the UI with the new photo
      }
    });
  };

  const MenuItem = ({ icon, title, onPress, color = '#111827' }: any) => (
    <Pressable 
      style={({ pressed }) => [styles.item, pressed && styles.pressed]} 
      onPress={onPress}
    >
      <View style={styles.itemLeft}>
        <View style={[styles.iconBg, { backgroundColor: color + '10' }]}>
          <Ionicons name={icon} size={20} color={color} />
        </View>
        <Text style={[styles.itemText, { color }]}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarWrapper}>
            <Image 
         source={typeof profileImage === 'number' ? profileImage : { uri: profileImage.uri }} 
         style={styles.avatarImage} 
       />
       <Pressable style={styles.editBadge} onPress={handleCameraLaunch}>
         <Ionicons name="camera" size={16} color="#fff" />
       </Pressable>
          </View>
          <Text style={styles.name}>Tony Stark</Text>
          <Text style={styles.email}>tony@starkindustries.com</Text>
        </View>

        {/* Menu Section */}
        <View style={styles.section}>
          <MenuItem icon="person-outline" title="Edit Profile" color="#4c918c" />
          <MenuItem icon="card-outline" title="Payment Methods" color="#4c918c" />
          <MenuItem icon="settings-outline" title="Settings" color="#4c918c" onPress={() => navigation.navigate('Settings')} />
          <MenuItem icon="help-circle-outline" title="Help & Support" color="#4c918c" />
        </View>

        {/* Logout */}
        <Pressable style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color="#ef4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
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
    alignItems: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#4c918c',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4c918c',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#f9fafb',
  },
  name: {
    marginTop: 16,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },
  email: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  section: {
    width: '100%',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Subtle Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBg: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  logoutButton: {
    marginTop: 20,
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fee2e2',
    backgroundColor: '#fff',
  },
  logoutText: {
    color: '#ef4444',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
});