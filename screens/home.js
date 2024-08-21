import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../componets/button';  // Achte auf die korrekte Groß- und Kleinschreibung
import ButtonSmall from '../componets/buttonSmall';  // Achte auf die korrekte Groß- und Kleinschreibung
import TopButton from '../componets/topButton';  // Achte auf die korrekte Groß- und Kleinschreibung

const Home = () => {
  return (
    <ImageBackground 
      source={require('../assets/background.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.topFooterContainer}>
        <TopButton label="ph" />
        <TopButton label="ph1" />  {/* Achte auf die korrekte Groß- und Kleinschreibung */}
      </View>
      <View style={styles.container}>
        <View style={styles.headFont}>
          <Text style={[styles.letter, { fontFamily: 'Dots' }]}>Quizzler</Text>
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
  footerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  headFont: {
    marginTop: 10,
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
    width: '100%',  // Ensure the container takes full width
  },
  topFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,  // Adjust padding as needed
    paddingVertical: 16,
    width: '100%',  // Ensure the container takes full width
  }
});
