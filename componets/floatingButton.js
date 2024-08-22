import { Text, StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import {AntDesign, Entypo} from "@expo/vector-icons"

export default class FloatingButton extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.button, styles.secondary, styles.menu]}>
                <Entypo name="scoreboard" size={24} color="fcac71"/>
            </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
            <Animated.View style={[styles.button, styles.menu]}>
                <AntDesign name="plus" size={24} color="fcac71"/>
            </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        position: "absolute",
        justifyContent:'space-between'
    },

    button:{
        //position:"absolute",
        width:60,
        height:60,
        borderRadius:60 /2,
        alignItems: "center",
        justifyContent:"center",
        shadowRadius:50,
        shadowColor:"#E59C67",
        shadowOpacity:0.9,
        shadowOffset:{height: 10}
    },

    menu:{
        backgroundColor: "#FCAC71"
    }
});