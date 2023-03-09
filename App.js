import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/core';
import React from 'react';

import Home from './src/screen/Home/Home';
import Cave from './src/screen/Cave/Cave';
import Biere from './src/screen/Biere/Biere';
import Soft from './src/screen/Soft/Soft';
import Spiritueux from './src/screen/Spiritueux/Spiritueux';
import Vin from './src/screen/Vin/Vin';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Navigator from './src/navigator/RootNavigator';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cave" component={Cave} />
        <Stack.Screen name="Biere" component={Biere} />
        <Stack.Screen name="Soft" component={Soft} />
        <Stack.Screen name="Spiritueux" component={Spiritueux} />
        <Stack.Screen name="Vin" component={Vin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});