import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegistrationForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;

    if (strength <= 1) return { label: 'Weak', color: '#ff4d4d' };
    if (strength === 2) return { label: 'Fair', color: '#ffa500' };
    return { label: 'Strong', color: '#4CAF50' };
  };

  const strength = getPasswordStrength(form.password);

  const handleSubmit = () => {
    console.log('Registration form submitted:', form);
    // Handle form submission logic here
  };

  return (
    <View style={{ padding: 20, backgroundColor: '#f2f2f2', flex: 1 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
        Register Account
      </Text>

      {['First Name', 'Middle Name', 'Last Name', 'Email'].map((field) => (
        <View key={field} style={{ marginBottom: 15 }}>
          <Text style={{ marginBottom: 5 }}>{field}</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
            }}
            placeholder={`Enter ${field.toLowerCase()}`}
            value={form[field.replace(' ', '').toLowerCase() as keyof typeof form] || ''}
            onChangeText={(text) => handleChange(field.replace(' ', '').toLowerCase(), text)}
            keyboardType={field === 'Email' ? 'email-address' : 'default'}
          />
        </View>
      ))}

      {/* Password Field */}
      <View style={{ marginBottom: 10 }}>
        <Text style={{ marginBottom: 5 }}>Password</Text>
        <TextInput
          secureTextEntry
          placeholder="Enter password"
          value={form.password}
          onChangeText={(text) => handleChange('password', text)}
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            borderRadius: 5,
            backgroundColor: '#fff',
          }}
        />
        {form.password !== '' && (
          <Text style={{ marginTop: 5, color: strength.color }}>
            Strength: {strength.label}
          </Text>
        )}
      </View>

      {/* Confirm Password */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 5 }}>Confirm Password</Text>
        <TextInput
          secureTextEntry
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChangeText={(text) => handleChange('confirmPassword', text)}
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            borderRadius: 5,
            backgroundColor: '#fff',
          }}
        />
      </View>

      <Button title="Confirm Registration" onPress={handleSubmit} />
    </View>
  );
};

export default RegistrationForm;
