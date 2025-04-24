// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Button } from '../components/common';
// import { useAuth } from '../context/AuthContext';
// import { appColors, spacing } from '../constants';

// const HomeScreen = () => {
//   const { user, logout } = useAuth();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome, {user?.displayName || 'User'}!</Text>
//       <Text style={styles.email}>{user?.email}</Text>
//       <Button title="Logout" onPress={logout} style={styles.button} />
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
//     marginBottom: spacing.small,
//     textAlign: 'center',
//     color: appColors.primary,
//   },
//   email: {
//     fontSize: 16,
//     marginBottom: spacing.extraLarge,
//     textAlign: 'center',
//     color: appColors.darkGray,
//   },
//   button: {
//     marginTop: spacing.medium,
//   },
// });

// export default HomeScreen;