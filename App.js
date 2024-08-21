import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font'; 





export default function App() {
  return (
    <View style={styles.container}>
      <Quiz/>
    </View>
  );
}




const styles = StyleSheet.create({
container:{
  flex: 1,
  
  alignItems: 'center',
  justifyContent: 'center'
}
})
