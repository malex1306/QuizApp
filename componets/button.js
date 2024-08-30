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
      
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    marginVertical:10,
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
    backgroundColor:'rgba(35, 25, 66, 0.9)',
    
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
    color: 'white',
    fontSize: 30,
    fontFamily: 'SUSE-VariableFont_wght',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  // gradient: {
  //   borderRadius: 16,
  //   height: '100%',
  //   width: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});