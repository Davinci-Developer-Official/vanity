import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Dashboard = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F4F7FB', // Light grayish blue background
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }}>
      <Text style={{
        fontSize: 28,
        fontWeight: '600',
        color: '#333', // Darker text color for better contrast
        marginBottom: 30,
      }}>Vanity</Text>

      {/* Button for Owners */}
      <TouchableOpacity 
        style={{
          width: '80%',
          backgroundColor: '#0066CC', // Professional blue color
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8, // Rounded corners
          marginVertical: 10, // Added margin to space out buttons
          elevation: 3, // Shadow for Android
          shadowColor: '#000', // Shadow for iOS
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }} 
        onPress={() => setCurrentPage('owners')}>
        <Text style={{
          color: 'white',
          fontSize: 16,
          fontWeight: '500',
          textAlign: 'center',
        }}>Go to Owners</Text>
      </TouchableOpacity>

      {/* Button for Business */}
      <TouchableOpacity 
        style={{
          width: '80%',
          backgroundColor: '#0066CC', // Professional blue color
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8, // Rounded corners
          marginVertical: 10,
          elevation: 3,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }} 
        onPress={() => setCurrentPage('business')}>
        <Text style={{
          color: 'white',
          fontSize: 16,
          fontWeight: '500',
          textAlign: 'center',
        }}>Go to Business</Text>
      </TouchableOpacity>

      {/* Button for Login */}
      <TouchableOpacity 
        style={{
          width: '80%',
          backgroundColor: '#0066CC', // Professional blue color
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          marginVertical: 10,
          elevation: 3,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }} 
        onPress={() => setCurrentPage('login')}>
        <Text style={{
          color: 'white',
          fontSize: 16,
          fontWeight: '500',
          textAlign: 'center',
        }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
