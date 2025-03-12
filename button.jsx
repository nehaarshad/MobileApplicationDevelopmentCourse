import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function MyButton({ title, onPress,color ,width}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{ backgroundColor: color, padding: 10, margin: 10, borderRadius: 5 ,width:width}}
      onPress={onPress}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );
}