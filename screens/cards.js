import { ImageBackground, LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import CardsButton from '../componets/cardsButton'
import { TextInput } from 'react-native-gesture-handler'
import CardsButton1 from '../componets/cardsButton1'
import MyComponent from '../componets/cardsButton1'
import CardLayout from '../componets/card'
import HabitCard from '../componets/card'
import HabitCard1 from '../componets/card1'
import HabitCard2 from '../componets/card2'






const Cards = () => {
  return (
    <ImageBackground
    source={require('../assets/background.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
    <View style={styles.container}>
      <MyComponent/>
    </View>
      <View style={styles.box}>
        <HabitCard/>
        <HabitCard1/>
        <View/>
        <View style={styles.box1}>
        <HabitCard2/>
        </View>
       
       
       
        
      </View>
    </ImageBackground>
  )
}

export default Cards

const styles = StyleSheet.create({
    container:{
        top:40,
        
        justifyContent:'center',
        alignItems:'center',
            
    },
    background:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
    box:{
      flexDirection: 'row',  // Kinder werden horizontal angeordnet
      justifyContent: 'space-between',  // Platz zwischen den Karten
      paddingHorizontal: 10,  // Optionale Innenabstände
      top: 50,
      right:24
    },
    box1:{
      //flexDirection: 'row',  // Kinder werden horizontal angeordnet
      justifyContent: 'space-between',  // Platz zwischen den Karten
      paddingHorizontal: 10,  // Optionale Innenabstände
      top: 400,
      right:24
    }
 
})