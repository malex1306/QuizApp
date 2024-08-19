import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'

const Home = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.letter}>This is home</Text>
        </View>
        <View style={styles.containerBanner}>
           <Image
            source={require('../assets/Quiz.jpg'
            )}
            style={styles.banner}
            resizeMode="contain"
           /> 
        </View>
        <View>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>START</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  
    banner:{
        height:300,
        width:300
    },

    button:{
        backgroundColor: '#6B9080',
        width: '100%',
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 10,
    },

    buttonText:{
        color: 'white',
        fontWeight: "600",
        fontSize: 24,
    },

    containerBanner:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 53,
        
        
       
    },

    letter:{
        marginTop:10,
        fontSize: 40,
        justifyContent: "center"
    },
   
    

})