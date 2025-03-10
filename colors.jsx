import {View,Text} from "react-native"

export default function backColor(number){
    if(number > 5){
        <View style={{backgroundColor:"purple"}}>
            <Text>number</Text>
        </View>
    }

    else if(number < 5){
        <View style={{backgroundColor:"red"}}>
            <Text>number</Text>
        </View>
    }

    else{
        <View style={{backgroundColor:"white"}}>
            <Text>number</Text>
        </View>
    }
}