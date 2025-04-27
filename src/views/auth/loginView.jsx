import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { spacingX, spacingY, radius } from '../../constants/scaling';
import { appColors } from '../../constants/colors';
import { login } from '../../services/authService';
import HeaderImage from '../../components/shared/headerImage';
import Input from '../../components/shared/input';
import MainButton from '../../components/shared/button';
import { firebaseAuth } from '../../constants/firebaseConfig';

const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

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
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.offWhite,
    //alignItems:'center'
  },
  fieldStyle:{
    marginVertical:spacingY._50

  },
 
});

export default LoginView;