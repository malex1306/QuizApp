import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Avatar, Text } from 'react-native-paper';


const HabitCard1 = () => (
  <Card style={styles.box}>
    <Card.Content>
      <Avatar.Icon style={styles.icon} size={30} icon="cards" />
      <Text style= {styles.letter}>Cards</Text>
      <Button style={styles.add} icon="plus" mode="contained" onPress={() => console.log('Button pressed')}>
        Add
      </Button>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
    add:{
      top:10
    },


    box:{
        width: 180,
        height: 180,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor:'rgba(255, 255, 255, 0.8)',
    },

    icon:{
      top:-20,
      left:-20
    },

    letter:{
      fontFamily:'SUSE-VariableFont_wght',
      fontSize:30,
      textAlign:'center',
      color:'#fffff'
    }
})

export default HabitCard1;
