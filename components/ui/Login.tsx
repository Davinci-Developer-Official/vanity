import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Vanity</Text>

      {currentPage === 'login' ? (
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={true}
            style={styles.input}
          />

          <Button title="Sign In" onPress={handleSubmit} />
        </View>
      ) : (
        <View style={styles.formContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="Choose a username"
            style={styles.input}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Create a password"
            secureTextEntry={true}
            style={styles.input}
          />

          <Button title="Register" onPress={() => console.log('Registration logic')} />
        </View>
      )}

      <View style={styles.toggleButton}>
        <Button
          title={currentPage === 'login' ? 'Create New Account ' : 'Log in to Account'}
          onPress={() => setCurrentPage(currentPage === 'login' ? 'registration' : 'login')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    width: '100%',
    maxWidth: 400, // Prevents form from getting too wide on larger screens
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    width: '100%',
  },
  toggleButton: {
    marginTop: 20,
    width: '100%',
    maxWidth: 400, // Align the toggle button with the form
  },
});

export default SignInForm;
