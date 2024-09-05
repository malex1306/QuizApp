import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Avatar, Text } from 'react-native-paper';
import Gradient from './gradient';
import { View } from 'react-native-web';

const HabitCard = () => (

    
  <Card style={styles.box}>
    
    <Card.Content>
      <Avatar.Icon style={styles.icon} size={30} icon="school" />
      <Text style={styles.letter} onPress={() => console.log('Button pressed')}>Learn</Text>
      <Button style={styles.today} icon="calendar" mode="contained" onPress={() => console.log('Button pressed')}>
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
        backgroundColor:'rgba(255, 255, 255, 0.8)',
        borderColor:'white'

    },
    calender:{
      
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
    },
    today:{
      top:10,
    }

})

export default HabitCard;
