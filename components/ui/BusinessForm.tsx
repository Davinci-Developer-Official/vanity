import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const BusinessForm = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [customType, setCustomType] = useState('');

  const businessOptions = ['Car wash', 'Car park', 'please specify'];

  const handleSelect = (option: string) => {
    setSelectedType(option);
    setDropdownOpen(false);
    if (option !== 'please specify') {
      setCustomType('');
    }
  };

  return (
    <View style={{
      backgroundColor: '#e0e0e0',
      padding: 20,
      marginTop: 100,
      borderRadius: 10,
      width: '90%',
      alignSelf: 'center',
    }}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Vanity</Text>

      <TextInput
        placeholder="Business name"
        style={{
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 8,
          marginBottom: 10
        }}
      />

      <TextInput
        placeholder="Business Location"
        style={{
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 8,
          marginBottom: 10
        }}
      />

      {/* Dropdown Header */}
      <TouchableOpacity
        onPress={() => setDropdownOpen(prev => !prev)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 8,
          marginBottom: 5
        }}
      >
        <Text>{selectedType || 'Business Type'}</Text>
        <Text>{dropdownOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {/* Dropdown Items */}
      {dropdownOpen && (
        <View style={{
          backgroundColor: '#f1f1f1',
          borderRadius: 8,
          overflow: 'hidden',
          marginBottom: 10
        }}>
          {businessOptions.map(option => (
            <TouchableOpacity
              key={option}
              onPress={() => handleSelect(option)}
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderColor: '#ccc'
              }}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Custom Field */}
      {selectedType === 'please specify' && (
        <TextInput
          placeholder="Enter custom business type"
          value={customType}
          onChangeText={setCustomType}
          style={{
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 8,
            marginBottom: 10
          }}
        />
      )}

      {/* Confirm Changes Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#4CAF50',
          padding: 12,
          borderRadius: 8,
          marginTop: 10,
          marginBottom: 10,
        }}
        onPress={() => console.log('Confirm Changes')}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Confirm Changes</Text>
      </TouchableOpacity>

      {/* Go to Dashboard Button */}
      <TouchableOpacity
        style={{
          backgroundColor: 'skyblue',
          padding: 12,
          borderRadius: 8,
          marginTop: 30,
          alignSelf: 'center',
          width: '100%',
        }}
        onPress={() =>{
          setCurrentPage("dashboard")
          console.log(`switching to dashboard`)
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BusinessForm;
