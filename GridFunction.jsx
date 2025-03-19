import React from "react"
import {Image,View,Text,TextInput} from 'react-native';


const BoxContainer = (props) => {
    return (
      <View style={{ flex: 1, padding:20,backgroundColor: 'grey', alignItems: 'center', justifyContent:"space-evenly" }}>
        <Image style={{ height: 150, width: 150, objectFit:'fill' }} source={{ uri: props.image }} />
        <Text style={{ fontSize: 28, color: 'purple', fontWeight: 'bold', textAlign: 'center' }}>{props.title}</Text>
        <View style={{ flexDirection: 'row',margin:10, alignContent:'flex-start', alignItems: 'center', backgroundColor: "red", borderRadius: 18, height: 30, width: 50 }}>
          <Image style={{margin:5, height: 20, width: 20 ,borderRadius:50}} source={props.image2} />
          <Text style={{ color: "white" ,fontSize:15}}>{props.price}</Text>
        </View>
      </View>
    )
}

export default BoxContainer;