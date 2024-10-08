import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CardsButton({ label, onPress, style }) {
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
        colors={['#E59C67', '#FCAC71', '#FED0AE', '#FFE2CD']}
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
    width: 150,
    height: 150,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f15bb5',
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
    fontSize: 25,
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