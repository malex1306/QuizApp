import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Avatar, Text } from 'react-native-paper';

const HabitCard1 = () => (
  <Card style={styles.box}>
    <Card.Content>
      <Avatar.Icon size={24} icon="water" />
      <Text>Cards</Text>
      <Button icon="calendar" mode="contained" onPress={() => console.log('Button pressed')}>
        Today
      </Button>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
    box:{
        width: 180,
        height: 180,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderRadius: 20,
        borderWidth: 1,
    }
})

export default HabitCard1;
