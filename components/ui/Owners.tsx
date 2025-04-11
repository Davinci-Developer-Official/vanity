import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

interface InputProps {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
}

const VanityForm = () => {
  const [showVehicle, setShowVehicle] = useState(false);
  const [showTrustee, setShowTrustee] = useState(false);
  
  const [vehicleDetails, setVehicleDetails] = useState({ regNo: '', carModel: '' });
  const [trusteeDetails, setTrusteeDetails] = useState({ fullName: '', idNo: '', phoneNumber: '' });

  const handleAddVehicle = () => {
    console.log('Vehicle Added:', vehicleDetails);
    setShowVehicle(false);
  };

   const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('Kiarie');
  const [lastName, setLastName] = useState('Mwangi');
  const [phoneNumber, setPhoneNumber] = useState('+2542354365');

 

  const handleAddTrustee = () => {
    console.log('Trustee Added:', trusteeDetails);
    setShowTrustee(false);
  };

  return (
    <ScrollView contentContainerStyle={{
      backgroundColor: '#F5F5F5',
      padding: 20,
      width: '90%',
      alignSelf: 'center',
      marginTop: 20,
      borderRadius: 10,
    }}>
      <Text style={{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
      }}>Vanity</Text>

<Input label="First Name:" value={firstName} onChangeText={setFirstName} />
      <Input label="Middle Name:" value={middleName} onChangeText={setMiddleName} />
      <Input label="Last Name:" value={lastName} onChangeText={setLastName} />
      <Input label="Phone Number:" value={phoneNumber} onChangeText={setPhoneNumber} />

      {/* VEHICLE SECTION */}
      <Text style={{
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10,
      }}>Vehicles</Text>
      <TouchableOpacity onPress={() => setShowVehicle(true)} style={{
        alignSelf: 'flex-end',
        backgroundColor: '#007BFF', // Blue color
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        marginVertical: 10,
      }}>
        <Text style={{
          color: 'white',
          fontSize: 16,
        }}>Add Vehicle</Text>
      </TouchableOpacity>

      {showVehicle && (
        <View style={{
          backgroundColor: '#E0E0E0',
          padding: 10,
          borderRadius: 8,
          marginTop: 10,
        }}>
          <Input
            label="Reg No:"
            value={vehicleDetails.regNo}
            onChangeText={(text) => setVehicleDetails({ ...vehicleDetails, regNo: text })}
          />
          <Input
            label="Car Model:"
            value={vehicleDetails.carModel}
            onChangeText={(text) => setVehicleDetails({ ...vehicleDetails, carModel: text })}
          />
          <TouchableOpacity onPress={handleAddVehicle} style={{
            alignSelf: 'flex-end',
            backgroundColor: '#28A745', // Green color for confirmation
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 8,
            marginVertical: 10,
          }}>
            <Text style={{
              color: 'white',
              fontSize: 16,
            }}>Confirm Vehicle</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* TRUSTEE SECTION */}
      <Text style={{
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10,
      }}>Trustee</Text>
      <TouchableOpacity onPress={() => setShowTrustee(true)} style={{
        alignSelf: 'flex-end',
        backgroundColor: '#007BFF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        marginVertical: 10,
      }}>
        <Text style={{
          color: 'white',
          fontSize: 16,
        }}>Add Trustee</Text>
      </TouchableOpacity>

      {showTrustee && (
        <View style={{
          backgroundColor: '#E0E0E0',
          padding: 10,
          borderRadius: 8,
          marginTop: 10,
        }}>
          <Input
            label="Full Name:"
            value={trusteeDetails.fullName}
            onChangeText={(text) => setTrusteeDetails({ ...trusteeDetails, fullName: text })}
          />
          <Input
            label="ID No:"
            value={trusteeDetails.idNo}
            onChangeText={(text) => setTrusteeDetails({ ...trusteeDetails, idNo: text })}
          />
          <Input
            label="Phone Number:"
            value={trusteeDetails.phoneNumber}
            onChangeText={(text) => setTrusteeDetails({ ...trusteeDetails, phoneNumber: text })}
          />
          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFC107', // Yellow color for "Add Finger"
            padding: 6,
            borderRadius: 8,
            marginVertical: 10,
            justifyContent: 'space-between',
          }}>
            <Text style={{
              fontSize: 16,
              color: '#333',
            }}>Add Finger</Text>
            <Text style={{
              fontSize: 24,
            }}>🖐️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddTrustee} style={{
            alignSelf: 'flex-end',
            backgroundColor: '#28A745', // Green color for confirmation
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 8,
            marginVertical: 10,
          }}>
            <Text style={{
              color: 'white',
              fontSize: 16,
            }}>Confirm Trustee</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const Input = ({ label, value, onChangeText }: InputProps) => (
  <View style={{
    marginBottom: 15,
  }}>
    <Text style={{
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 5,
    }}>{label}</Text>
    <TextInput
      style={{
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#DDD',
      }}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export default VanityForm;
