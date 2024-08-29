import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Button({ label, onPress, style }) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    onPress && onPress();
  };

  return (
    <View style={[styles.buttonContainer, style]}>
      <LinearGradient
        colors={['rgba(229, 156, 103, 0.9)', 'rgba(252, 172, 113, 0.9)', 'rgba(254, 208, 174, 0.9)', 'rgba(255, 226, 205, 0.9)'
        ]}
        style={styles.gradient}
      >
        <TouchableOpacity
          style={[styles.button, isPressed && styles.buttonPressed]}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={1}
        >
          <Text style={[styles.buttonLabel]} numberOfLines={2} ellipsizeMode="tail">
            {label}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: 'transparent',
    shadowColor: '#570082', // Schattenfarbe
    shadowOffset: { width: 0, height: 4 }, // Schattenversatz
    shadowOpacity: 0.3, // Schattenopazität
    shadowRadius: 100, // Schattenradius
    elevation: 5, // Android elevation für Schatten
    
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  //buttonPressed: {
    //shadowOffset: { width: 0, height: 4 }, // geringerer Schatten beim Drücken
    //shadowOpacity: 0.7,
    //elevation: 4,
  //},
  buttonLabel: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'CustomFont',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  gradient: {
    borderRadius: 16,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});