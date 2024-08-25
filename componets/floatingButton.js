import { Text, StyleSheet, View, Animated, TouchableWithoutFeedback, Linking } from 'react-native';
import React, { Component } from 'react';
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';



export default class FloatingButton extends React.Component {
  animation = new Animated.Value(1);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: true, 
      // Wichtig für bessere Performance
    }).start();

    this.open = !this.open;
  };

  handlePress = (url) => {
    Linking.openURL(url).catch(err => console.error("An error occurred", err));
  };
  

  render() {
    const mouseStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 60],
          }),
        },
      ],
    };

    const thumbStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 110],
          }),
        },
      ],
    };

    const hertoStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 160],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
          }),
        },
      ],
    };

    const opacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    });

    return (
      <View style={[styles.container, this.props.style]} >
        <TouchableWithoutFeedback onPress={() => this.handlePress('https://github.com/malex1306')}>
          <Animated.View style={[styles.button, styles.secondary, hertoStyle, { opacity }]}>
            <Entypo name="github" size={26} color="#fcac71" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.handlePress('https://www.linkedin.com/in/DEIN_LINKEDIN_PROFIL')}>
          <Animated.View style={[styles.button, styles.secondary, thumbStyle, { opacity }]}>
            <Entypo name="linkedin" size={26} color="#fcac71" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.handlePress('https://www.xing.com/profile/DEIN_XING_PROFIL')}>
          <Animated.View style={[styles.button, styles.secondary, mouseStyle, { opacity }]}>
            <Entypo name="xing" size={26} color="#fcac71" />
          </Animated.View>
        </TouchableWithoutFeedback>
      
        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
          <LinearGradient
        colors={['#E59C67', '#FCAC71', '#FED0AE', '#FFE2CD']}
        style={styles.gradient}
      >
            <Entypo name="menu" size={28} color="#000" />
            </LinearGradient>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: "absolute",
    justifyContent: 'space-between',
  },
  button: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 5,
    shadowColor: "#E59C67",
    shadowOpacity: 0.9,
    shadowOffset: { height: 10 },
    
  },
  gradient: {
    borderRadius: 16,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    backgroundColor: "#FCAC71",
  },
  secondary: {
    width: 38,
    height: 38,
    borderRadius: 48 / 2,
    backgroundColor: "#FFF",
  },
});