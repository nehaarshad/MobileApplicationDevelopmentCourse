import { useState } from "react";
import React from "react";
import { View,Text,ImageBackground, TouchableOpacity ,Image,} from "react-native";

export default function App() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const CalculatorButton=({button,onPress})=>{
    let textStyle={color:'black',fontSize:25}
    let styles={flex:1,padding:5,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'black',borderRadius:30,margin:5}
      if(button=='C'){
        textStyle={color:'red',fontSize:30,fontWeight:'bold'}
        }
        else if(button=='='){
          textStyle={color:'red',fontSize:30,fontWeight:'bold'}
        }
    return(
      <TouchableOpacity
        style={styles}
        onPress={()=>onPress(button)}>
        <Text style={textStyle}>{button}</Text> 
       </TouchableOpacity>
    );
  }
  const onPress=(value)=>{
    if(value=='C'){
      setInput('');
      setResult('');
    }
    else if(value=='='){
      setResult(eval(input).toString());
    }
    else{
      setInput(input+value);
    }
  }
  const buttons=[
    ['7','8','9','C'],
    ['4','5','6','*'],
    ['1','2','3','-'],
    ['/','0','+','=']
  ];

  return (
    <ImageBackground source={require('./assets/icon.png')} resizeMode="cover" style={{flex:1,height:'100%',width:'100%'}}>
     
    <View style={{flex:1,backgroundColor:'pink',opacity:0.8,padding:15}}>
       <View style={{flex:1,justifyContent:'flex-start',flexDirection:'row',alignItems:'center'}}>
      <Image source={require('./assets/favicon.png')} style={{width:100,height:100,alignSelf:'center'}}/>
      <Text style={{color:'black',fontSize:45,fontWeight:'bold',textAlign:'center',marginTop:10,marginLeft:30}}>Calculator </Text>
      
      </View>
      <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end',padding:10}}> 
     <Text style={{color:'black',fontSize:30}}>{input} </Text>
     <Text style={{color:'red',fontSize:40,fontWeight:'bold'}}>{result}</Text>
    </View>
    <View style={{flex:2,}}>
      {buttons.map((row,index)=>(
          <View key={index} style={{flex:1,flexDirection:'row'}}>
            {row.map((button,j)=>(
                <CalculatorButton key={j} onPress={onPress} button={button}/>
            ))}
          </View>
      ))}
    </View>
    </View>
    </ImageBackground>
  );
}
