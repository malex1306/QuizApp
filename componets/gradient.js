import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Gradient({ label, onPress }) {
  return (
    <LinearGradient
    colors={['','','']}
    style={{
        borderRadius: 20,
        marginTop: 50,
        height: 50,
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        
        

    }}>,
        <Text></Text>
    </LinearGradient>
  );
}