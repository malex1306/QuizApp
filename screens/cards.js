import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import CardsButton from '../componets/cardsButton'
import { TextInput } from 'react-native-gesture-handler'


const Cards = () => {
  return (
    <ImageBackground
    source={require('../assets/background.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
    <View style={styles.container}>
      <CardsButton label={'Add cards'}/>
      <CardsButton label={'Delete cards'}/>
    </View>
    </ImageBackground>
  )
}

export default Cards

const styles = StyleSheet.create({
    container:{
        top:40,
        left:-80,
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    background:{
        flex: 1,
        width: '100%',
        height: '100%',
    }   
})