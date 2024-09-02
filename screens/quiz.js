import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Button from '../componets/button';
import ButtonSmall from '../componets/buttonSmall';
import { StatusBar } from 'expo-status-bar';
import Title from '../componets/title';
import questionsData from '../componets/questions.json'; 
import ButtomNavigation from '../componets/buttomNavigation';

export default function Quiz({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(questionsData);
    setQuestions(shuffledQuestions);
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      navigation.navigate('Result', {
        score: score,
        totalQuestions: questions.length,
        incorrectAnswers: incorrectAnswers,
      });
    }
  };

  const handleAnswerPress = (option) => {
    if (selectedOption === null) {
      setSelectedOption(option);
      const correctAnswer = questions[currentQuestionIndex].correctAnswer;
      const isAnswerCorrect = option === correctAnswer;
      setIsCorrect(isAnswerCorrect);

      if (isAnswerCorrect) {
        setScore(score + 1);
      } else {
        setIncorrectAnswers([...incorrectAnswers, {
          question: questions[currentQuestionIndex].question,
          correctAnswer: correctAnswer,
          selectedOption: option,
        }]);
      }
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/bgQ.jpg')}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.container}>
        <View style={styles.containerHead}>
          <Text style={[styles.header, { fontFamily:'CustomFont' }]}>Network</Text>
        </View>
        <Text style={[styles.questionText, { fontFamily: 'CustomFont' }]}>
          {currentQuestion.question}
        </Text>
        <ScrollView contentContainerStyle={styles.footerContainer}>
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              label={option}
              onPress={() => handleAnswerPress(option)}
              style={
                selectedOption === option
                  ? isCorrect
                    ? styles.correctBorder
                    : styles.incorrectBorder
                  : null
              }
            />
          ))}
        </ScrollView>
        <View style={styles.continue}>
          {/* <ButtonSmall label="HOME" onPress={() => navigation.navigate('Home')} />  */}
          {selectedOption !== null && (
            <ButtonSmall
              label="NEXT"
              onPress={handleNextQuestion}
            />
          )}
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.bar}>
          <ButtomNavigation/>
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
  bar:{
    width:'100%',
    borderRadius:10,
    marginBottom:0,
    borderRadius:10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  containerHead:{
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  header:{
    marginTop: 150,
    alignItems: 'center',
    fontSize: 70,
    color: 'white'
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  continue: {
    marginBottom: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  correctBorder: {
    borderColor: 'green',
  },
  incorrectBorder: {
    borderColor: 'red',
  },
});
