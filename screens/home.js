import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../componets/button';  
import ButtonSmall from '../componets/buttonSmall';  
import TopButton from '../componets/topButton'; 
import { LinearGradient } from 'expo-linear-gradient';
import Gradient from '../componets/gradient';
import FloatingButton from '../componets/floatingButton';
import Title from '../componets/title';
import About from './about';
import GlowingButton from '../componets/glowingButton';
import Menu1 from '../componets/menu';
import ButtomNavigation from '../componets/buttomNavigation';






const Home = ({navigation}) => {
  return (
    <ImageBackground 
      source={require('../assets/background.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      
      
      <View style={styles.container}>
        <Title />
      
        
        <View style={styles.footerContainer}>
          <Button label="NETWORK QUIZ"
          onPress={() => navigation.navigate('Quiz')}
          />
          <Button label="CARDS" onPress={() => navigation.navigate('Cards')}/>
          <Button label="NETWORK CALC" onPress={() => navigation.navigate('NetworkCalculator')}/>
          <Button label="HANGMAN" />
        </View>
      
        <View style={styles.bar}>
          <ButtomNavigation/>
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
  bar:{
    width:'120%',
    borderRadius:20,
    marginBottom:-20,
    borderRadius:20,
    
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
    padding:5
  },

  headFont: {
    
    marginTop: 160,
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
    justifyContent: "center",
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
