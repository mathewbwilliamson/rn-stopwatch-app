import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { StopwatchScreen } from './src/screens/StopwatchScreen';
import { PomodoroScreen } from './src/screens/PomodoroScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Stopwatch">
        <Drawer.Screen name="Stopwatch" component={StopwatchScreen} />
        <Drawer.Screen name="Pomodoro" component={PomodoroScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}