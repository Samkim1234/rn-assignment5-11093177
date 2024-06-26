import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const Frame2 = () => {
  return (
    <View>
      <View style={styles.imgCard}>
        <Image source={require('../assets/Card.png')} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgCard: {
    marginTop: 13,
    marginLeft:20,
  },
  image: {
    width: 370,
    height: 220, // Adjust the height as needed
  },
});

export default Frame2;
