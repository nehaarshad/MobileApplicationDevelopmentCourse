import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BoxContainer from './GridFunction';

export default function App() {

  const [name,setName]=useState('');
  
  return (
<View style={{backgroundColor:'white',flex:1,padding:20,justifyContent:'space-around',alignContent:"center"}}>
  <TextInput style={{borderBlockColor:"grey",borderWidth:2,borderRadius:30, marginTop:20,paddingLeft:25,fontWeight:'bold',fontSize:16}}
  placeholder='Search'
  onChange={(value)=>setName(value)}
  value={name}
  ></TextInput>
<View style={{flexDirection:"row",justifyContent:'flex-start',alignItems:'center',}}>
  <BoxContainer image='https://th.bing.com/th/id/OIP.tv0wq0U2RfQGSg_r5YSzlgHaLu?w=198&h=314&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
   image2={require('./assets/favicon.png' )}
   title="myName" price='20'></BoxContainer>
    <View style={{width:10}}></View>
     <BoxContainer image='https://th.bing.com/th/id/OIP.tv0wq0U2RfQGSg_r5YSzlgHaLu?w=198&h=314&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    image2={require('./assets/favicon.png' )}title="myName" price='20'></BoxContainer>
  </View>
  <View style={{flexDirection:"row",justifyContent:'flex-start',alignItems:'center',}}>
  <BoxContainer image='https://th.bing.com/th/id/OIP.tv0wq0U2RfQGSg_r5YSzlgHaLu?w=198&h=314&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
   image2={require('./assets/favicon.png' )}
   title="myName" price='20'></BoxContainer>
    <View style={{width:10}}></View>
     <BoxContainer image='https://th.bing.com/th/id/OIP.tv0wq0U2RfQGSg_r5YSzlgHaLu?w=198&h=314&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    image2={require('./assets/favicon.png' )}title="myName" price='20'></BoxContainer>
  </View>
 
</View>
    
  );
}
