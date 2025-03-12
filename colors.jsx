import {View,Text} from "react-native"
import React from 'react';

export default function BackColor({ number }) {
  let Color = 'black';
  if (number > 5) {
    Color = 'purple';
  } else if (number < -5) {
    Color = 'red';
  }

  return (
    <View style={{ padding: 20, margin: 10 }}>
      <Text style={{ color:Color ,fontSize:40}}>{number}</Text>
    </View>
  );
}