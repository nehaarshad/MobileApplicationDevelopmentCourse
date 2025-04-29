import React, { useState } from 'react';
import { View, StyleSheet ,Text, Pressable} from 'react-native';
import { spacingX, spacingY, radius } from '../../constants/scaling';
import { appColors } from '../../constants/colors';
import { login } from '../../services/authService';
import HeaderImage from '../../components/shared/headerImage';
import Input from '../../components/shared/input';
import MainButton from '../../components/shared/button';
import TextButton from '../../components/shared/textButton';

const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if(!emailRegex.test(email)){
    //   alert('Please enter a valid email address');
    //   return;
    // }

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      navigation.navigate('home'); 
    } catch (error) {
      alert('Login Failed', error);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* header */}
     <HeaderImage></HeaderImage>
      {/* textInput */}
     <View style={styles.fieldStyle}>
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
     </View>
      <MainButton title="Login" onPress={handleLogin} disabled={loading}></MainButton>
      <View style={styles.navView}>
        <Text>Don't have an Account? </Text>
        <TextButton text='SignUp' onPress={()=>navigation.navigate('register')}></TextButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.offWhite,
  },
  fieldStyle:{
    marginVertical:spacingY._50

  },
  navView:{
    marginVertical:spacingY._20,
    marginHorizontal:spacingX._40,
    flexDirection:'row'
  }
});

export default LoginView;