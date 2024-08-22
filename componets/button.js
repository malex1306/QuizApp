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
       colors={['#E59C67' ,'#FCAC71','#FED0AE','#FFE2CD']}
       style={styles.gradient}
       >
        <TouchableOpacity
        style={[styles.button, isPressed && styles.buttonPressed]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}  
      >
        <Text style={[styles.buttonLabel, isPressed && styles.buttonLabelPressed]}>{label}</Text>
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
    backgroundColor: '#FED0AE',  // Der Button-Hintergrund wird transparent
  },
  buttonLabel: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'CustomFont'
  },
  buttonLabelPressed: {
    color: 'black',  // Text bleibt sichtbar
  },

  gradient: {
    borderRadius: 20,
    marginTop: 50,
    height: '90%',  // Damit der Gradient die ganze Fläche abdeckt
    width: '80%',
    alignItems: 'center',  // Zentriert den Inhalt
    justifyContent: 'center',  // Zentriert den Inhalt
  },
});
