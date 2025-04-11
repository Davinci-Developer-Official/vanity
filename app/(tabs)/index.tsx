import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity ,TextInput} from 'react-native';
import Owners from "@/components/ui/Owners"
import Dashboard from '@/components/ui/Dashbooard';
import Login from "@/components/ui/Login"

const App = () => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Handle page transitions with side effects if necessary
  useEffect(() => {
    console.log(`Current Page: ${currentPage}`);
    // Any side effect logic can be added here when the page changes
  }, [currentPage]);

  // Render different content based on the current page
  const renderPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = () => {
      // You can connect to your backend here
      console.log('Email:', email);
      console.log('Password:', password);
    };
    switch (currentPage) {
      case 'login':
        return (
        <Login/>
        );
      case 'registration':
        return (
          <View>
            <Text>Registration Page</Text>
            <Button title="Go to Login" onPress={() => setCurrentPage('login')} />
            <Button title="Go to Dashboard" onPress={() => setCurrentPage('dashboard')} />
          </View>
        );
      case 'dashboard':
        return (
          <Dashboard setCurrentPage={setCurrentPage} />
        );
      case 'owners':
        return (
          <Owners/>
        );
      case 'business':
        return (
          <View>
            <Text>Business Page</Text>
            <Button title="Go to Dashboard" onPress={() => setCurrentPage('dashboard')} />
          </View>
        );
      default:
        return <Text>Page not found</Text>;
    }
  };

  return (
    <View>
      {renderPage()}
    </View>
  );
};

export default App;
