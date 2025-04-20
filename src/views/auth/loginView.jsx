import React, { useState } from 'react';
import { View, StyleSheet ,Text} from 'react-native';
import { spacingX, spacingY, radius } from '../../constants/scaling';
import { appColors } from '../../constants/colors';
// import Button from '../../components/shared/button';
// import Input from '../../components/shared/input'
import ResponsiveText from '../../components/shared/responsiveText';

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
    paddingHorizontal: spacingX._20,
    paddingTop: spacingY._40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: spacingY._30,
    color: appColors.green,
    textAlign: 'center',
  },
  input: {
    marginBottom: spacingY._15,
  },
  button: {
    marginTop: spacingY._10,
  },
  linkText: {
    marginTop: spacingY._20,
    color: appColors.green,
    textAlign: 'center',
  },
});

export default LoginView;