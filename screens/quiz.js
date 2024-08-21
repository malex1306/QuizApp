import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Button from '../componets/button';
import ButtonSmall from '../componets/buttonSmall';
import { StatusBar } from 'expo-status-bar';

export default function Quiz() {
  return (
    <ImageBackground 
      source={require('../assets/background.jpg')} // Pfad zu deinem Hintergrundbild
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.footerContainer}>
          <Button label="Option 1"/>
          <Button label="Option 2"/>
          <Button label="Option 3"/>
          <Button label="Option 4"/>
        </View>
        <View style={styles.continue}>
          <ButtonSmall label="SKIP"/>
          <ButtonSmall label="NEXT"/>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,  
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  continue: {
    marginBottom: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
