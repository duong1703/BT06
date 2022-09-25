import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccount from './Screen/Account';
import Signin from './Screen/Signin';
import Signup from './Screen/Signup';

export default function App() {
  return (
    <View style={styles.container}>
       <Signup /> 
       {/*<CreateAccount />*/} 
      {/*<Signin />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
