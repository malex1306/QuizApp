import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../componets/button';  
import ButtonSmall from '../componets/buttonSmall';  
import TopButton from '../componets/topButton'; 
import { LinearGradient } from 'expo-linear-gradient';
import Gradient from '../componets/gradient';
import FloatingButton from '../componets/floatingButton';




const Home = () => {
  return (
    <ImageBackground 
      source={require('../assets/background.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      
      <View style={styles.container}>
      <FloatingButton style={styles.FloatingButton} />
        <View style={styles.headFont}>
          <Text style={[styles.letter, { fontFamily: 'CustomFont' }]}>Quizzler</Text>
        </View>
        <View style={styles.footerContainer}>
          <Button label="START" />
          <Button label="SCORE" />
          <Button label="PROFILE" />
          <Button label="SETTINGS" />
        </View>
        <View style={styles.smallFooterContainer}>
          <ButtonSmall label="QUIT" />
          <ButtonSmall label="FOLLOW" />
        </View>
      </View>

    </ImageBackground>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },

  FloatingButton:{
    position:'absolute',
    top:20,
    left:60,
  },

  footerContainer: {
    flex:1,
    width: '100%',
    alignItems: 'center',
  },

  headFont: {
    
    marginTop: 180,
    alignItems: 'center',
  },
  letter: {
    fontSize: 60,
    textAlign: "center",
    color: '#fff',
  },
  smallFooterContainer: {
    marginBottom: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    width: '100%', 
  },
  topFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,  
    paddingVertical: 16,
    width: '100%', 
  }
});
