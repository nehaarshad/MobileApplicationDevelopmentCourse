import { StatusBar } from 'expo-status-bar';
import MyButton from './button.jsx';
import BackColor from './colors.jsx';
import React, {useState,}from 'react'
import { View,Text } from 'react-native'
import Styles from './styles.jsx';

export default function Counter() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={Styles.topBar}>
      <Text style={Styles.topBarText}>Counter App</Text>
      </View>
      <View style={{borderBlockColor:'grey',backgroundColor:'lightblue',borderWidth:1,height:130,width:200,alignItems:'center'}}><BackColor number={number} /></View>
    <View style={Styles.buttonsAlignment}>
      <MyButton title="-" onPress={decrement} color='blue' width={50}/>
      <MyButton title="+" onPress={increment} color='blue' width={50}/>
    </View>
    <MyButton title="Reset" onPress={reset} color='red' width={100}/>
    </View>
  );
}