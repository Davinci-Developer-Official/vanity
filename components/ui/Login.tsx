import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState('login');

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your sign-in logic here
  };

  return (
    <View style={{ padding: 20, backgroundColor: '#f7f7f7', flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>Vanity</Text>

      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 6 }}>
        <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          style={{
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 5,
            padding: 10,
            marginBottom: 20,
            fontSize: 16,
          }}
        />

        <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={true}
          style={{
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 5,
            padding: 10,
            marginBottom: 20,
            fontSize: 16,
          }}
        />

        <Button title="Sign In" onPress={handleSubmit} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Go to Registration" onPress={() => setCurrentPage('registration')} />
      </View>
    </View>
  );
};

export default SignInForm;
