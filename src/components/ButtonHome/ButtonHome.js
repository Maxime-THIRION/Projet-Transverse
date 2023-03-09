import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

// import {useTailwind} from 'tailwind-rn';


// interface ButtonHomeprops {
//   children: string,
//   onPress: (children: any) => void,
//   //chercher onpress avec children
//   //recherche ts et nn reacnative
// }

export default function ButtonHome({text, onPress}) {
//   const tailwind = useTailwind();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#F1E5D8",
    // alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: "1%",
    minWidth: "47%",
    textAlign: "center",
  },
  text: {
    // fontFamily: 'Avenir-Black',
    // fontWeight: 'bold',
    fontSize: 18,
    color: "#000000",
  }
});



