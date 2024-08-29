import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'
import FloatingButton from './componets/floatingButton';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/myStack';



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
    
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

    
  );
}


const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
},

FloatingButton:{
  position:'absolute',
  top:20,
  left:60,
},
});
