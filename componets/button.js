import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function Button({ label, onPress }) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    onPress && onPress();  // onPress wird aufgerufen, wenn eine Funktion übergeben wurde
  };

  return (
    <View style={styles.buttonContainer}>
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
          <Text style={[styles.buttonLabel, isPressed && styles.buttonLabelPressed]} numberOfLines={1} ellipsizeMode="tail">
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
  },
  
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20, 
  },

  buttonPressed: {
    backgroundColor: '#FED0AE',
  },
  
  buttonLabel: {
    color: 'black',
    fontSize: 20,  
    fontFamily: 'CustomFont',
    textAlign: 'center',  
    paddingHorizontal: 10, // Füge horizontales Padding hinzu, um Rand zu schaffen
  },
  
  buttonLabelPressed: {
    color: 'black',
  },

  gradient: {
    borderRadius: 20,
    marginTop: 50,
    height: '100%',  // Gradient deckt die gesamte Höhe ab
    width: '100%',  // Gradient deckt die gesamte Breite ab
    alignItems: 'center',
    justifyContent: 'center',
  },
});
