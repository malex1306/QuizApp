import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../componets/button';
import ButtonSmall from '../componets/buttonSmall';
import { StatusBar } from 'expo-status-bar';
import Title from '../componets/title';
import questionsData from '../componets/questions.json'; 
import Home from './home';


export default function Quiz({navigation}) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Home') 
      
    }
  };

  const handleAnswerPress = (option) => {
    const correctAnswer = questionsData[currentQuestionIndex].correctAnswer;
    if (option === correctAnswer) {
    } else {
      
    }
    handleNextQuestion();
  };

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <ImageBackground
      source={require('../assets/background.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Title />
        <Text style={[styles.questionText, {fontFamily:'CustomFont'}]}>{currentQuestion.question}</Text>
        <View style={styles.footerContainer}>
          {currentQuestion.options.map((option, index) => (
            <Button key={index} label={option} onPress={() => handleAnswerPress(option)} />
          ))}
        </View>
        <View style={styles.continue}>
          <ButtonSmall label="HOME" onPress={() => navigation.navigate('Home')} />
          <ButtonSmall label="NEXT" onPress={handleNextQuestion} />
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  FloatingButton:{
    position:'absolute',
    top:20,
    left:60,
  },

  continue: {
    marginBottom: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
 
});
