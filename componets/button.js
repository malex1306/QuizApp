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
      <TouchableOpacity
        style={[styles.button, isPressed && styles.buttonPressed]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}  
      >
        <Text style={[styles.buttonLabel, isPressed && styles.buttonLabelPressed]}>{label}</Text>
      </TouchableOpacity>
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
    backgroundColor: '#fcac71',
    borderRadius: 10,
    borderWidth: 2,  // Breite des Rahmens
    borderColor: '#010a2b',  // Farbe des Rahmens
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonPressed: {
    backgroundColor: '#FED0AE',  // Der Button-Hintergrund wird transparent
  },
  buttonLabel: {
    color: '#010a2b',
    fontSize: 20,
  },
  buttonLabelPressed: {
    color: '#010a2b',  // Text bleibt sichtbar
  },
});
