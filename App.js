import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'
import FloatingButton from './componets/floatingButton';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [loaded, error] = useFonts({
    'CustomFont' : require('./assets/fonts/CustomFont.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }  
 }, [loaded, error]);

    if (!loaded && !error) {
      return null;
    }
  
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}


const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
},
});
