import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './Components/HomePage';
import Setting from './Components/Setting'; // Ensure the correct import
import { ThemeProvider } from './Components/ThemeContext'; // Ensure the correct import
import home from './assets/home.png'
import home2 from './assets/settings.png'
import home3 from './assets/myCards.png'
import home4 from './assets/statistics.png'

import {Image} from "react-native"
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomePage"  options={{tabBarIcon:()=> (<Image source={home}/>)}}component={HomePage} />
          <Tab.Screen name="My Cards" options={{tabBarIcon:()=> (<Image source={home3}/>)}}component={Setting} />
          <Tab.Screen name="Statistics" options={{tabBarIcon:()=> (<Image source={home4}/>)}}component={Setting} />
          <Tab.Screen name="Setting"  options={{tabBarIcon:()=> (<Image source={home2}/>)}}component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
