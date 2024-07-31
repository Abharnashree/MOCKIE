// src/screens/QuestionsScreen.jsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

//dummy
const dummyQuestionsData = [
    {
      id: 1,
      question: "Explain the principles of OOP.",
      correctAnswer: "Encapsulation, Inheritance, Polymorphism, Abstraction"
    },
    {
      id: 2,
      question: "What is the difference between SQL and NoSQL databases?",
      correctAnswer: "SQL databases are relational, NoSQL databases are non-relational"
    },
    {
        id: 3,
        question: "What are your hobbies",
        correctAnswer: "drawing, reading, singing, painting"
      },
      {
        id: 2,
        question: "Tell us about yourself",
        correctAnswer: "Iam a tech enthusiast"
      },
  ];

export default function QuestionsScreen() {
  const [questions] = useState(dummyQuestionsData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleStartInterview = () => {
    console.log('Starting interview...');
    // Logic to start the interview
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>
      <Button
        title="Next Question"
        onPress={handleNextQuestion}
        disabled={currentQuestionIndex >= questions.length - 1}
      />
      <Button
        title="Start Interview"
        onPress={handleStartInterview}
        disabled={currentQuestionIndex < questions.length - 1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  correctAnswerText: {
    fontSize: 16,
    color: 'green',
    marginBottom: 20,
  },
});

