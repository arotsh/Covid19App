import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import { HomeScreen } from './src/HomeScreen';
import { NewsScreen } from './src/NewsScreen';
import { GlobalScreen } from './src/GlobalScreen';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ff1e56"
        inactiveColor="#dadada"
        barStyle={{ backgroundColor:'#0b0c0e'}}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="World"
          component={GlobalScreen}
          options={{
            tabBarLabel: 'World',
            tabBarIcon: ({ color }) => (
              <Entypo name="flag" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarLabel: 'News',
            tabBarIcon: ({ color }) => (
              <Entypo name="list" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121417',
  },
});
