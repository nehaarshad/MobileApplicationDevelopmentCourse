import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { appColors } from '../../constants/colors';
import { spacingX } from '../../constants/scaling';

const MainButton = ({ title, onPress ,disabled}) => {
  return (
    
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: appColors.green,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:spacingX._40,
    padding:10,
  },
  text: {
    color: appColors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MainButton;