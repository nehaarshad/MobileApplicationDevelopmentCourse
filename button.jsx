import React from "react";
import { Text,TouchableOpacity } from "react-native";

export default function myButton ({title,onPress}){
    return(
        <TouchableOpacity
        activeOpacity={0.8}
        style={{backgroundColor:'blue'}}
        onPress={onPress}
        >
         <Text style={{color:"white"}}>{title}</Text>
        </TouchableOpacity>
    )
}

