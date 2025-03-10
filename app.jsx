import useState from 'react'
import myButton from './button';
import backColor from './colors';
import React from 'react'
import { Text, View ,Button, StyleSheet} from 'react-native'

export default function counter(){

    const [number,setNumber]=useState(0);

    const increment=()=>{
     setNumber(number+2);
    }
    const decrement=()=>{
        setNumber(number-2);
   }

           <View style={{backgroundColor:"white"}}>
            <myButton title="+" onPress={increment}></myButton>
            <backColor></backColor>
            <myButton title="-" onPress={decrement}></myButton>
           </View>
}


