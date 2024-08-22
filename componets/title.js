import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'CustomFont' }]}>Quizzler</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        marginTop: 175,
        alignItems: 'center',
        fontSize:70,
        color:'white'
    },

    container:{
        paddingVertical:16,
        justifyContent:"center",
        alignItems: "center"
    }
})