import { Text, StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import {AntDesign, Entypo} from "@expo/vector-icons"
import { transform } from 'react-native'



export default class FloatingButton extends React.Component {
  animation = new Animated.Value(0)

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1

    Animated.spring(this.animation, {
      toValue,
      friction: 5
    }).start()

    this.open = !this.open;
  }

  render() {
    const mouseStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange:[0, 1],
            outputRange:[0, 60]
          })
        }
      ]
    };

    const thumbStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange:[0, 1],
            outputRange:[0, 110]
          })
        }
      ]
    };

    const hertoStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange:[0, 1],
            outputRange:[0, 160]
          })
        }
      ]
    };

    const rotation = {
      transform: [
        {
        rotate: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"]
        })
      }
      ]
    };

    const opacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1]
    })

    



    return (
      <View style={[styles.container, this.props.style]}>
        
        <TouchableWithoutFeedback>
            <Animated.View style={[styles.button, styles.secondary, hertoStyle, opacity]}>
                <AntDesign name="hearto" size={26} color="#fcac71"/>
            </Animated.View>
        </TouchableWithoutFeedback>
        
         <TouchableWithoutFeedback>
            <Animated.View style={[styles.button, styles.secondary, thumbStyle, opacity]}>
                <Entypo name="thumbs-up" size={26} color="#fcac71"/>
            </Animated.View>
        </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <Animated.View style={[styles.button, styles.secondary, mouseStyle, opacity]}>
                <Entypo name="mouse" size={26} color="#fcac71"/>
            </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
            <Animated.View style={[styles.button, styles.menu, rotation]}>
                <Entypo name="menu" size={28} color="#000"/>
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
        position:"absolute",
        width:50,
        height:50,
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
    },

    secondary:{
      width: 38,
      height:38,
      borderRadius: 48 / 2,
      backgroundColor:"#FFF"
    }
});