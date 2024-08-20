import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function ButtonSmall({ label, onPress }) {
  return (
    <View style={[styles.buttonContainer, {borderWidth: 4, borderColor: "#9d4edd", borderRadius:18 }]}>
      <TouchableOpacity style={styles.button} onPress={() => alert('You pressed a button')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </TouchableOpacity>
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
    backgroundColor: '#6B9080',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 20,
  },
});
