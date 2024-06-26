import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Screen from './Screen';
import Frame2 from './Frame2';
import Functions from './Functions';
import Transaction from './Transaction';
import { useTheme } from './ThemeContext';

export default function HomePage() {
    const {isDarkTheme,toggleTheme }=useTheme()
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Screen />
        <Frame2 />
        <Functions />
        <Transaction />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 52,
    padding: 20,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
