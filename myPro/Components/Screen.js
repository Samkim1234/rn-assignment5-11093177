import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import {useTheme} from './ThemeContext'
const Screen = () => {
  const {isDarkTheme,toggleTheme }=useTheme()
  
  return (
    <View style={styles.frameContainer}>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/profile.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.smallText]}>Welcome Back,</Text>
        <Text style={styles.bigText}>Samuel Ansong</Text>
      </View>
      <TouchableOpacity style={styles.rightImgContainer}>
        <Image source={require('../assets/search.png')} style={styles.rightImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  frameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    marginTop: -40, // Move frameContainer upwards
    marginLeft: -20,
    marginRight: -20,
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 25,
    overflow: 'hidden',
    marginTop:34,
    marginLeft:15,
  },
  image: {
    width: '100%',
    height: '100%',
    
    
    
    
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    marginTop:29,
  },
  bigText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 17,
    marginBottom: 5, // Add space between Welcome Back and Samuel Ansong
  },
  rightImgContainer: {
    backgroundColor: 'white',
    borderRadius: 25, // Half of the width/height for circular shape
    width: 50, // Set the width
    height: 50, // Set the height equal to width
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    marginRight: 40,
    bottom:-15,
  },
  rightImage: {
    width: 30,
    height: 30,
    backgroundColor: '#F7F0E8',
    padding: 20,
    borderRadius: 100,
  },
});

export default Screen;
