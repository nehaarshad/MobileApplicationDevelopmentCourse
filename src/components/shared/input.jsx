import React from 'react';
import { TextInput, StyleSheet,View,Text } from 'react-native';
import { appColors } from '../../constants/colors';
import { spacingX,spacingY } from '../../constants/scaling';

const Input = ({ placeholder, value, onChangeText, secureTextEntry,title}) => {
  return (
     <View style={styles.form}>
            <Text style={styles.text}>{title}</Text>
            <TextInput style={styles.textInput} placeholder={placeholder} value={value} onChange={onChangeText} secureTextEntry={secureTextEntry}></TextInput>
     </View>
  );
};

const styles = StyleSheet.create({
  form:{
     marginRight:spacingX._20,
     marginLeft:spacingX._20,
   },
   textInput: {
     fontSize: 15,
     fontWeight: 'medium',
     color: appColors.black,
     marginBottom:spacingY._12,
     textAlign:'left',
     borderWidth:1,
     borderColor:appColors.black
   },
});

 export default Input;