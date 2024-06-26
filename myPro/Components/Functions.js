import { View, TouchableOpacity, Image, StyleSheet, Alert, Text } from 'react-native';
import React from 'react';

const Function = () => {
  return (
    <View style={functionStyles.functionContainer}>
      <TouchableOpacity
        style={functionStyles.functionContainerItem}
        onPress={() => Alert.alert('Send button pressed')}
      >
        <View style={functionStyles.iconContainer}>
          <Image source={require('../assets/send.png')} style={functionStyles.fxnImage} />
        </View>
        <Text style={{fontWeight:'bold',paddingTop:10}}>Top Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={functionStyles.functionContainerItem}
        onPress={() => Alert.alert('Receive button pressed')}
      >
        <View style={functionStyles.iconContainer}>
          <Image source={require('../assets/receive.png')} style={functionStyles.fxnImage} />
        </View>
        <Text style={{fontWeight:'bold',paddingTop:10}}>Receive</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={functionStyles.functionContainerItem}
        onPress={() => Alert.alert('Loan button pressed')}
      >
        <View style={functionStyles.iconContainer}>
          <Image source={require('../assets/loan.png')} style={functionStyles.fxnImage} />
         
        </View>
      <Text style={{fontWeight:'bold',paddingTop:10}}>Loan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={functionStyles.functionContainerItem}
        onPress={() => Alert.alert('Top Up button pressed')}
      >
        <View style={functionStyles.iconContainer}>
          <Image source={require('../assets/topUp.png')} style={functionStyles.fxnImage} />
        </View>
        <Text>Top Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const functionStyles = StyleSheet.create({
  functionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 19,
    paddingBottom:10,
    marginRight:30,
  },
  functionContainerItem: {
    backgroundColor: 'white',
    borderRadius: 25,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  iconContainer: {
    backgroundColor: '#E5DFDF',
    borderRadius: 100,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fxnImage: {
    width: 35,
    height: 35,
    padding:10,
    
  },
});

export default Function;
