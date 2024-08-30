import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonSmall from '../componets/buttonSmall';
import { ImageBackground } from 'react-native';

export default function Result({ route, navigation }) {
  const { score, totalQuestions, incorrectAnswers } = route.params;

  return (
    <ImageBackground
      source={require('../assets/background.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={[styles.title, { fontFamily: 'SUSE-VariableFont_wght' }]}>Your Results</Text>
        <Text style={[styles.scoreText, { fontFamily: 'SUSE-VariableFont_wght' }]}>
          You answered {score} out of {totalQuestions} questions correctly.
        </Text>
        <ScrollView style={styles.scrollView}>
          {incorrectAnswers.length > 0 ? (
            incorrectAnswers.map((item, index) => (
              <View key={index} style={styles.answerContainer}>
                <Text style={[styles.questionText, { fontFamily: 'SUSE-VariableFont_wght' }]}>
                  Question: {item.question}
                </Text>
                <Text style={[styles.correctAnswerText, { fontFamily: 'SUSE-VariableFont_wght' }]}>
                  Correct Answer: {item.correctAnswer}
                </Text>
                <Text style={[styles.yourAnswerText, { fontFamily: 'SUSE-VariableFont_wght' }]}>
                  Your Answer: {item.selectedOption}
                </Text>
              </View>
            ))
          ) : (
            <Text style={[styles.allCorrectText, { fontFamily: 'CustomFont' }]}>
              Congratulations! All answers were correct!
            </Text>
          )}
        </ScrollView>
        <ButtonSmall label="HOME" onPress={() => navigation.navigate('Home')} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollView: {
    width: '100%',
    marginBottom: 20,
  },
  answerContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  questionText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  correctAnswerText: {
    fontSize: 16,
    color: 'green',
  },
  yourAnswerText: {
    fontSize: 16,
    color: 'red',
  },
  allCorrectText: {
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
  },
});