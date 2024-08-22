import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function ButtonSmall({ label, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <LinearGradient
       colors={['#E59C67' ,'#FCAC71','#FED0AE','#FFE2CD']}
       style={styles.gradient}
       >
      <TouchableOpacity style={styles.button} onPress={() => alert('You pressed a button')}>
        <Text style={[styles.buttonLabel, {fontFamily: 'CustomFont'}]}>{label}</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
    
  },
  buttonLabel: {
    color: '#010a2b',
    fontSize: 30,
  },

  gradient: {
    borderRadius: 20,
    marginTop: 50,
    height: '100%',  // Damit der Gradient die ganze Fläche abdeckt
    width: '100%',
    alignItems: 'center',  // Zentriert den Inhalt
    justifyContent: 'center',  // Zentriert den Inhalt
  },
});
