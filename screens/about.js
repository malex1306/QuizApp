import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { processFontFamily } from 'expo-font'
import ButtonSmall from '../componets/buttonSmall'
import FloatingButton from '../componets/floatingButton'

const About = ({navigation}) => {
  return (
    <ImageBackground 
    source={require('../assets/background.jpg')} 
    style={styles.background}
    resizeMode="cover"
  >
    <View>
    <FloatingButton style={styles.FloatingButton} />
      <Text style={[styles.About, {fontFamily:'CustomFont', color:'white'}]}>Diese App befindet sich aktuell in der Entwicklung, weshalb  
        noch nicht alle Funktion verfügbar sind!
      </Text>
      <View style={styles.home}>
      <ButtonSmall label="HOME" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
    </ImageBackground>
  )
}

export default About

const styles = StyleSheet.create({
    About:{
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        marginTop:200,
        fontSize:30,
        paddingHorizontal:50,
        textAlign:'center'
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
      },

      home:{
        marginBottom: 20,
        paddingVertical: 200,
        justifyContent: 'center',
        flexDirection: 'row',
      },
      FloatingButton:{
        position:'absolute',
        top:20,
        left:60,
      },
})