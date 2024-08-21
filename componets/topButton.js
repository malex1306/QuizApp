import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function TopButton({ label, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => alert('You pressed a button')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 70,
    height: 50,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },
  button: {
    backgroundColor: '#fcac71',
    borderRadius: 10,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
    
  },
  buttonLabel: {
    color: '#010a2b',
    fontSize: 20,
  },
});
