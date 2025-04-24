// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Button} from '../../components/shared/button';
// import { Input } from '../../components/shared/input';
// import { appColors } from '../../constants/colors';
// import { useAuth } from '../../context/authContext'

// const RegisterView = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const { register } = useAuth();

//   const handleRegister = async () => {
//     try {
//       // await register(email, password, name);
//       console.log("Called");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create Account</Text>
//       <Input
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />
//       <Input
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />
//       <Input
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//       />
//       <Button title="Register" onPress={handleRegister} style={styles.button} />
//       <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
//         Already have an account? Login
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: spacing.large,
//     backgroundColor: appColors.background,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: spacing.extraLarge,
//     textAlign: 'center',
//     color: appColors.primary,
//   },
//   input: {
//     marginBottom: spacing.medium,
//   },
//   button: {
//     marginTop: spacing.small,
//   },
//   link: {
//     marginTop: spacing.medium,
//     textAlign: 'center',
//     color: appColors.secondary,
//   },
// });

// export default RegisterView;