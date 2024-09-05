import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


const LearnScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/bgQ.jpg')}
      style={styles.background}
      resizeMode='cover'
    >
    <View>
      <Text>Welcome to the Learn Screen!</Text>
    </View>
    </ImageBackground>
  );
};

export default LearnScreen;

const styles = StyleSheet.create({
        background: {
          flex: 1,
          width: '100%',
          height: '100%',
        },
})

