import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import linearGradient from 'react-native'

export default function Gradient({ label, onPress }) {
  return (
    <linearGradient
    colors={['','','']}
    style={{
        borderRadius: 20,
        marginTop: 50,
        height: 50,
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center'
        

    }}>,
        <Text></Text>
    </linearGradient>
  );
}