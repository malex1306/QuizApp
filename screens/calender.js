import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const LearnCalendar = () => {
  // State zum Speichern der Lern-Tage
  const [markedDates, setMarkedDates] = useState({
    '2023-09-01': { marked: true, dotColor: 'blue', selected: true, selectedColor: 'lightblue' },
    '2023-09-02': { marked: true, dotColor: 'green' },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lernkalender</Text>
      <Calendar
        // Markiere Tage, an denen du gelernt hast
        markedDates={markedDates}
        onDayPress={(day) => {
          console.log('Selected day', day);
          // Beispiel: Füge hier eine Funktion hinzu, um zu speichern, was du an diesem Tag gelernt hast
        }}
        theme={{
          todayTextColor: 'red',
          selectedDayBackgroundColor: 'green',
          dotColor: 'blue',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default LearnCalendar;
