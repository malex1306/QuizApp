import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Button from '../componets/button';
import ButtonSmall from '../componets/buttonSmall';
import { StatusBar } from 'expo-status-bar';
import Title from '../componets/title';
import questionsData from '../componets/questions.json'; 

export default function Quiz({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

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
      navigation.navigate('Home');
    }
  };

  const handleAnswerPress = (option) => {
    if (selectedOption === null) {
      setSelectedOption(option);
      const correctAnswer = questions[currentQuestionIndex].correctAnswer;
      setIsCorrect(option === correctAnswer);
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
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Title />
        <Text style={[styles.questionText, { fontFamily: 'CustomFont' }]}>
          {currentQuestion.question}
        </Text>
        <View style={styles.footerContainer}>
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
        </View>
        <View style={styles.continue}>
          <ButtonSmall label="HOME" onPress={() => navigation.navigate('Home')} />
          <ButtonSmall
            label="NEXT"
            onPress={handleNextQuestion}
            disabled={selectedOption === null}
          />
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
    flex: 1,
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
    borderWidth: 4,
  },
  incorrectBorder: {
    borderColor: 'red',
    borderWidth: 4,
  },
});