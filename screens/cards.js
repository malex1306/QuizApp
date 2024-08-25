import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Cards = () => {
  return (
    <ImageBackground
    source={require('../assets/background.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
    <View style={styles.container}>
      <Ionicons.Button name='reader' size={150} backgroundColor={'black'} borderRadius={40}/>
    </View>
    </ImageBackground>
  )
}

export default Cards

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:85,
        left:20,
    },
    background:{
        flex: 1,
        width: '100%',
        height: '100%',
    }   
})