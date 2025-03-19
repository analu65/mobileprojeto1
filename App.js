import Login from './screens/login';
import 'react-native-gesture-handler';
import Test from './screens/home';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Test/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

});
