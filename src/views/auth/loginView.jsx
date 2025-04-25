import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { spacingX, spacingY, radius } from '../../constants/scaling';
import { appColors } from '../../constants/colors';
// import {ic}
import HeaderImage from '../../components/shared/headerImage';
import Input from '../../components/shared/input';
import MainButton from '../../components/shared/button';

const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* <ResponsiveText style={styles.title}>Login</ResponsiveText>
       */}
      {/* <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      /> */}
      <Text>hello</Text>
      {/* <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      
      <Button 
        title="Login" 
        onPress={() => {}} 
        style={styles.button}
      /> */}
{/*       
      <ResponsiveText 
        style={styles.linkText}
        onPress={() => navigation.navigate('register')}
      >
        Don't have an account? Register
      </ResponsiveText> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.offWhite,
    //alignItems:'center'
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: spacingY._5,
    color: appColors.black,
    textAlign: 'left',
  },

});

export default LoginView;