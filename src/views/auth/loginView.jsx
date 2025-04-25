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
      {/* header */}
      <HeaderImage></HeaderImage>
      {/* textInput */}
      <Input
        title="Email or Phone Number"
        placeholder=""
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <Input
        title="Password"
        placeholder="Enter password"
        value={password}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
      />
      <MainButton title="Login" onPress={() => { }} ></MainButton>

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