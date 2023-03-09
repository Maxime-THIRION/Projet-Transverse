import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import React from 'react';

import Cave from '../Cave/Cave';
import Spiritueux from '../Spiritueux/Spiritueux';
import Biere from '../Biere/Biere';
import Soft from '../Soft/Soft';

import { useNavigation } from '@react-navigation/core';


export default function Home() {
  const navigation = useNavigation();

  const Cavepress = () => {
    navigation.navigate(Cave);
  }
  const Bierepress = () => {
    navigation.navigate(Biere);
  }
  const Softpress = () => {
    navigation.navigate(Soft);
  }
  const Spiritpress = () => {
    navigation.navigate(Spiritueux);
  }

  return (
    <View style={[styles.container]}>      
      <StatusBar style="auto" />
        <View style={styles.button}>
          <ButtonHome text='Cave' onPress={Cavepress}/>
          <ButtonHome text='Biere' onPress={Bierepress}/>
          <ButtonHome text='Soft' onPress={Softpress}/>
          <ButtonHome text='Spiritueux' onPress={Spiritpress}/>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: "flex-start",
    

  },
  button: {
    // flex:2,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // flexGrow: 1,
  },
});