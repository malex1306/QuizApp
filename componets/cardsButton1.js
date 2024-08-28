import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyComponent = () => {
  const _goBack = () => navigation.navigate('Home');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.buttom}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles= StyleSheet.create({
  buttom:{
  width:400,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white',
  borderRadius:20,
  }
    
})

export default MyComponent;