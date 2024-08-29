import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';


const prompt = require('prompt-sync')();

const ip = require('ip');

const NetworkCalculator = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [subnetMask, setSubnetMask] = useState('');
  const [results, setResults] = useState(null);

  const calculateNetwork = () => {
    let subnet_mask;
    if (!isNaN(subnetMask)) {
      subnet_mask = ip.fromPrefixLen(parseInt(subnetMask));
    } else {
      subnet_mask = subnetMask;
    }

    const network = ip.subnet(ipAddress, subnet_mask);

    const networkDetails = {
      networkIp: network.networkAddress,
      broadcastIp: network.broadcastAddress,
      firstHost: network.firstAddress,
      lastHost: network.lastAddress,
      possibleHosts: network.numHosts,
      
      
    };

    setResults(networkDetails);
  };

  return (
    <ImageBackground 
      source={require('../assets/background.jpg')} 
      style={styles.background1}
      resizeMode="cover"
    >
    
      <View style={styles.container}>
        <Text style={[styles.title, {fontFamily:'CustomFont'}]}>Network Calculator</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Geben Sie die IP-Adresse an"
          value={ipAddress}
          onChangeText={setIpAddress}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Geben Sie die Subnetzmaske oder Präfix an"
          value={subnetMask}
          onChangeText={setSubnetMask}
          keyboardType="numeric"
        />

        <Button title="Berechnen" onPress={calculateNetwork} />

        {results && (
          <View style={styles.results}>
            <Text>Netzwerk IP: {results.networkIp}</Text>
            <Text>Erster Host: {results.firstHost}</Text>
            <Text>Letzter Host: {results.lastHost}</Text>
            <Text>Broadcast IP: {results.broadcastIp}</Text>
            <Text>Anzahl der möglichen Hosts: {results.possibleHosts}</Text>
            <TextInput
            style={styles.inputSub}
            placeholder="Wieviele Subnetze möchte sie berrechnen?"
            // value={ipAddress}
            // onChangeText={setIpAddress}
            keyboardType="numeric"
        />
          </View>
        )}
      </View>
   
    </ImageBackground>
  );
};

export default NetworkCalculator;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background1: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    width: '90%',
    top:250,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    left:20
    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '50%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#333',
    textAlign:'center',
    justifyContent:'center'
  },
  inputSub:{
    width: '50%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#fff',
    color: '#333',
    textAlign:'center',
    justifyContent:'center',
    
  },
  results: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
});

